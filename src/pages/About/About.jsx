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
              “Hi, I am Sandeep Kumar. I am from Ghazipur. I pursing BTech in
              Information Technology from Rajkiya Engineering College Azmagarh .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
