import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          "I turn ideas into fast, intuitive web experiences — where clean code
          meets real impact."
        </p>
        <div className="about-bio">
          <p>
            I'm a full-stack developer who loves building responsive,
            user-friendly web apps from front to back. With React, Node.js, and
            a growing curiosity for AI-driven systems, I care about clean code
            and interfaces that feel effortless to use.
          </p>
          <p>
            From debugging tricky problems to shaping a product from a blank
            screen, I'm driven by the details that make software genuinely
            better. Always learning, always shipping — and always up for the
            next challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
