import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12">
      <Link to="/" className="text-2xl font-bold text-white">
        MyLogo
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="rounded-lg px-4 py-2 font-medium text-white hover:bg-white/10"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="rounded-lg bg-white px-5 py-2 font-semibold text-black hover:bg-gray-200"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

