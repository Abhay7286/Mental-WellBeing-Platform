import { Link } from 'react-router-dom';
import homeimg from "../../homeimg.png";
import GetUser from '../../hooks/GetUser.js'; 

const UserProfile = () => {
  const { loading, profile } = GetUser(); 

  if (loading) {
    return <div>Loading...</div>; 
  }
  console.log(profile)

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={profile.ProfilePic} className="card-img-top" alt="User Profile"/>
      <div className="card-body">
        <h5 className="card-title">{profile.username}</h5>
        <p className="card-text">
          {profile.email || "user@example.com"}
        </p>
        <Link to="/" className="btn btn-primary">
          Create a Post
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
