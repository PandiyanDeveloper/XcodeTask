import React, { useEffect, useState } from "react";
// Import your images here
import highlightimg1 from "../../Assets/Asset.js/profileimage.jpeg";
import highlightimg2 from "../../Assets/Asset.js/profileimage.jpeg";
import add_reel from "../../Assets/Asset.js/add_reel.png";
import { Stack } from "react-bootstrap";
import { fetchHighlightsDet } from "../../Services/highlightsService";

const Highlights = ({ user }) => {
  const aSampleHighlights = [
    { img: highlightimg1, desc: "Highlight 1" },
    { img: highlightimg2, desc: "Highlight 2" }
  ];
  const [aHighlights, setaHighlights] = useState(aSampleHighlights);

  const fetchHighlights = async () => {
    try {
      const oReq = {
        userId: user?._id
      };
      const oHighLightsRes = await fetchHighlightsDet(oReq);
      setaHighlights(oHighLightsRes?.data ?? aSampleHighlights);
    } catch {
      setaHighlights(aSampleHighlights);
    }
  };

  useEffect(() => {
    fetchHighlights();
  }, []);

  return (
    <Stack direction="horizontal" gap={5} className="highlights-cont pb-4">
      {aHighlights?.map((highlight, index) => (
        <div key={index} className="highlihhts-cont">
          <img src={highlight.img} alt={highlight.title} />
          <div className="text-center">
            <p className="fs-7 mb-4 mt-2">{highlight.title}</p>
          </div>
        </div>
      ))}
      <div className="highlihhts-cont">
        <img
          src={add_reel}
          alt="Plus icon"
          className="highlihhts_cont_add_img"
        />
        <div className="text-center">
          <p className="fs-7 mb-4 mt-2">New</p>
        </div>
      </div>
    </Stack>
  );
};

export default Highlights;
