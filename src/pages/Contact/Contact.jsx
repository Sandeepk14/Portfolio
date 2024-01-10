import "./Contact.css";

import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://bengalpeerless.com/wp-content/uploads/2019/06/c3.jpg"
                    alt="contact us"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With a
                      <a
                        href="linkedin.com/in/sandeep-kumar-100211235"
                        target="_blank"
                      >
                        <BsLinkedin
                          color="blue"
                          title="Linkedin"
                          size={30}
                          className="ms-2"
                        />
                      </a>
                      <BsYoutube
                        color="red"
                        title="Youtube"
                        size={30}
                        className="ms-2"
                      />
                      <AiFillInstagram
                        color="blue"
                        title="Instagram"
                        size={30}
                        className="ms-2"
                      />
                      <BsGithub
                        color="blue"
                        title="Github"
                        size={30}
                        className="ms-2"
                      />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form action="https://api.web3forms.com/submit" method="POST">
                    <input
                      type="hidden"
                      name="access_key"
                      value="89f7c1f9-c8a9-41cb-92bf-4791eef806e6"
                    />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Enter your Message"
                      required
                    ></textarea>
                    <div className="h-captcha" data-captcha="true"></div>
                    <div className="button-container row px-3 btn">
                      <button className="button1">SEND MESSAGE</button>
                      <button className="button2" type="reset">
                        RESET
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
