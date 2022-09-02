import "./Banner.css";

const Banner = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="header-text">
              We understand your need better. <br></br>
              <span className="span-text mt-3"> Get The Right career path</span>
            </h1>
            <p className=" header-t mt-3">Discover with us.</p>
            <button className="btn header-btn">Join us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
