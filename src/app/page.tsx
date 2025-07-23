export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <header className="w-full bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
            src={}
            />
          </div>
          {/* Navigation Tabs */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Projects</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact Us</a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Open menu"
              onClick={() => alert('Mobile menu coming soon!')}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* ...rest of your page... */}
    </div>
  );
}