import profile from "../assets/profile.jpg"
import email from "../assets/envelope-solid.svg"

const Info = () => (
  <header>
    <img src={profile} alt="Profile image" />
      <section className="card-text">
      <h1>Jessie Jalca</h1>
      <p className="title">Frontend Developer</p>
      <p><a className="website" href="https://github.com/jessiejalca" target="_blank">github.com/jessiejalca</a></p>
      <button className="email"><img src={email} />Email</button>
    </section>
  </header>
);

export default Info;
