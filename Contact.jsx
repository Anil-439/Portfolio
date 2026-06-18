function Contact() {

  return (

    <section className="contact">

      <h1>

        Contact Me

      </h1>

      <form>

        <input

          type="text"

          placeholder="Enter Name"

        />

        <input

          type="email"

          placeholder="Enter Email"

        />

        <textarea

          placeholder="Enter Message"

        />

        <button>

          Send

        </button>

      </form>

    </section>

  );

}

export default Contact;