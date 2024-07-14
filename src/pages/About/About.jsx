import "./About.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="s.img.jpg" alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              “Hi, I am Sandeep Kumar. I am from Ghazipur. I have completed
              BTech in Information Technology from Rajkiya Engineering College
              Azmagarh .I'm MERN STACK DEVELOPER At DSITTC.PVT.LTD, our team
              boosted user retention by 15% and revenue by 25% through
              innovative full-stack development. This success was rooted in a
              strong foundation of React.js, Node.js, Express.js, MongoDB, and
              Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
