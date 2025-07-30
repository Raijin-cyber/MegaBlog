import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

export default function Hero() {
    const authStatus = useSelector((state) => state.auth.status);

  return (
    <section className="relative h-[70vh] md:h-[80vh] md:w-[80vw] mx-auto flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/heroImg.jpg" // Replace with your image path
        alt="Blog Hero"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-3xl text-center text-[#f5f5f5] px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Share Your Voice with the World
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Start blogging in seconds. Write, publish, and grow your audience—all in one place.
        </p>
        <Link to={`/${authStatus ? 'add-post' : 'login'}`}>
          <button 
            className="px-6 py-3 bg-[#191919] hover:bg-white hover:text-black transition-all duration-300 rounded-lg text-lg font-semibold shadow-md tracking-wider">
            {authStatus ? "Create Your First Blog" : "Login/Signup"}
          </button>
        </Link>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  )
}
