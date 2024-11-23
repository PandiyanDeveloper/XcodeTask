// src/components/Profile/ProfileStats.js
import React from "react";
import { Row, Col, Stack } from "react-bootstrap";

const ProfileStats = ({ posts, followers, following }) => {
  return (
    <Stack className="profile-stats mt-3" direction="horizontal" gap={5}>
      <div>
        <strong className="pe-1">{posts}</strong>
        <span>Posts</span>
      </div>
      <div>
        <strong className="pe-1">{followers}</strong>
        <span>Followers</span>
      </div>
      <div>
        <strong className="pe-1">{following}</strong>
        <span>Following</span>
      </div>
    </Stack>
  );
};

export default ProfileStats;
