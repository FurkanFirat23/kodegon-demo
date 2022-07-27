import React from "react";
import "./project.css";

const Projects = () => (
  <div className="grid">
    <Project
      title="Lorem Ipsum"
      name="Hüsnü Taner"
      date="10.09.2020 -10.10.2020"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      suscipit magna dui, eget ultrices dui euismod in."
      img="img/Mask Group (1).png"
    />
    <Project
      title="Nulla semper metus"
      name="Mustafa Serkan Tiryaki"
      date="10.09.2020 -10.10.2020"
      paragraph="Nulla semper metus aliquam, condimentum odio vitae, sodales mauris.
      Donec congue leo eu libero ultricies tempor. Duis commodo lacus eget
      felis volutpat molestie. Sed at pharetra mauris. Ut eu lorem placerat,
      tempus velit in, feugiat libero."
      img="img/Mask Group (2).png"
    />
    <Project
      title="Suspendisse tempus dignissim lacus ac tincidunt"
      name="Kerim Değirmenci"
      date="10.09.2020 -10.10.2020"
      paragraph="Nam semper sapien et erat molestie, a porttitor sem volutpat.
      Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum
      pharetra orci, nec laoreet felis facilisis nec. Mauris ornare fermentum
      urna. Nunc non elit metus. Praesent sodales in nisi eget volutpat."
      img="img/Mask Group (3).png"
    />
    <Project
      title="Integer dignissim"
      name="Ebu Bekir Behram"
      date="10.09.2020 -10.10.2020"
      paragraph="Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam viverra
    egestas lorem, sed aliquet risus efficitur eu. Nunc tristique nisi ac
    massa finibus, sit amet blandit lectus suscipit. Mauris quis faucibus
    lorem. Integer dignissim condimentum orci, vitae pellentesque felis
    eleifend ac."
      img="img/Mask Group (4).png"
    />
    <Project
      title="Suspendisse tempus dignissim lacus ac tincidunt"
      name="Kerim Değirmenci"
      date="10.09.2020 -10.10.2020"
      paragraph="Nam semper sapien et erat molestie, a porttitor sem volutpat.
    Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum
    pharetra orci, nec laoreet felis facilisis nec. Mauris ornare fermentum
    urna. Nunc non elit metus. Praesent sodales in nisi eget volutpat."
      img="img/Mask Group (5).png"
    />
    <Project
      title=" Integer dignissim"
      name="Ebu Bekir Behram"
      date="10.09.2020 -10.10.2020"
      paragraph="Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam viverra
      egestas lorem, sed aliquet risus efficitur eu. Nunc tristique nisi ac
      massa finibus, sit amet blandit lectus suscipit. Mauris quis faucibus
      lorem. Integer dignissim condimentum orci, vitae pellentesque felis
      eleifend ac."
      img="img/Mask Group (6).png"
    />
  </div>
);

const Project = ({ title, img, name, paragraph, date }) => (
  <div className="project">
    <div>
      <img className="img" src={img} alt="1" />
    </div>
    <div className="projectcarddikey">
      <div className="projectTitle">{title}</div>
      <div className="name">{name}</div>
      <div className="projectParagraph">{paragraph}</div>
      <div className="footercss">
        <div className="calenderIcon">
          <img src="img/calenderIcon.svg" alt="1" />
        </div>

        <div className="history">{date}</div>

        <div className="csscardarrow">
          <img src="img/cardArrow.svg" alt="11" />
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
