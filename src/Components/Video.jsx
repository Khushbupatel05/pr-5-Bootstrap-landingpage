import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Button from "./Button";

const Video = () => {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    <section className="section-video ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-lg-0 mt-5 pb-3">
            <h3 className="display-3 text-white">Watch the videicofont-playo</h3>
            <h3 className="text-white">to see how our readers love it.</h3>
            <p className="text-white">Still have any doubts? Check the free chapter to get an idea.</p>
           <Button btnName="Free Chapter " />
          </div>
          <div className="col-md-6">
            <div className="ctav4__ video-btn ">
              <a
                href="https://youtu.be/dkxiTpwm0hs"
                className="glightbox3 video-btn">
               <i className="bi bi-play-circle-fill text-white d-flex  justify-content-center  fs-1"></i>
              </a>
              <div className="promo-video">
                <div className="waves-block ">
                  {/* <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>                 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
