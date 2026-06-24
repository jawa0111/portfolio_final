import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern Software Engineer</h4>
                <h5>Amerck • Apr 2025 – Nov 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Experienced in web development with strong skills in QA testing
              and staging deployments. I also bring solid business analysis
              expertise and confident client-handling abilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Designer</h4>
                <h5>Self-Employed • 2025 – Present</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Worked with diverse clients to create unique brand identities and
              websites. Managed projects from concept to deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc (Hons) in Information Technology</h4>
                <h5>SLIIT – Sri Lankan Institute of Information Technology • 2022 – Present</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>Specialized in Information Technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
