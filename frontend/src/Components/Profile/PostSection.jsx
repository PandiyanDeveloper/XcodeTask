import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Row, Col } from "react-bootstrap";
import PostPic from "../../Assets/Asset.js/profileimage.jpeg";
import table from "../../Assets/Asset.js/table.png";
import save_img from "../../Assets/Asset.js/save.png";
import tagged from "../../Assets/Asset.js/tagged.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { fetchPostDet } from "../../Services/postService";

function PostSection({ user }) {
  const [aPostDetails, setaPostDetails] = useState([]);
  const aSamplePosts = [
    {
      imageUrl: PostPic,
      desc: "",
      likes: 20,
      cmntCnt: 2
    },
    {
      imageUrl: PostPic,
      desc: "",
      likes: 20,
      cmntCnt: 2
    },
    {
      imageUrl: PostPic,
      desc: "",
      likes: 20,
      cmntCnt: 2
    },
    {
      imageUrl: PostPic,
      desc: "",
      likes: 20,
      cmntCnt: 2
    }
  ];

  // Function for fetch post details
  const fetchPosts = async () => {
    try {
      const oReq = {
        userId: user?._id ?? "01"
      };
      const aPostRes = await fetchPostDet(oReq);
      setaPostDetails(aPostRes);
    } catch (error) {
      setaPostDetails(aSamplePosts);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="mt-4">
      <Tabs
        defaultActiveKey="Post"
        id="fill-tab-example"
        className="mb-3 text-secondary justify-content-center gap-5"
        variant="tabs"
      >
        <Tab
          eventKey="Post"
          title={
            <div className="tab-title ">
              <img src={table} className="me-1" /> POSTS
            </div>
          }
          className="text-secondary"
        >
          <Row className="mt-5">
            {aPostDetails.map((post, index) => (
              <Col
                key={index}
                sm={4}
                md={4}
                lg={4}
                className="p-0 pe-1 post-image"
              >
                <img src={post.imageUrl} alt={`Post ${index + 1}`} />
                <div className="post-icons">
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                  <FontAwesomeIcon icon={faComment} className="comment-icon" />
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab
          eventKey="longer-tab"
          title={
            <div className="tab-title">
              <img src={save_img} className="me-1" /> SAVED
            </div>
          }
          className="text-secondary"
        ></Tab>
        <Tab
          eventKey="contact"
          title={
            <div className="tab-title">
              <img src={tagged} className="me-1 mb-1" /> TAGGED
            </div>
          }
          className="text-secondary"
        ></Tab>
      </Tabs>
    </div>
  );
}

export default PostSection;
