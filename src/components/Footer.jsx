import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-black py-4">
      <div className="max-w-2xl mx-auto text-white text-center">
        <Link to="/about" className="text-white">
          About
        </Link>
      </div>
    </div>
  );
}

export default Footer;
