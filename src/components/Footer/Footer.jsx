import Logo from '../Logo'

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-4"><Logo /></h2>
            <p className="text-sm text-gray-400">
              One place for all.
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
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">💼</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">📸</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">💻</a>
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
