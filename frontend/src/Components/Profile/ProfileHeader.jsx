import React from "react";
import { Button, Stack, Row, Col } from "react-bootstrap";
import ProfileBio from "../Profile/ProfileBIo";
import ProfileStats from "./ProfileStats";

const ProfileHeader = ({ user }) => {
  return (
    <Row className="profile-header">
      <Col lg={4} className="profile-header-left">
        <img className="profile-pic" src={user?.profImg} alt="Profile" />
      </Col>
      <Col lg={6} className="profile-header-right">
        <Stack direction="horizontal" gap={3}>
          <div className="username">{user.uName}</div>
          <div className="d-flex gap-3">
            <Button size="sm" className=" profile_header_btn">
              Edit profile
            </Button>
            <Button size="sm" className="profile_header_btn">
              View archive
            </Button>
          </div>
        </Stack>
        <ProfileStats
          posts={user.postCnt}
          followers={user.followers}
          following={user.following}
        />
        <div className="name mt-2">{user.name}</div>
        <div className="my-2">
          <ProfileBio bio={user.bio} />
        </div>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
