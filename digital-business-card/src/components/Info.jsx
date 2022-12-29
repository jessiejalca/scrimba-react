import profile from "../assets/profile.jpg"

const Info = () => (
  <header>
    <img src={profile} alt="Profile image" />
    <h1>Jessie Jalca</h1>
    <p>Frontend Developer</p>
    <a href="https://github.com/jessiejalca" target="_blank">github.com/jessiejalca</a>
    <button>Email</button>
  </header>
);

export default Info;
