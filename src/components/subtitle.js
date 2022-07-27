import React from "react";

const Subtitles = () => (
  <div className="subtitles">
    <Title masteryi="Lorem Ipsum" vayne="title1" />
    <Title masteryi="Dolor Sit Amet" vayne="title2" />
    <Title masteryi="Consectetur adipiscing elit" vayne="title2" />
  </div>
);
const Title = ({ vayne, masteryi }) => {
  return <div className={vayne}>{masteryi}</div>;
};

export default Subtitles;
