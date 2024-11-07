import Post from "./Post";
import UserProfile from "./UserProfile";

const ProfilePage = () => {
  return (
    <>
      <h1>My Profile</h1>
      <div className="profile-page"
        style={{
          display: "flex",
          justifyContent: "center,",
          alignItems: "center",
        }}
      >
        <div className="post">
          <Post />
        </div>
        <UserProfile />
      </div>
    </>
  );
};

export default ProfilePage;
