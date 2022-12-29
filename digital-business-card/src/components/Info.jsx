import profile from "../assets/profile.jpg"

const Info = () => (
  <header>
    <img src={profile} alt="Profile image" />
      <section className="card-text">
      <h1>Jessie Jalca</h1>
      <p className="title">Frontend Developer</p>
      <p><a href="https://github.com/jessiejalca" target="_blank">github.com/jessiejalca</a></p>
      <button className="email">Email</button>
    </section>
  </header>
);

export default Info;
