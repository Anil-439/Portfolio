import image from "./Asset/image.png";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-image">

        <img
          src={image}
          alt="Profile Image"
        />

      </div>

      <div className="hero-content">

        <h1>Hi, I'm Anil</h1>

        <h2>React Developer</h2>

        <p>
          I build responsive and modern web applications.
        </p>

        <button>
          Download Resume
        </button>

      </div>

    </section>

  );

}

export default Hero;