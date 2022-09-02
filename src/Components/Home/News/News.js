import "./News.css";
import news1 from "../../../images/news/b-4.jpg";
import news2 from "../../../images/news/b-5.jpg";
import news3 from "../../../images/news/b-6.jpg";
import team1 from "../../../images/news/team-2.jpg";
import team2 from "../../../images/news/team-3.jpg";
import team3 from "../../../images/news/team-5.jpg";

const News = () => {
  return (
    <section className="space min pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="sec_title position-relative text-center mb-4">
              <h6 className="text-muted mb-0">Latest News</h6>
              <h2 className="ft-bold">
                Pickup New <span className="span-text">Updates</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
              <div className="blg_grid_thumb">
                <a href="#">
                  <img src={news1} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blg_grid_caption">
                <div className="blg_tag">
                  <span>Marketing</span>
                </div>
                <div className="blg_title">
                  <h4>
                    <a href="#">
                      How To Register &amp; Enrolled on SkillUp Step by Step?
                    </a>
                  </h4>
                </div>
                <div className="blg_desc">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </div>
              <div className="crs_grid_foot">
                <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                  <div className="crs_fl_first">
                    <div className="crs_tutor">
                      <div className="crs_tutor_thumb">
                        <a href="#">
                          <img
                            src={team1}
                            className="img-fluid circle"
                            alt=""
                            width="35"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="foot_list_info">
                      <ul>
                        <li>
                          <div className="elsio_ic">
                            <i className="bi bi-eye text-success"></i>
                          </div>
                          <div className="elsio_tx">5k Views</div>
                        </li>
                        <li>
                          <div className="elsio_ic">
                            <i className="bi bi-clock text-warning"></i>
                          </div>
                          <div className="elsio_tx">15 July 2021</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single Item --> */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
              <div className="blg_grid_thumb">
                <a href="#">
                  <img src={news2} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blg_grid_caption">
                <div className="blg_tag">
                  <span>Business</span>
                </div>
                <div className="blg_title">
                  <h4>
                    <a href="#">Let's Know How Skillup Work Fast and Secure?</a>
                  </h4>
                </div>
                <div className="blg_desc">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </div>
              <div className="crs_grid_foot">
                <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                  <div className="crs_fl_first">
                    <div className="crs_tutor">
                      <div className="crs_tutor_thumb">
                        <a href="#">
                          <img
                            src={team2}
                            className="img-fluid circle"
                            alt=""
                            width="35"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="foot_list_info">
                      <ul>
                        <li>
                          <div className="elsio_ic">
                            <i className="bi bi-eye text-success"></i>
                          </div>
                          <div className="elsio_tx">10k Views</div>
                        </li>
                        <li>
                          <div className="elsio_ic">
                            <i className="bi bi-clock text-warning"></i>
                          </div>
                          <div className="elsio_tx">10 July 2021</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single Item --> */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="blg_grid_box">
              <div className="blg_grid_thumb">
                <a href="#">
                  <img src={news3} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="blg_grid_caption">
                <div className="blg_tag">
                  <span>Accounting</span>
                </div>
                <div className="blg_title">
                  <h4>
                    <a href="#">
                      How To Improove Digital Marketing for Fast SEO
                    </a>
                  </h4>
                </div>
                <div className="blg_desc">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum
                  </p>
                </div>
              </div>
              <div className="crs_grid_foot">
                <div className="crs_flex d-flex align-items-center justify-content-between br-top px-3 py-2">
                  <div className="crs_fl_first">
                    <div className="crs_tutor">
                      <div className="crs_tutor_thumb">
                        <a href="#">
                          <img
                            src={team3}
                            className="img-fluid circle"
                            alt=""
                            width="35"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crs_fl_last">
                    <div className="foot_list_info">
                      <ul>
                        <li>
                          <div className="elsio_ic">
                            <i className="bi bi-eye text-success"></i>
                          </div>
                          <div className="elsio_tx">9k Views</div>
                        </li>
                        <li>
                          <div className="elsio_ic">
                            <i className="bi bi-clock text-warning"></i>
                          </div>
                          <div className="elsio_tx">9 July 2021</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
