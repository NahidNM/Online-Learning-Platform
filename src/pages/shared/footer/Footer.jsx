import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-slate-300">
      <aside>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">E-Learning</h1>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <BsFacebook className="text-3xl" />
          <BsGithub className="text-3xl" />
          <BsLinkedin className="text-3xl" />
        </div>
      </nav>
      <nav>
        <header className="footer-title">Quick link</header>
        <div className="text-sm font-semibold ">
          <Link to="/">
            {" "}
            <h1>Home</h1>
          </Link>
          <Link to="/courses">
            <h1>Courses</h1>
          </Link>
          <Link to="/instructor">
            <h1>Instructor</h1>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
