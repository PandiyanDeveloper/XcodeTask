import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import ProfileHeader from "../../Components/Profile/ProfileHeader";
import Highlights from "../../Components/Profile/Highlights";
import PostSection from "../../Components/Profile/PostSection";
import { fetchUserDetails } from "../../Services/userService";
import PostUploadModal from "../../Components/PostUploadModel/PostUploadModel";

const Profile = ({ isCreate }) => {
  const navigate = useNavigate();
  const [oUserData, setUserData] = useState({});
  const oSampleUser = {
    profImg: "AssetsImagesprofileimage.jpeg",
    uName: "ajay.king0194",
    name: "Ajay",
    postCnt: 2,
    followers: 0,
    following: 3,
    bio: "This is my bio! I love photography and traveling."
  };

  // Function for fetch user details
  const fetchUserData = async () => {
    try {
      const userId = "";
      const response = await fetchUserDetails({ userId });
      setUserData(response.data ?? oSampleUser);
    } catch (err) {
      setUserData(oSampleUser);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="profile">
      {}
      <PostUploadModal
        show={isCreate}
        onClose={() => {
          navigate("/profile");
        }}
        user={oUserData}
      />
      <ProfileHeader user={oUserData} />
      <div className="py-4 mt-5">
        <Highlights user={oUserData} />
      </div>
      <PostSection user={oUserData} />
    </div>
  );
};

export default Profile;
