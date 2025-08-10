import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path) => {
    navigate(path)
    setIsOpen(false)
    setIsResourcesOpen(false)
  }

  const handleBookConsultation = () => {
    window.open('https://calendly.com/aishasaeedmarketing/30min', '_blank')
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/services') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/portfolio')}
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/portfolio') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Portfolio
            </button>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/resources') || isActive('/about') ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Resources <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => handleNavigation('/resources')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Resources Main
                  </button>
                  <button
                    onClick={() => handleNavigation('/about')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    About
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/contact')}
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/contact') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation('/')}
                className={`text-left text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/') ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className={`text-left text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/services') ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('/portfolio')}
                className={`text-left text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/portfolio') ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Portfolio
              </button>
              
              {/* Mobile Resources Dropdown */}
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className={`flex items-center text-left text-gray-700 hover:text-blue-600 transition-colors w-full ${
                    isActive('/resources') || isActive('/about') ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  Resources <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isResourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <button
                      onClick={() => handleNavigation('/resources')}
                      className="block text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Resources Main
                    </button>
                    <button
                      onClick={() => handleNavigation('/about')}
                      className="block text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      About
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('/contact')}
                className={`text-left text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/contact') ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                Contact
              </button>
              <Button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


