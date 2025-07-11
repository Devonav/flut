import { CreatePost } from './components/feed/CreatePost';
import { Feed } from './components/feed/Feed';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h1>Social App</h1>
      <CreatePost />
      <Feed />
    </div>
  );
}

export default App;