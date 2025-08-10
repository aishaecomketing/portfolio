import { Mail, MessageSquare, TrendingUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping e-commerce businesses achieve sustainable growth through strategic 
              social media marketing and conversion optimization.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@portfolio.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Creative Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Shopify CRO</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-300">Growing businesses since 2019</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

