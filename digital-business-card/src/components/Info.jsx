import profileImg from "../assets/react.svg"

const Info = () => (
  <header>
    <img src={profileImg} alt="Profile image" />
    <h1>Jessie Jalca</h1>
    <p>Frontend Developer</p>
    <a href="https://github.com/jessiejalca" target="_blank">github.com/jessiejalca</a>
    <button>Email</button>
  </header>
);

export default Info;
