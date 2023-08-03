import React from "react";
import "./Intro.css";
import GdscImg from "../Images/Gdsc.png";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="gdsc_intro">
          <p className="intro_title">
            <b>Google Developer Student Club</b>
          </p>
          <p className="desc">
          Welcome to the world of Google Developer Technologies if you enjoy coding and developing! Through our free hands-on workshops, study-jams, and project building activities, GDSC provides you with a platform to improve your technical abilities. We collaborate as a team to create exciting solutions to real-world problems. Not only that, but top performers are eligible to win schwag and goodies! Join us as we embark on this path of learning and growth as a community!
          </p>
        </div>
        <div className="gdsc_img">
          <img src={GdscImg} />
        </div>
      </div>
    </>
  );
};

export default Intro;
