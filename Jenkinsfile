pipeline {
    agent none // Specifies that each stage will define its own agent
    environment {
        REGISTRY_URL = 'docker.io/timesnotrelative'
        DROPLET_IP   = '138.197.72.196'
        DROPLET_USER = 'root'
    }

    stages {
        stage('Checkout') {
            agent any
            steps {
                checkout scm
            }
        }

        stage('Validate & Test') {
            agent any
            steps {
                echo 'Skipping tests for now - focusing on build pipeline'
            }
        }

        stage('Build & Push Production Images') {
            agent any
            environment {
                DOCKER_CREDS = credentials('docker-creds')
            }
            steps {
                script {
                    def registry = env.REGISTRY_URL
                    def buildNum = env.BUILD_NUMBER
                    
                    sh "echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin"
                    
                    echo "Building API image..."
                    
                    // DEBUG: List all files in the current directory
                    sh 'ls -la'
                    
                    // This is the command that is failing
                    sh "docker build -f api/Dockerfile.prod -t ${registry}/api-app:${buildNum} ."
                    
                    echo "Building Web image..."
                    sh "docker build -f web/Dockerfile.prod -t ${registry}/web-app:${buildNum} ."
                    
                    echo "Pushing images to registry..."
                    sh "docker push ${registry}/api-app:${buildNum}"
                    sh "docker push ${registry}/web-app:${buildNum}"
                    
                    echo "Docker build and push completed successfully!"
                }
            }
        }

        stage('Deploy to Production') {
            agent any
            steps {
                echo "Starting deployment to ${env.DROPLET_IP}..."
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'do-ssh-key', keyFileVariable: 'SSH_KEY'),
                    string(credentialsId: 'mongo-prod-user', variable: 'MONGO_USER'),
                    string(credentialsId: 'mongo-prod-pass', variable: 'MONGO_PASS')
                ]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i $SSH_KEY ${env.DROPLET_USER}@${env.DROPLET_IP} \\
                            "cd /app && \\
                             git fetch origin && \\
                             git reset --hard origin/main && \\
                             TAG=${env.BUILD_NUMBER} MONGO_ROOT_USER=\$MONGO_USER MONGO_ROOT_PASSWORD=\$MONGO_PASS \\
                             docker-compose -f docker-compose.prod.yml pull && \\
                             TAG=${env.BUILD_NUMBER} MONGO_ROOT_USER=\$MONGO_USER MONGO_ROOT_PASSWORD=\$MONGO_PASS \\
                             docker-compose -f docker-compose.prod.yml up -d --remove-orphans && \\
                             docker ps"
                    """
                }
                echo "Production deployment finished!"
            }
        }

        /*
        stage('Build Mobile App') {
            agent {
                docker {
                    image 'ghcr.io/cirruslabs/flutter:stable'
                    // Allocate 6GB of RAM to the container on your 8GB droplet
                    args '-u root -m 6g --memory-swap 6g'
                    // Add volume mounts to cache Gradle and Pub dependencies for faster builds
                    args '-v /var/lib/jenkins_home/.gradle:/root/.gradle -v /var/lib/jenkins_home/.pub-cache:/root/.pub-cache'
                }
            }
            steps {
                dir('mobile') {
                    sh '''
                        # Give the Gradle JVM a 4GB heap size for stable builds
                        export GRADLE_OPTS="-Dorg.gradle.daemon=false -Xmx4g"

                        flutter --version
                        flutter clean
                        flutter pub get

                        # Build the release APK
                        flutter build apk --release
                    '''
                }

                archiveArtifacts artifacts: 'mobile/build/app/outputs/flutter-apk/*.apk', fingerprint: true

                echo "✅ Mobile APK built successfully!"
                echo "📱 Download from Jenkins: Build #${env.BUILD_NUMBER} → Artifacts"
            }
        }
        */
    }
}

