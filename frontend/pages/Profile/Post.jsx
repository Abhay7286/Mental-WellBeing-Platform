import homeimg from '../../homeimg.png';
import GetPost from '../../hooks/GetPost.js';
import { Link } from 'react-router-dom';

const Post = () => {
  const { posts, loading } = GetPost();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="card" style={{ maxWidth: "50rem", margin: "1rem", display: "flex", flexDirection: "row" }}>
          <img 
            src={post.image || homeimg} 
            className="card-img-top" 
            alt="Post Image" 
            style={{ width: "5em" }} 
          />
          <div className="card-body">
            <h5 className="card-title">{post.email}</h5> 
            <p className="card-text">{post.message}</p>
            <Link href="/" className="btn btn-primary">read more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
