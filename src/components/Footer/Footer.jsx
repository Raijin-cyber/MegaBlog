import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-4"><Logo /></h2>
            <p className="text-sm text-gray-400">
              Thanks for stopping by!
              <br />
              Stay curious, stay inspired.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Connect with the Developer</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/raijinsigma" target="_blank" className="text-gray-100 hover:text-white/70 text-xl"><i className="fa-brands fa-square-x-twitter"></i></a>
              <a href="https://www.linkedin.com/in/ujjwal-sharma-518039301/" target="_blank" className="text-gray-100 hover:text-white/70 text-xl"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/ujjwal_sharma2506/" target="_blank" className="text-gray-200 hover:text-white/70 text-xl"><i className="fa-brands fa-square-instagram"></i></a>
              <a href="https://bsky.app/profile/raijinsigma.bsky.social" target="_blank" className="text-gray-100 hover:text-white/70 text-xl"><i className="fa-brands fa-square-bluesky"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 MegaBlog. All rights reserved.
        </div>
      </div>
    </footer>

  )
}

export default Footer
