import './Aboutme.css';
import about__banner from '../../images/banner/bn-4.png'

const AboutMe = () => {
  return (
    <section className="space pt-0 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="position-relative">
              <img src={about__banner} className="img-fluid" alt="about-banner" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="m-spaced">
              <div className="position-relative">
                <div className="mb-1">
                  <h6 className="theme-bg-light theme-cl px-2 py-1 rounded text-muted">
                    About Us
                  </h6>
                </div>
                <h2 className="ft-bold mb-3">
                  Get All The Jobs Details<br></br><span className="span-text">You're Looking For</span>
                </h2>
                <p className="mb-3 text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="position-relative row">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                      <i className="bi bi-check-circle icon-color"></i>
                      </div>
                      <h6 className="mb-0 ml-3 client__name">Full lifetime access</h6>
                    </div>
                  </div>
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                      <i className="bi bi-check-circle icon-color"></i>
                      </div>
                      <h6 className="mb-0 ml-3 client__name">20+ downloadable resources</h6>
                    </div>
                  </div>
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                      <i className="bi bi-check-circle icon-color"></i>
                      </div>
                      <h6 className="mb-0 ml-3 client__name">Certificate of completion</h6>
                    </div>
                  </div>
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                      <i className="bi bi-check-circle icon-color"></i>
                      </div>
                      <h6 className="mb-0 ml-3 client__name">Free Trial 7 Days</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12 mt-4">
                  <a
                    href="#"
                    className="btn btn-md theme-bg rounded text-white hover-theme"
                  >
                    Get Started <i className="bi bi-arrow-right-circle ml-2 mr-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
