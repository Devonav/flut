// 1. Correct the import path and remove the unused `gql` tag
import { useGetPostsQuery } from '../../gql/generated';

export function Feed() {
  // 2. The generated `useGetPostsQuery` hook already knows which query to run
  const { loading, error, data } = useGetPostsQuery({
    pollInterval: 10000,
  });

  if (loading) return <p>Loading feed...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.posts.length) {
    return <p>No posts yet. Be the first!</p>;
  }

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      {/* 3. The `post` object is now fully typed thanks to the hook! */}
      {data.posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <p>{post.content}</p>
          <small>Posted on: {new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}