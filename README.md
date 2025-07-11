# 

```
mern&flutter
├─ .DS_Store
├─ .dockerignore
├─ .env.dev
├─ .env.prod
├─ .jenkins
│  ├─ .DS_Store
│  ├─ libraries
│  │  ├─ do-deploy.groovy
│  │  └─ docker-utils.groovy
│  └─ pipelines
│     ├─ api-pipeline.groovy
│     ├─ mobile-pipeline.groovy
│     └─ web-pipeline.groovy
├─ Jenkinsfile
├─ Makefile
├─ README.md
├─ api
│  ├─ .DS_Store
│  ├─ Dockerfile.dev
│  ├─ Dockerfile.prod
│  ├─ docker-healthcheck.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ .DS_Store
│  │  ├─ .dockerignore
│  │  ├─ app.ts
│  │  ├─ config
│  │  │  ├─ cloudinary.ts
│  │  │  ├─ db.ts
│  │  │  └─ env.ts
│  │  ├─ controllers
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ feed.controller.ts
│  │  │  └─ post.controller.ts
│  │  ├─ middleware
│  │  │  ├─ auth.middleware.ts
│  │  │  ├─ error-handler.ts
│  │  │  └─ validation.middleware.ts
│  │  ├─ models
│  │  │  ├─ Comment.ts
│  │  │  ├─ Post.ts
│  │  │  └─ User.ts
│  │  ├─ routes
│  │  │  ├─ graphql
│  │  │  │  ├─ resolvers
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ resolvers.ts
│  │  │  │  └─ schema.ts
│  │  │  └─ v1
│  │  │     ├─ auth.routes.ts
│  │  │     ├─ index.ts
│  │  │     └─ post.routes.ts
│  │  ├─ server.ts
│  │  ├─ services
│  │  │  ├─ auth.service.ts
│  │  │  ├─ feed.service.ts
│  │  │  └─ post.service.ts
│  │  ├─ types
│  │  │  └─ express.d.ts
│  │  └─ utils
│  │     ├─ apiError.ts
│  │     ├─ logger.ts
│  │     └─ redis.ts
│  ├─ test
│  │  ├─ .DS_Store
│  │  ├─ integration
│  │  │  ├─ auth.test.ts
│  │  │  └─ post.test.ts
│  │  └─ unit
│  │     └─ services
│  └─ tsconfig.json
├─ docker-compose.prod.yml
├─ docker-compose.yml
├─ infrastructure
│  ├─ .DS_Store
│  ├─ digitalocean
│  │  ├─ droplet-init.sh
│  │  └─ firewall-rules.json
│  ├─ docker
│  │  ├─ .DS_Store
│  │  ├─ swarm
│  │  └─ volumes
│  │     └─ mongo-data
│  ├─ monitoring
│  │  ├─ grafana-dashboards
│  │  └─ prometheus.yml
│  └─ nginx
│     ├─ mime.types
│     ├─ nginx.conf
│     └─ sites
│        └─ social-app.conf
├─ mobile
│  ├─ .DS_Store
│  ├─ .dart_tool
│  │  ├─ chrome-device
│  │  │  └─ Default
│  │  │     ├─ Account Web Data
│  │  │     ├─ Affiliation Database
│  │  │     ├─ AutofillStrikeDatabase
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ BookmarkMergedSurfaceOrdering
│  │  │     ├─ BrowsingTopicsSiteData
│  │  │     ├─ BrowsingTopicsState
│  │  │     ├─ BudgetDatabase
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ ClientCertificates
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ Cookies
│  │  │     ├─ Cookies-journal
│  │  │     ├─ DIPS
│  │  │     ├─ DIPS-wal
│  │  │     ├─ Download Service
│  │  │     │  ├─ EntryDB
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ LOG.old
│  │  │     │  └─ Files
│  │  │     ├─ Extension State
│  │  │     │  ├─ 000003.log
│  │  │     │  ├─ CURRENT
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  ├─ LOG.old
│  │  │     │  └─ MANIFEST-000001
│  │  │     ├─ Favicons
│  │  │     ├─ Favicons-journal
│  │  │     ├─ Feature Engagement Tracker
│  │  │     │  ├─ AvailabilityDB
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ LOG.old
│  │  │     │  └─ EventDB
│  │  │     │     ├─ LOCK
│  │  │     │     ├─ LOG
│  │  │     │     └─ LOG.old
│  │  │     ├─ GCM Store
│  │  │     │  ├─ 000003.log
│  │  │     │  ├─ CURRENT
│  │  │     │  ├─ Encryption
│  │  │     │  │  ├─ 000003.log
│  │  │     │  │  ├─ CURRENT
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  ├─ LOG.old
│  │  │     │  │  └─ MANIFEST-000001
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  ├─ LOG.old
│  │  │     │  └─ MANIFEST-000001
│  │  │     ├─ History
│  │  │     ├─ History-journal
│  │  │     ├─ IndexedDB
│  │  │     │  ├─ http_localhost_52592.indexeddb.leveldb
│  │  │     │  │  ├─ 000003.log
│  │  │     │  │  ├─ CURRENT
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ MANIFEST-000001
│  │  │     │  ├─ http_localhost_52628.indexeddb.leveldb
│  │  │     │  │  ├─ 000006.log
│  │  │     │  │  ├─ 000008.ldb
│  │  │     │  │  ├─ CURRENT
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ MANIFEST-000001
│  │  │     │  ├─ http_localhost_53102.indexeddb.leveldb
│  │  │     │  │  ├─ 000003.log
│  │  │     │  │  ├─ CURRENT
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ MANIFEST-000001
│  │  │     │  └─ http_localhost_55390.indexeddb.leveldb
│  │  │     │     ├─ 000003.log
│  │  │     │     ├─ CURRENT
│  │  │     │     ├─ LOCK
│  │  │     │     ├─ LOG
│  │  │     │     └─ MANIFEST-000001
│  │  │     ├─ LOCK
│  │  │     ├─ LOG
│  │  │     ├─ LOG.old
│  │  │     ├─ Local Storage
│  │  │     │  └─ leveldb
│  │  │     │     ├─ 000003.log
│  │  │     │     ├─ CURRENT
│  │  │     │     ├─ LOCK
│  │  │     │     ├─ LOG
│  │  │     │     ├─ LOG.old
│  │  │     │     └─ MANIFEST-000001
│  │  │     ├─ Login Data
│  │  │     ├─ Login Data For Account
│  │  │     ├─ Login Data For Account-journal
│  │  │     ├─ Login Data-journal
│  │  │     ├─ Network Action Predictor
│  │  │     ├─ Network Action Predictor-journal
│  │  │     ├─ Network Persistent State
│  │  │     ├─ PersistentOriginTrials
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ Preferences
│  │  │     ├─ PreferredApps
│  │  │     ├─ README
│  │  │     ├─ Reporting and NEL
│  │  │     ├─ Reporting and NEL-journal
│  │  │     ├─ Safe Browsing Cookies
│  │  │     ├─ Safe Browsing Cookies-journal
│  │  │     ├─ Secure Preferences
│  │  │     ├─ Segmentation Platform
│  │  │     │  ├─ SegmentInfoDB
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ LOG.old
│  │  │     │  ├─ SignalDB
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  └─ LOG.old
│  │  │     │  └─ SignalStorageConfigDB
│  │  │     │     ├─ LOCK
│  │  │     │     ├─ LOG
│  │  │     │     └─ LOG.old
│  │  │     ├─ ServerCertificate
│  │  │     ├─ ServerCertificate-journal
│  │  │     ├─ Service Worker
│  │  │     │  ├─ Database
│  │  │     │  │  ├─ 000003.log
│  │  │     │  │  ├─ CURRENT
│  │  │     │  │  ├─ LOCK
│  │  │     │  │  ├─ LOG
│  │  │     │  │  ├─ LOG.old
│  │  │     │  │  └─ MANIFEST-000001
│  │  │     │  └─ ScriptCache
│  │  │     │     ├─ 2cc80dabc69f58b6_0
│  │  │     │     ├─ 4cb013792b196a35_0
│  │  │     │     ├─ 67a473248953641b_0
│  │  │     │     ├─ ba23d8ecda68de77_0
│  │  │     │     ├─ f1cdccba37924bda_0
│  │  │     │     ├─ f1cdccba37924bda_1
│  │  │     │     ├─ fa813c9ad67834ac_0
│  │  │     │     ├─ index
│  │  │     │     └─ index-dir
│  │  │     │        └─ the-real-index
│  │  │     ├─ Session Storage
│  │  │     │  ├─ 000003.log
│  │  │     │  ├─ CURRENT
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  ├─ LOG.old
│  │  │     │  └─ MANIFEST-000001
│  │  │     ├─ Sessions
│  │  │     │  ├─ Session_13396582488204862
│  │  │     │  ├─ Session_13396598264024135
│  │  │     │  ├─ Session_13396598367722440
│  │  │     │  ├─ Session_13396598856721495
│  │  │     │  ├─ Session_13396599854135364
│  │  │     │  ├─ Session_13396620519123865
│  │  │     │  ├─ Tabs_13396583003562533
│  │  │     │  ├─ Tabs_13396598264423127
│  │  │     │  ├─ Tabs_13396598368120829
│  │  │     │  ├─ Tabs_13396598857118369
│  │  │     │  ├─ Tabs_13396599854552784
│  │  │     │  └─ Tabs_13396620519623163
│  │  │     ├─ Shared Dictionary
│  │  │     │  ├─ cache
│  │  │     │  │  ├─ index
│  │  │     │  │  └─ index-dir
│  │  │     │  │     └─ the-real-index
│  │  │     │  ├─ db
│  │  │     │  └─ db-journal
│  │  │     ├─ SharedStorage
│  │  │     ├─ Shortcuts
│  │  │     ├─ Site Characteristics Database
│  │  │     │  ├─ 000003.log
│  │  │     │  ├─ CURRENT
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  ├─ LOG.old
│  │  │     │  └─ MANIFEST-000001
│  │  │     ├─ Sync Data
│  │  │     │  └─ LevelDB
│  │  │     │     ├─ 000003.log
│  │  │     │     ├─ CURRENT
│  │  │     │     ├─ LOCK
│  │  │     │     ├─ LOG
│  │  │     │     ├─ LOG.old
│  │  │     │     └─ MANIFEST-000001
│  │  │     ├─ Top Sites
│  │  │     ├─ Top Sites-journal
│  │  │     ├─ TransportSecurity
│  │  │     ├─ Trust Tokens
│  │  │     ├─ Trust Tokens-journal
│  │  │     ├─ Web Data
│  │  │     ├─ Web Data-journal
│  │  │     ├─ WebStorage
│  │  │     │  ├─ QuotaManager
│  │  │     │  └─ QuotaManager-journal
│  │  │     ├─ blob_storage
│  │  │     │  ├─ 046ab005-9f1a-4436-9007-cb90cd1617d4
│  │  │     │  ├─ 6057a533-432f-4786-b25d-db18d7377d79
│  │  │     │  ├─ 9cbafb7f-99f3-4347-8005-52a23b9183f9
│  │  │     │  └─ ffa5ef14-f30b-4e7c-954e-2f44aecc2760
│  │  │     ├─ chrome_cart_db
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ commerce_subscription_db
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ discounts_db
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ heavy_ad_intervention_opt_out.db
│  │  │     ├─ heavy_ad_intervention_opt_out.db-journal
│  │  │     ├─ optimization_guide_hint_cache_store
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ parcel_tracking_db
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  └─ LOG.old
│  │  │     ├─ passkey_enclave_state
│  │  │     ├─ shared_proto_db
│  │  │     │  ├─ 000003.log
│  │  │     │  ├─ 000004.log
│  │  │     │  ├─ 000005.ldb
│  │  │     │  ├─ CURRENT
│  │  │     │  ├─ LOCK
│  │  │     │  ├─ LOG
│  │  │     │  ├─ LOG.old
│  │  │     │  ├─ MANIFEST-000001
│  │  │     │  └─ metadata
│  │  │     │     ├─ 000003.log
│  │  │     │     ├─ CURRENT
│  │  │     │     ├─ LOCK
│  │  │     │     ├─ LOG
│  │  │     │     ├─ LOG.old
│  │  │     │     └─ MANIFEST-000001
│  │  │     └─ trusted_vault.pb
│  │  ├─ dartpad
│  │  │  └─ web_plugin_registrant.dart
│  │  ├─ package_config.json
│  │  ├─ package_config_subset
│  │  ├─ package_graph.json
│  │  └─ version
│  ├─ .flutter-plugins-dependencies
│  ├─ .idea
│  │  ├─ .DS_Store
│  │  ├─ libraries
│  │  │  ├─ Dart_SDK.xml
│  │  │  └─ KotlinJavaRuntime.xml
│  │  ├─ modules.xml
│  │  ├─ runConfigurations
│  │  │  └─ main_dart.xml
│  │  └─ workspace.xml
│  ├─ .metadata
│  ├─ README.md
│  ├─ analysis_options.yaml
│  ├─ android
│  │  ├─ .DS_Store
│  │  ├─ app
│  │  │  ├─ build.gradle.kts
│  │  │  └─ src
│  │  │     ├─ debug
│  │  │     │  └─ AndroidManifest.xml
│  │  │     ├─ main
│  │  │     │  ├─ AndroidManifest.xml
│  │  │     │  ├─ java
│  │  │     │  │  └─ io
│  │  │     │  │     └─ flutter
│  │  │     │  │        └─ plugins
│  │  │     │  │           └─ GeneratedPluginRegistrant.java
│  │  │     │  ├─ kotlin
│  │  │     │  │  └─ com
│  │  │     │  │     └─ example
│  │  │     │  │        └─ mobile
│  │  │     │  │           └─ MainActivity.kt
│  │  │     │  └─ res
│  │  │     │     ├─ drawable
│  │  │     │     │  └─ launch_background.xml
│  │  │     │     ├─ drawable-v21
│  │  │     │     │  └─ launch_background.xml
│  │  │     │     ├─ mipmap-hdpi
│  │  │     │     │  └─ ic_launcher.png
│  │  │     │     ├─ mipmap-mdpi
│  │  │     │     │  └─ ic_launcher.png
│  │  │     │     ├─ mipmap-xhdpi
│  │  │     │     │  └─ ic_launcher.png
│  │  │     │     ├─ mipmap-xxhdpi
│  │  │     │     │  └─ ic_launcher.png
│  │  │     │     ├─ mipmap-xxxhdpi
│  │  │     │     │  └─ ic_launcher.png
│  │  │     │     ├─ values
│  │  │     │     │  └─ styles.xml
│  │  │     │     └─ values-night
│  │  │     │        └─ styles.xml
│  │  │     └─ profile
│  │  │        └─ AndroidManifest.xml
│  │  ├─ build.gradle.kts
│  │  ├─ gradle
│  │  │  └─ wrapper
│  │  │     ├─ gradle-wrapper.jar
│  │  │     └─ gradle-wrapper.properties
│  │  ├─ gradle.properties
│  │  ├─ gradlew
│  │  ├─ gradlew.bat
│  │  ├─ local.properties
│  │  ├─ mobile_android.iml
│  │  └─ settings.gradle.kts
│  ├─ build
│  │  ├─ 5ed1ec56e46357ec5ad2faed02821e03.cache.dill.track.dill
│  │  ├─ 883c5b02f17f69f2a056200a06da659b
│  │  │  ├─ _composite.stamp
│  │  │  ├─ gen_dart_plugin_registrant.stamp
│  │  │  └─ gen_localizations.stamp
│  │  └─ flutter_assets
│  │     ├─ AssetManifest.bin
│  │     ├─ AssetManifest.bin.json
│  │     ├─ AssetManifest.json
│  │     ├─ FontManifest.json
│  │     ├─ NOTICES
│  │     ├─ fonts
│  │     │  └─ MaterialIcons-Regular.otf
│  │     ├─ packages
│  │     │  └─ cupertino_icons
│  │     │     └─ assets
│  │     │        └─ CupertinoIcons.ttf
│  │     └─ shaders
│  │        └─ ink_sparkle.frag
│  ├─ ios
│  │  ├─ .DS_Store
│  │  ├─ Flutter
│  │  │  ├─ AppFrameworkInfo.plist
│  │  │  ├─ Debug.xcconfig
│  │  │  ├─ Generated.xcconfig
│  │  │  ├─ Release.xcconfig
│  │  │  ├─ ephemeral
│  │  │  │  ├─ flutter_lldb_helper.py
│  │  │  │  └─ flutter_lldbinit
│  │  │  └─ flutter_export_environment.sh
│  │  ├─ Runner
│  │  │  ├─ AppDelegate.swift
│  │  │  ├─ Assets.xcassets
│  │  │  │  ├─ AppIcon.appiconset
│  │  │  │  │  ├─ Contents.json
│  │  │  │  │  ├─ Icon-App-1024x1024@1x.png
│  │  │  │  │  ├─ Icon-App-20x20@1x.png
│  │  │  │  │  ├─ Icon-App-20x20@2x.png
│  │  │  │  │  ├─ Icon-App-20x20@3x.png
│  │  │  │  │  ├─ Icon-App-29x29@1x.png
│  │  │  │  │  ├─ Icon-App-29x29@2x.png
│  │  │  │  │  ├─ Icon-App-29x29@3x.png
│  │  │  │  │  ├─ Icon-App-40x40@1x.png
│  │  │  │  │  ├─ Icon-App-40x40@2x.png
│  │  │  │  │  ├─ Icon-App-40x40@3x.png
│  │  │  │  │  ├─ Icon-App-60x60@2x.png
│  │  │  │  │  ├─ Icon-App-60x60@3x.png
│  │  │  │  │  ├─ Icon-App-76x76@1x.png
│  │  │  │  │  ├─ Icon-App-76x76@2x.png
│  │  │  │  │  └─ Icon-App-83.5x83.5@2x.png
│  │  │  │  └─ LaunchImage.imageset
│  │  │  │     ├─ Contents.json
│  │  │  │     ├─ LaunchImage.png
│  │  │  │     ├─ LaunchImage@2x.png
│  │  │  │     ├─ LaunchImage@3x.png
│  │  │  │     └─ README.md
│  │  │  ├─ Base.lproj
│  │  │  │  ├─ LaunchScreen.storyboard
│  │  │  │  └─ Main.storyboard
│  │  │  ├─ GeneratedPluginRegistrant.h
│  │  │  ├─ GeneratedPluginRegistrant.m
│  │  │  ├─ Info.plist
│  │  │  └─ Runner-Bridging-Header.h
│  │  ├─ Runner.xcodeproj
│  │  │  ├─ project.pbxproj
│  │  │  ├─ project.xcworkspace
│  │  │  │  ├─ contents.xcworkspacedata
│  │  │  │  └─ xcshareddata
│  │  │  │     ├─ IDEWorkspaceChecks.plist
│  │  │  │     └─ WorkspaceSettings.xcsettings
│  │  │  └─ xcshareddata
│  │  │     └─ xcschemes
│  │  │        └─ Runner.xcscheme
│  │  ├─ Runner.xcworkspace
│  │  │  ├─ contents.xcworkspacedata
│  │  │  └─ xcshareddata
│  │  │     ├─ IDEWorkspaceChecks.plist
│  │  │     └─ WorkspaceSettings.xcsettings
│  │  └─ RunnerTests
│  │     └─ RunnerTests.swift
│  ├─ lib
│  │  ├─ .DS_Store
│  │  ├─ app.dart
│  │  ├─ core
│  │  │  ├─ .DS_Store
│  │  │  ├─ api
│  │  │  │  └─ graphql_client.dart
│  │  │  ├─ di
│  │  │  ├─ navigation
│  │  │  ├─ theme
│  │  │  └─ utils
│  │  ├─ features
│  │  │  ├─ .DS_Store
│  │  │  ├─ auth
│  │  │  │  ├─ .DS_Store
│  │  │  │  ├─ data
│  │  │  │  │  ├─ data_sources
│  │  │  │  │  ├─ models
│  │  │  │  │  └─ repositories
│  │  │  │  ├─ domain
│  │  │  │  │  ├─ entities
│  │  │  │  │  ├─ repositories
│  │  │  │  │  └─ use_cases
│  │  │  │  └─ presentation
│  │  │  │     ├─ screens
│  │  │  │     │  ├─ login_screen.dart
│  │  │  │     │  └─ signup_screen.dart
│  │  │  │     └─ widgets
│  │  │  │        └─ auth_form.dart
│  │  │  ├─ feed
│  │  │  │  ├─ .DS_Store
│  │  │  │  ├─ data
│  │  │  │  │  ├─ data_sources
│  │  │  │  │  ├─ graphql
│  │  │  │  │  │  └─ post_queries.dart
│  │  │  │  │  ├─ models
│  │  │  │  │  └─ repositories
│  │  │  │  ├─ domain
│  │  │  │  │  ├─ entities
│  │  │  │  │  ├─ repositories
│  │  │  │  │  └─ use_cases
│  │  │  │  └─ presentation
│  │  │  │     ├─ screens
│  │  │  │     │  ├─ create_post_screen.dart
│  │  │  │     │  └─ feed_screen.dart
│  │  │  │     └─ widgets
│  │  │  │        ├─ comment_bubble.dart
│  │  │  │        └─ post_card.dart
│  │  │  └─ profile
│  │  └─ main.dart
│  ├─ linux
│  │  ├─ .DS_Store
│  │  ├─ CMakeLists.txt
│  │  ├─ flutter
│  │  │  ├─ CMakeLists.txt
│  │  │  ├─ ephemeral
│  │  │  │  └─ .plugin_symlinks
│  │  │  │     ├─ connectivity_plus
│  │  │  │     │  ├─ CHANGELOG.md
│  │  │  │     │  ├─ LICENSE
│  │  │  │     │  ├─ README.md
│  │  │  │     │  ├─ android
│  │  │  │     │  │  ├─ build.gradle
│  │  │  │     │  │  ├─ gradle
│  │  │  │     │  │  │  └─ wrapper
│  │  │  │     │  │  │     └─ gradle-wrapper.properties
│  │  │  │     │  │  ├─ gradle.properties
│  │  │  │     │  │  ├─ settings.gradle
│  │  │  │     │  │  └─ src
│  │  │  │     │  │     └─ main
│  │  │  │     │  │        ├─ AndroidManifest.xml
│  │  │  │     │  │        └─ java
│  │  │  │     │  │           └─ dev
│  │  │  │     │  │              └─ fluttercommunity
│  │  │  │     │  │                 └─ plus
│  │  │  │     │  │                    └─ connectivity
│  │  │  │     │  │                       ├─ Connectivity.java
│  │  │  │     │  │                       ├─ ConnectivityBroadcastReceiver.java
│  │  │  │     │  │                       ├─ ConnectivityMethodChannelHandler.java
│  │  │  │     │  │                       └─ ConnectivityPlugin.java
│  │  │  │     │  ├─ example
│  │  │  │     │  │  ├─ README.md
│  │  │  │     │  │  ├─ analysis_options.yaml
│  │  │  │     │  │  ├─ android
│  │  │  │     │  │  │  ├─ app
│  │  │  │     │  │  │  │  ├─ build.gradle
│  │  │  │     │  │  │  │  └─ src
│  │  │  │     │  │  │  │     └─ main
│  │  │  │     │  │  │  │        ├─ AndroidManifest.xml
│  │  │  │     │  │  │  │        ├─ java
│  │  │  │     │  │  │  │        │  └─ io
│  │  │  │     │  │  │  │        │     └─ flutter
│  │  │  │     │  │  │  │        │        └─ plugins
│  │  │  │     │  │  │  │        │           └─ connectivityexample
│  │  │  │     │  │  │  │        │              └─ FlutterActivityTest.java
│  │  │  │     │  │  │  │        └─ res
│  │  │  │     │  │  │  │           ├─ mipmap-hdpi
│  │  │  │     │  │  │  │           │  └─ ic_launcher.png
│  │  │  │     │  │  │  │           ├─ mipmap-mdpi
│  │  │  │     │  │  │  │           │  └─ ic_launcher.png
│  │  │  │     │  │  │  │           ├─ mipmap-xhdpi
│  │  │  │     │  │  │  │           │  └─ ic_launcher.png
│  │  │  │     │  │  │  │           ├─ mipmap-xxhdpi
│  │  │  │     │  │  │  │           │  └─ ic_launcher.png
│  │  │  │     │  │  │  │           └─ mipmap-xxxhdpi
│  │  │  │     │  │  │  │              └─ ic_launcher.png
│  │  │  │     │  │  │  ├─ build.gradle
│  │  │  │     │  │  │  ├─ gradle
│  │  │  │     │  │  │  │  └─ wrapper
│  │  │  │     │  │  │  │     └─ gradle-wrapper.properties
│  │  │  │     │  │  │  ├─ gradle.properties
│  │  │  │     │  │  │  └─ settings.gradle
│  │  │  │     │  │  ├─ integration_test
│  │  │  │     │  │  │  └─ connectivity_plus_test.dart
│  │  │  │     │  │  ├─ ios
│  │  │  │     │  │  │  ├─ Flutter
│  │  │  │     │  │  │  │  ├─ AppFrameworkInfo.plist
│  │  │  │     │  │  │  │  ├─ Debug.xcconfig
│  │  │  │     │  │  │  │  └─ Release.xcconfig
│  │  │  │     │  │  │  ├─ Runner
│  │  │  │     │  │  │  │  ├─ AppDelegate.swift
│  │  │  │     │  │  │  │  ├─ Assets.xcassets
│  │  │  │     │  │  │  │  │  ├─ AppIcon.appiconset
│  │  │  │     │  │  │  │  │  │  ├─ Contents.json
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-1024x1024@1x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-20x20@1x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-20x20@2x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-20x20@3x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-29x29@1x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-29x29@2x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-29x29@3x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-40x40@1x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-40x40@2x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-40x40@3x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-60x60@2x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-60x60@3x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-76x76@1x.png
│  │  │  │     │  │  │  │  │  │  ├─ Icon-App-76x76@2x.png
│  │  │  │     │  │  │  │  │  │  └─ Icon-App-83.5x83.5@2x.png
│  │  │  │     │  │  │  │  │  └─ LaunchImage.imageset
│  │  │  │     │  │  │  │  │     ├─ Contents.json
│  │  │  │     │  │  │  │  │     ├─ LaunchImage.png
│  │  │  │     │  │  │  │  │     ├─ LaunchImage@2x.png
│  │  │  │     │  │  │  │  │     ├─ LaunchImage@3x.png
│  │  │  │     │  │  │  │  │     └─ README.md
│  │  │  │     │  │  │  │  ├─ Base.lproj
│  │  │  │     │  │  │  │  │  ├─ LaunchScreen.storyboard
│  │  │  │     │  │  │  │  │  └─ Main.storyboard
│  │  │  │     │  │  │  │  ├─ Info.plist
│  │  │  │     │  │  │  │  └─ Runner-Bridging-Header.h
│  │  │  │     │  │  │  ├─ Runner.xcodeproj
│  │  │  │     │  │  │  │  ├─ project.pbxproj
│  │  │  │     │  │  │  │  ├─ project.xcworkspace
│  │  │  │     │  │  │  │  │  ├─ contents.xcworkspacedata
│  │  │  │     │  │  │  │  │  └─ xcshareddata
│  │  │  │     │  │  │  │  │     ├─ IDEWorkspaceChecks.plist
│  │  │  │     │  │  │  │  │     └─ WorkspaceSettings.xcsettings
│  │  │  │     │  │  │  │  └─ xcshareddata
│  │  │  │     │  │  │  │     └─ xcschemes
│  │  │  │     │  │  │  │        └─ Runner.xcscheme
│  │  │  │     │  │  │  ├─ Runner.xcworkspace
│  │  │  │     │  │  │  │  ├─ contents.xcworkspacedata
│  │  │  │     │  │  │  │  └─ xcshareddata
│  │  │  │     │  │  │  │     ├─ IDEWorkspaceChecks.plist
│  │  │  │     │  │  │  │     └─ WorkspaceSettings.xcsettings
│  │  │  │     │  │  │  └─ RunnerTests
│  │  │  │     │  │  │     └─ RunnerTests.swift
│  │  │  │     │  │  ├─ lib
│  │  │  │     │  │  │  └─ main.dart
│  │  │  │     │  │  ├─ linux
│  │  │  │     │  │  │  ├─ CMakeLists.txt
│  │  │  │     │  │  │  ├─ flutter
│  │  │  │     │  │  │  │  └─ CMakeLists.txt
│  │  │  │     │  │  │  ├─ main.cc
│  │  │  │     │  │  │  ├─ my_application.cc
│  │  │  │     │  │  │  └─ my_application.h
│  │  │  │     │  │  ├─ macos
│  │  │  │     │  │  │  ├─ Flutter
│  │  │  │     │  │  │  │  ├─ Flutter-Debug.xcconfig
│  │  │  │     │  │  │  │  └─ Flutter-Release.xcconfig
│  │  │  │     │  │  │  ├─ Runner
│  │  │  │     │  │  │  │  ├─ AppDelegate.swift
│  │  │  │     │  │  │  │  ├─ Assets.xcassets
│  │  │  │     │  │  │  │  │  └─ AppIcon.appiconset
│  │  │  │     │  │  │  │  │     ├─ Contents.json
│  │  │  │     │  │  │  │  │     ├─ app_icon_1024.png
│  │  │  │     │  │  │  │  │     ├─ app_icon_128.png
│  │  │  │     │  │  │  │  │     ├─ app_icon_16.png
│  │  │  │     │  │  │  │  │     ├─ app_icon_256.png
│  │  │  │     │  │  │  │  │     ├─ app_icon_32.png
│  │  │  │     │  │  │  │  │     ├─ app_icon_512.png
│  │  │  │     │  │  │  │  │     └─ app_icon_64.png
│  │  │  │     │  │  │  │  ├─ Base.lproj
│  │  │  │     │  │  │  │  │  └─ MainMenu.xib
│  │  │  │     │  │  │  │  ├─ Configs
│  │  │  │     │  │  │  │  │  ├─ AppInfo.xcconfig
│  │  │  │     │  │  │  │  │  ├─ Debug.xcconfig
│  │  │  │     │  │  │  │  │  ├─ Release.xcconfig
│  │  │  │     │  │  │  │  │  └─ Warnings.xcconfig
│  │  │  │     │  │  │  │  ├─ DebugProfile.entitlements
│  │  │  │     │  │  │  │  ├─ Info.plist
│  │  │  │     │  │  │  │  ├─ MainFlutterWindow.swift
│  │  │  │     │  │  │  │  └─ Release.entitlements
│  │  │  │     │  │  │  ├─ Runner.xcodeproj
│  │  │  │     │  │  │  │  ├─ project.pbxproj
│  │  │  │     │  │  │  │  ├─ project.xcworkspace
│  │  │  │     │  │  │  │  │  └─ xcshareddata
│  │  │  │     │  │  │  │  │     └─ IDEWorkspaceChecks.plist
│  │  │  │     │  │  │  │  └─ xcshareddata
│  │  │  │     │  │  │  │     └─ xcschemes
│  │  │  │     │  │  │  │        └─ Runner.xcscheme
│  │  │  │     │  │  │  ├─ Runner.xcworkspace
│  │  │  │     │  │  │  │  ├─ contents.xcworkspacedata
│  │  │  │     │  │  │  │  └─ xcshareddata
│  │  │  │     │  │  │  │     └─ IDEWorkspaceChecks.plist
│  │  │  │     │  │  │  └─ RunnerTests
│  │  │  │     │  │  │     └─ RunnerTests.swift
│  │  │  │     │  │  ├─ pubspec.yaml
│  │  │  │     │  │  ├─ web
│  │  │  │     │  │  │  ├─ favicon.png
│  │  │  │     │  │  │  ├─ icons
│  │  │  │     │  │  │  │  ├─ Icon-192.png
│  │  │  │     │  │  │  │  ├─ Icon-512.png
│  │  │  │     │  │  │  │  ├─ Icon-maskable-192.png
│  │  │  │     │  │  │  │  └─ Icon-maskable-512.png
│  │  │  │     │  │  │  ├─ index.html
│  │  │  │     │  │  │  └─ manifest.json
│  │  │  │     │  │  └─ windows
│  │  │  │     │  │     ├─ CMakeLists.txt
│  │  │  │     │  │     ├─ flutter
│  │  │  │     │  │     │  └─ CMakeLists.txt
│  │  │  │     │  │     └─ runner
│  │  │  │     │  │        ├─ CMakeLists.txt
│  │  │  │     │  │        ├─ Runner.rc
│  │  │  │     │  │        ├─ flutter_window.cpp
│  │  │  │     │  │        ├─ flutter_window.h
│  │  │  │     │  │        ├─ main.cpp
│  │  │  │     │  │        ├─ resource.h
│  │  │  │     │  │        ├─ resources
│  │  │  │     │  │        │  └─ app_icon.ico
│  │  │  │     │  │        ├─ run_loop.cpp
│  │  │  │     │  │        ├─ run_loop.h
│  │  │  │     │  │        ├─ runner.exe.manifest
│  │  │  │     │  │        ├─ utils.cpp
│  │  │  │     │  │        ├─ utils.h
│  │  │  │     │  │        ├─ win32_window.cpp
│  │  │  │     │  │        └─ win32_window.h
│  │  │  │     │  ├─ ios
│  │  │  │     │  │  ├─ connectivity_plus
│  │  │  │     │  │  │  ├─ Package.swift
│  │  │  │     │  │  │  └─ Sources
│  │  │  │     │  │  │     └─ connectivity_plus
│  │  │  │     │  │  │        ├─ ConnectivityPlusPlugin.swift
│  │  │  │     │  │  │        ├─ ConnectivityProvider.swift
│  │  │  │     │  │  │        ├─ PathMonitorConnectivityProvider.swift
│  │  │  │     │  │  │        └─ PrivacyInfo.xcprivacy
│  │  │  │     │  │  └─ connectivity_plus.podspec
│  │  │  │     │  ├─ lib
│  │  │  │     │  │  ├─ connectivity_plus.dart
│  │  │  │     │  │  └─ src
│  │  │  │     │  │     ├─ connectivity_plus_linux.dart
│  │  │  │     │  │     ├─ connectivity_plus_web.dart
│  │  │  │     │  │     └─ web
│  │  │  │     │  │        └─ dart_html_connectivity_plugin.dart
│  │  │  │     │  ├─ macos
│  │  │  │     │  │  ├─ connectivity_plus
│  │  │  │     │  │  │  ├─ Package.swift
│  │  │  │     │  │  │  └─ Sources
│  │  │  │     │  │  │     └─ connectivity_plus
│  │  │  │     │  │  │        ├─ ConnectivityPlusPlugin.swift
│  │  │  │     │  │  │        ├─ ConnectivityProvider.swift
│  │  │  │     │  │  │        ├─ PathMonitorConnectivityProvider.swift
│  │  │  │     │  │  │        └─ PrivacyInfo.xcprivacy
│  │  │  │     │  │  └─ connectivity_plus.podspec
│  │  │  │     │  ├─ pubspec.yaml
│  │  │  │     │  ├─ test
│  │  │  │     │  │  ├─ connectivity_plus_linux_test.dart
│  │  │  │     │  │  ├─ connectivity_plus_linux_test.mocks.dart
│  │  │  │     │  │  └─ connectivity_test.dart
│  │  │  │     │  └─ windows
│  │  │  │     │     ├─ CMakeLists.txt
│  │  │  │     │     ├─ connectivity_plus_plugin.cpp
│  │  │  │     │     ├─ include
│  │  │  │     │     │  └─ connectivity_plus
│  │  │  │     │     │     ├─ connectivity_plus_windows_plugin.h
│  │  │  │     │     │     └─ network_manager.h
│  │  │  │     │     └─ network_manager.cpp
│  │  │  │     └─ path_provider_linux
│  │  │  │        ├─ AUTHORS
│  │  │  │        ├─ CHANGELOG.md
│  │  │  │        ├─ LICENSE
│  │  │  │        ├─ README.md
│  │  │  │        ├─ example
│  │  │  │        │  ├─ README.md
│  │  │  │        │  ├─ integration_test
│  │  │  │        │  │  └─ path_provider_test.dart
│  │  │  │        │  ├─ lib
│  │  │  │        │  │  └─ main.dart
│  │  │  │        │  ├─ linux
│  │  │  │        │  │  ├─ CMakeLists.txt
│  │  │  │        │  │  ├─ flutter
│  │  │  │        │  │  │  ├─ CMakeLists.txt
│  │  │  │        │  │  │  └─ generated_plugins.cmake
│  │  │  │        │  │  ├─ main.cc
│  │  │  │        │  │  ├─ my_application.cc
│  │  │  │        │  │  └─ my_application.h
│  │  │  │        │  ├─ pubspec.yaml
│  │  │  │        │  └─ test_driver
│  │  │  │        │     └─ integration_test.dart
│  │  │  │        ├─ lib
│  │  │  │        │  ├─ path_provider_linux.dart
│  │  │  │        │  └─ src
│  │  │  │        │     ├─ get_application_id.dart
│  │  │  │        │     ├─ get_application_id_real.dart
│  │  │  │        │     ├─ get_application_id_stub.dart
│  │  │  │        │     └─ path_provider_linux.dart
│  │  │  │        ├─ pubspec.yaml
│  │  │  │        └─ test
│  │  │  │           ├─ get_application_id_test.dart
│  │  │  │           └─ path_provider_linux_test.dart
│  │  │  ├─ generated_plugin_registrant.cc
│  │  │  ├─ generated_plugin_registrant.h
│  │  │  └─ generated_plugins.cmake
│  │  └─ runner
│  │     ├─ CMakeLists.txt
│  │     ├─ main.cc
│  │     ├─ my_application.cc
│  │     └─ my_application.h
│  ├─ macos
│  │  ├─ .DS_Store
│  │  ├─ Flutter
│  │  │  ├─ Flutter-Debug.xcconfig
│  │  │  ├─ Flutter-Release.xcconfig
│  │  │  ├─ GeneratedPluginRegistrant.swift
│  │  │  └─ ephemeral
│  │  │     ├─ Flutter-Generated.xcconfig
│  │  │     └─ flutter_export_environment.sh
│  │  ├─ Runner
│  │  │  ├─ AppDelegate.swift
│  │  │  ├─ Assets.xcassets
│  │  │  │  └─ AppIcon.appiconset
│  │  │  │     ├─ Contents.json
│  │  │  │     ├─ app_icon_1024.png
│  │  │  │     ├─ app_icon_128.png
│  │  │  │     ├─ app_icon_16.png
│  │  │  │     ├─ app_icon_256.png
│  │  │  │     ├─ app_icon_32.png
│  │  │  │     ├─ app_icon_512.png
│  │  │  │     └─ app_icon_64.png
│  │  │  ├─ Base.lproj
│  │  │  │  └─ MainMenu.xib
│  │  │  ├─ Configs
│  │  │  │  ├─ AppInfo.xcconfig
│  │  │  │  ├─ Debug.xcconfig
│  │  │  │  ├─ Release.xcconfig
│  │  │  │  └─ Warnings.xcconfig
│  │  │  ├─ DebugProfile.entitlements
│  │  │  ├─ Info.plist
│  │  │  ├─ MainFlutterWindow.swift
│  │  │  └─ Release.entitlements
│  │  ├─ Runner.xcodeproj
│  │  │  ├─ project.pbxproj
│  │  │  ├─ project.xcworkspace
│  │  │  │  └─ xcshareddata
│  │  │  │     └─ IDEWorkspaceChecks.plist
│  │  │  └─ xcshareddata
│  │  │     └─ xcschemes
│  │  │        └─ Runner.xcscheme
│  │  ├─ Runner.xcworkspace
│  │  │  ├─ contents.xcworkspacedata
│  │  │  └─ xcshareddata
│  │  │     └─ IDEWorkspaceChecks.plist
│  │  └─ RunnerTests
│  │     └─ RunnerTests.swift
│  ├─ mobile.iml
│  ├─ pubspec.lock
│  ├─ pubspec.yaml
│  ├─ test
│  │  ├─ mock_services.dart
│  │  └─ widget_test.dart
│  ├─ web
│  │  ├─ favicon.png
│  │  ├─ icons
│  │  │  ├─ Icon-192.png
│  │  │  ├─ Icon-512.png
│  │  │  ├─ Icon-maskable-192.png
│  │  │  └─ Icon-maskable-512.png
│  │  ├─ index.html
│  │  └─ manifest.json
│  └─ windows
│     ├─ .DS_Store
│     ├─ CMakeLists.txt
│     ├─ flutter
│     │  ├─ CMakeLists.txt
│     │  ├─ ephemeral
│     │  │  └─ .plugin_symlinks
│     │  │     ├─ connectivity_plus
│     │  │     │  ├─ CHANGELOG.md
│     │  │     │  ├─ LICENSE
│     │  │     │  ├─ README.md
│     │  │     │  ├─ android
│     │  │     │  │  ├─ build.gradle
│     │  │     │  │  ├─ gradle
│     │  │     │  │  │  └─ wrapper
│     │  │     │  │  │     └─ gradle-wrapper.properties
│     │  │     │  │  ├─ gradle.properties
│     │  │     │  │  ├─ settings.gradle
│     │  │     │  │  └─ src
│     │  │     │  │     └─ main
│     │  │     │  │        ├─ AndroidManifest.xml
│     │  │     │  │        └─ java
│     │  │     │  │           └─ dev
│     │  │     │  │              └─ fluttercommunity
│     │  │     │  │                 └─ plus
│     │  │     │  │                    └─ connectivity
│     │  │     │  │                       ├─ Connectivity.java
│     │  │     │  │                       ├─ ConnectivityBroadcastReceiver.java
│     │  │     │  │                       ├─ ConnectivityMethodChannelHandler.java
│     │  │     │  │                       └─ ConnectivityPlugin.java
│     │  │     │  ├─ example
│     │  │     │  │  ├─ README.md
│     │  │     │  │  ├─ analysis_options.yaml
│     │  │     │  │  ├─ android
│     │  │     │  │  │  ├─ app
│     │  │     │  │  │  │  ├─ build.gradle
│     │  │     │  │  │  │  └─ src
│     │  │     │  │  │  │     └─ main
│     │  │     │  │  │  │        ├─ AndroidManifest.xml
│     │  │     │  │  │  │        ├─ java
│     │  │     │  │  │  │        │  └─ io
│     │  │     │  │  │  │        │     └─ flutter
│     │  │     │  │  │  │        │        └─ plugins
│     │  │     │  │  │  │        │           └─ connectivityexample
│     │  │     │  │  │  │        │              └─ FlutterActivityTest.java
│     │  │     │  │  │  │        └─ res
│     │  │     │  │  │  │           ├─ mipmap-hdpi
│     │  │     │  │  │  │           │  └─ ic_launcher.png
│     │  │     │  │  │  │           ├─ mipmap-mdpi
│     │  │     │  │  │  │           │  └─ ic_launcher.png
│     │  │     │  │  │  │           ├─ mipmap-xhdpi
│     │  │     │  │  │  │           │  └─ ic_launcher.png
│     │  │     │  │  │  │           ├─ mipmap-xxhdpi
│     │  │     │  │  │  │           │  └─ ic_launcher.png
│     │  │     │  │  │  │           └─ mipmap-xxxhdpi
│     │  │     │  │  │  │              └─ ic_launcher.png
│     │  │     │  │  │  ├─ build.gradle
│     │  │     │  │  │  ├─ gradle
│     │  │     │  │  │  │  └─ wrapper
│     │  │     │  │  │  │     └─ gradle-wrapper.properties
│     │  │     │  │  │  ├─ gradle.properties
│     │  │     │  │  │  └─ settings.gradle
│     │  │     │  │  ├─ integration_test
│     │  │     │  │  │  └─ connectivity_plus_test.dart
│     │  │     │  │  ├─ ios
│     │  │     │  │  │  ├─ Flutter
│     │  │     │  │  │  │  ├─ AppFrameworkInfo.plist
│     │  │     │  │  │  │  ├─ Debug.xcconfig
│     │  │     │  │  │  │  └─ Release.xcconfig
│     │  │     │  │  │  ├─ Runner
│     │  │     │  │  │  │  ├─ AppDelegate.swift
│     │  │     │  │  │  │  ├─ Assets.xcassets
│     │  │     │  │  │  │  │  ├─ AppIcon.appiconset
│     │  │     │  │  │  │  │  │  ├─ Contents.json
│     │  │     │  │  │  │  │  │  ├─ Icon-App-1024x1024@1x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-20x20@1x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-20x20@2x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-20x20@3x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-29x29@1x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-29x29@2x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-29x29@3x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-40x40@1x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-40x40@2x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-40x40@3x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-60x60@2x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-60x60@3x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-76x76@1x.png
│     │  │     │  │  │  │  │  │  ├─ Icon-App-76x76@2x.png
│     │  │     │  │  │  │  │  │  └─ Icon-App-83.5x83.5@2x.png
│     │  │     │  │  │  │  │  └─ LaunchImage.imageset
│     │  │     │  │  │  │  │     ├─ Contents.json
│     │  │     │  │  │  │  │     ├─ LaunchImage.png
│     │  │     │  │  │  │  │     ├─ LaunchImage@2x.png
│     │  │     │  │  │  │  │     ├─ LaunchImage@3x.png
│     │  │     │  │  │  │  │     └─ README.md
│     │  │     │  │  │  │  ├─ Base.lproj
│     │  │     │  │  │  │  │  ├─ LaunchScreen.storyboard
│     │  │     │  │  │  │  │  └─ Main.storyboard
│     │  │     │  │  │  │  ├─ Info.plist
│     │  │     │  │  │  │  └─ Runner-Bridging-Header.h
│     │  │     │  │  │  ├─ Runner.xcodeproj
│     │  │     │  │  │  │  ├─ project.pbxproj
│     │  │     │  │  │  │  ├─ project.xcworkspace
│     │  │     │  │  │  │  │  ├─ contents.xcworkspacedata
│     │  │     │  │  │  │  │  └─ xcshareddata
│     │  │     │  │  │  │  │     ├─ IDEWorkspaceChecks.plist
│     │  │     │  │  │  │  │     └─ WorkspaceSettings.xcsettings
│     │  │     │  │  │  │  └─ xcshareddata
│     │  │     │  │  │  │     └─ xcschemes
│     │  │     │  │  │  │        └─ Runner.xcscheme
│     │  │     │  │  │  ├─ Runner.xcworkspace
│     │  │     │  │  │  │  ├─ contents.xcworkspacedata
│     │  │     │  │  │  │  └─ xcshareddata
│     │  │     │  │  │  │     ├─ IDEWorkspaceChecks.plist
│     │  │     │  │  │  │     └─ WorkspaceSettings.xcsettings
│     │  │     │  │  │  └─ RunnerTests
│     │  │     │  │  │     └─ RunnerTests.swift
│     │  │     │  │  ├─ lib
│     │  │     │  │  │  └─ main.dart
│     │  │     │  │  ├─ linux
│     │  │     │  │  │  ├─ CMakeLists.txt
│     │  │     │  │  │  ├─ flutter
│     │  │     │  │  │  │  └─ CMakeLists.txt
│     │  │     │  │  │  ├─ main.cc
│     │  │     │  │  │  ├─ my_application.cc
│     │  │     │  │  │  └─ my_application.h
│     │  │     │  │  ├─ macos
│     │  │     │  │  │  ├─ Flutter
│     │  │     │  │  │  │  ├─ Flutter-Debug.xcconfig
│     │  │     │  │  │  │  └─ Flutter-Release.xcconfig
│     │  │     │  │  │  ├─ Runner
│     │  │     │  │  │  │  ├─ AppDelegate.swift
│     │  │     │  │  │  │  ├─ Assets.xcassets
│     │  │     │  │  │  │  │  └─ AppIcon.appiconset
│     │  │     │  │  │  │  │     ├─ Contents.json
│     │  │     │  │  │  │  │     ├─ app_icon_1024.png
│     │  │     │  │  │  │  │     ├─ app_icon_128.png
│     │  │     │  │  │  │  │     ├─ app_icon_16.png
│     │  │     │  │  │  │  │     ├─ app_icon_256.png
│     │  │     │  │  │  │  │     ├─ app_icon_32.png
│     │  │     │  │  │  │  │     ├─ app_icon_512.png
│     │  │     │  │  │  │  │     └─ app_icon_64.png
│     │  │     │  │  │  │  ├─ Base.lproj
│     │  │     │  │  │  │  │  └─ MainMenu.xib
│     │  │     │  │  │  │  ├─ Configs
│     │  │     │  │  │  │  │  ├─ AppInfo.xcconfig
│     │  │     │  │  │  │  │  ├─ Debug.xcconfig
│     │  │     │  │  │  │  │  ├─ Release.xcconfig
│     │  │     │  │  │  │  │  └─ Warnings.xcconfig
│     │  │     │  │  │  │  ├─ DebugProfile.entitlements
│     │  │     │  │  │  │  ├─ Info.plist
│     │  │     │  │  │  │  ├─ MainFlutterWindow.swift
│     │  │     │  │  │  │  └─ Release.entitlements
│     │  │     │  │  │  ├─ Runner.xcodeproj
│     │  │     │  │  │  │  ├─ project.pbxproj
│     │  │     │  │  │  │  ├─ project.xcworkspace
│     │  │     │  │  │  │  │  └─ xcshareddata
│     │  │     │  │  │  │  │     └─ IDEWorkspaceChecks.plist
│     │  │     │  │  │  │  └─ xcshareddata
│     │  │     │  │  │  │     └─ xcschemes
│     │  │     │  │  │  │        └─ Runner.xcscheme
│     │  │     │  │  │  ├─ Runner.xcworkspace
│     │  │     │  │  │  │  ├─ contents.xcworkspacedata
│     │  │     │  │  │  │  └─ xcshareddata
│     │  │     │  │  │  │     └─ IDEWorkspaceChecks.plist
│     │  │     │  │  │  └─ RunnerTests
│     │  │     │  │  │     └─ RunnerTests.swift
│     │  │     │  │  ├─ pubspec.yaml
│     │  │     │  │  ├─ web
│     │  │     │  │  │  ├─ favicon.png
│     │  │     │  │  │  ├─ icons
│     │  │     │  │  │  │  ├─ Icon-192.png
│     │  │     │  │  │  │  ├─ Icon-512.png
│     │  │     │  │  │  │  ├─ Icon-maskable-192.png
│     │  │     │  │  │  │  └─ Icon-maskable-512.png
│     │  │     │  │  │  ├─ index.html
│     │  │     │  │  │  └─ manifest.json
│     │  │     │  │  └─ windows
│     │  │     │  │     ├─ CMakeLists.txt
│     │  │     │  │     ├─ flutter
│     │  │     │  │     │  └─ CMakeLists.txt
│     │  │     │  │     └─ runner
│     │  │     │  │        ├─ CMakeLists.txt
│     │  │     │  │        ├─ Runner.rc
│     │  │     │  │        ├─ flutter_window.cpp
│     │  │     │  │        ├─ flutter_window.h
│     │  │     │  │        ├─ main.cpp
│     │  │     │  │        ├─ resource.h
│     │  │     │  │        ├─ resources
│     │  │     │  │        │  └─ app_icon.ico
│     │  │     │  │        ├─ run_loop.cpp
│     │  │     │  │        ├─ run_loop.h
│     │  │     │  │        ├─ runner.exe.manifest
│     │  │     │  │        ├─ utils.cpp
│     │  │     │  │        ├─ utils.h
│     │  │     │  │        ├─ win32_window.cpp
│     │  │     │  │        └─ win32_window.h
│     │  │     │  ├─ ios
│     │  │     │  │  ├─ connectivity_plus
│     │  │     │  │  │  ├─ Package.swift
│     │  │     │  │  │  └─ Sources
│     │  │     │  │  │     └─ connectivity_plus
│     │  │     │  │  │        ├─ ConnectivityPlusPlugin.swift
│     │  │     │  │  │        ├─ ConnectivityProvider.swift
│     │  │     │  │  │        ├─ PathMonitorConnectivityProvider.swift
│     │  │     │  │  │        └─ PrivacyInfo.xcprivacy
│     │  │     │  │  └─ connectivity_plus.podspec
│     │  │     │  ├─ lib
│     │  │     │  │  ├─ connectivity_plus.dart
│     │  │     │  │  └─ src
│     │  │     │  │     ├─ connectivity_plus_linux.dart
│     │  │     │  │     ├─ connectivity_plus_web.dart
│     │  │     │  │     └─ web
│     │  │     │  │        └─ dart_html_connectivity_plugin.dart
│     │  │     │  ├─ macos
│     │  │     │  │  ├─ connectivity_plus
│     │  │     │  │  │  ├─ Package.swift
│     │  │     │  │  │  └─ Sources
│     │  │     │  │  │     └─ connectivity_plus
│     │  │     │  │  │        ├─ ConnectivityPlusPlugin.swift
│     │  │     │  │  │        ├─ ConnectivityProvider.swift
│     │  │     │  │  │        ├─ PathMonitorConnectivityProvider.swift
│     │  │     │  │  │        └─ PrivacyInfo.xcprivacy
│     │  │     │  │  └─ connectivity_plus.podspec
│     │  │     │  ├─ pubspec.yaml
│     │  │     │  ├─ test
│     │  │     │  │  ├─ connectivity_plus_linux_test.dart
│     │  │     │  │  ├─ connectivity_plus_linux_test.mocks.dart
│     │  │     │  │  └─ connectivity_test.dart
│     │  │     │  └─ windows
│     │  │     │     ├─ CMakeLists.txt
│     │  │     │     ├─ connectivity_plus_plugin.cpp
│     │  │     │     ├─ include
│     │  │     │     │  └─ connectivity_plus
│     │  │     │     │     ├─ connectivity_plus_windows_plugin.h
│     │  │     │     │     └─ network_manager.h
│     │  │     │     └─ network_manager.cpp
│     │  │     └─ path_provider_windows
│     │  │        ├─ AUTHORS
│     │  │        ├─ CHANGELOG.md
│     │  │        ├─ LICENSE
│     │  │        ├─ README.md
│     │  │        ├─ example
│     │  │        │  ├─ README.md
│     │  │        │  ├─ integration_test
│     │  │        │  │  └─ path_provider_test.dart
│     │  │        │  ├─ lib
│     │  │        │  │  └─ main.dart
│     │  │        │  ├─ pubspec.yaml
│     │  │        │  ├─ test_driver
│     │  │        │  │  └─ integration_test.dart
│     │  │        │  └─ windows
│     │  │        │     ├─ CMakeLists.txt
│     │  │        │     ├─ flutter
│     │  │        │     │  ├─ CMakeLists.txt
│     │  │        │     │  └─ generated_plugins.cmake
│     │  │        │     └─ runner
│     │  │        │        ├─ CMakeLists.txt
│     │  │        │        ├─ Runner.rc
│     │  │        │        ├─ flutter_window.cpp
│     │  │        │        ├─ flutter_window.h
│     │  │        │        ├─ main.cpp
│     │  │        │        ├─ resource.h
│     │  │        │        ├─ resources
│     │  │        │        │  └─ app_icon.ico
│     │  │        │        ├─ run_loop.cpp
│     │  │        │        ├─ run_loop.h
│     │  │        │        ├─ runner.exe.manifest
│     │  │        │        ├─ utils.cpp
│     │  │        │        ├─ utils.h
│     │  │        │        ├─ win32_window.cpp
│     │  │        │        └─ win32_window.h
│     │  │        ├─ lib
│     │  │        │  ├─ path_provider_windows.dart
│     │  │        │  └─ src
│     │  │        │     ├─ folders.dart
│     │  │        │     ├─ folders_stub.dart
│     │  │        │     ├─ guid.dart
│     │  │        │     ├─ path_provider_windows_real.dart
│     │  │        │     ├─ path_provider_windows_stub.dart
│     │  │        │     └─ win32_wrappers.dart
│     │  │        ├─ pubspec.yaml
│     │  │        └─ test
│     │  │           ├─ guid_test.dart
│     │  │           └─ path_provider_windows_test.dart
│     │  ├─ generated_plugin_registrant.cc
│     │  ├─ generated_plugin_registrant.h
│     │  └─ generated_plugins.cmake
│     └─ runner
│        ├─ CMakeLists.txt
│        ├─ Runner.rc
│        ├─ flutter_window.cpp
│        ├─ flutter_window.h
│        ├─ main.cpp
│        ├─ resource.h
│        ├─ resources
│        │  └─ app_icon.ico
│        ├─ runner.exe.manifest
│        ├─ utils.cpp
│        ├─ utils.h
│        ├─ win32_window.cpp
│        └─ win32_window.h
├─ scripts
│  ├─ deploy
│  │  ├─ deploy-prod.sh
│  │  └─ rollback.sh
│  ├─ health-checks
│  │  ├─ api-health.sh
│  │  └─ db-connectivity.sh
│  ├─ secrets
│  │  └─ inject-secrets.sh
│  └─ setup
│     └─ init-monorepo.sh
├─ shared
│  ├─ dist
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  ├─ types
│  │  │  ├─ comment.types.d.ts
│  │  │  ├─ comment.types.js
│  │  │  ├─ post.types.d.ts
│  │  │  ├─ post.types.js
│  │  │  ├─ user.types.d.ts
│  │  │  └─ user.types.js
│  │  └─ validation
│  │     ├─ auth.schemas.d.ts
│  │     ├─ auth.schemas.js
│  │     ├─ index.d.ts
│  │     ├─ index.js
│  │     ├─ post.schemas.d.ts
│  │     └─ post.schemas.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ index.ts
│  │  ├─ types
│  │  │  ├─ comment.types.ts
│  │  │  └─ user.types.ts
│  │  └─ validation
│  │     ├─ auth.schemas.ts
│  │     └─ post.schemas.ts
│  └─ tsconfig.json
└─ web
   ├─ Dockerfile.dev
   ├─ Dockerfile.prod
   ├─ codegen.ts
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ social-preview.png
   ├─ src
   │  ├─ App.tsx
   │  ├─ api
   │  │  ├─ axios.ts
   │  │  └─ graphql
   │  │     └─ operations.ts
   │  ├─ assets
   │  ├─ components
   │  │  ├─ feed
   │  │  │  ├─ CreatePost.tsx
   │  │  │  ├─ Feed.tsx
   │  │  │  └─ PostCard.tsx
   │  │  ├─ layout
   │  │  │  ├─ AuthLayout.tsx
   │  │  │  └─ MainLayout.tsx
   │  │  ├─ profile
   │  │  │  └─ ProfileHeader.tsx
   │  │  └─ ui
   │  │     ├─ Avatar.tsx
   │  │     └─ Button.tsx
   │  ├─ contexts
   │  │  └─ AuthContext.tsx
   │  ├─ gql
   │  │  └─ generated.ts
   │  ├─ hooks
   │  │  ├─ useAuth.ts
   │  │  └─ useInfiniteScroll.ts
   │  ├─ index.css
   │  ├─ main.tsx
   │  ├─ pages
   │  │  ├─ HomePage.tsx
   │  │  ├─ LoginPage.tsx
   │  │  ├─ NotFoundPage.tsx
   │  │  └─ ProfilePage.tsx
   │  ├─ stores
   │  │  └─ usePostStore.ts
   │  ├─ types
   │  └─ utils
   │     └─ validation.ts
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   └─ vite.config.ts

```