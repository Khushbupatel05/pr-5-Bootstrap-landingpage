const Video = () => {
  return (
    <section className="section-video">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-lg-0 ">
            <h3 className="display-3">
              Watch the video
            </h3>
            <h3>
              to see how our readers love it.
            </h3>
            <p>
              Still have any doubts? Check the free chapter to get an idea.
            </p>
            <div className="smooth button button__primary">
              <span>Free chapters</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ctav4__video-btn">
              <a
                href="https://youtu.be/dkxiTpwm0hs"
                className="glightbox3 video-btn"
              >
                <i className="icofont-play"></i>
              </a>
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
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
