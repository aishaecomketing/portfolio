import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const handleViewWork = () => {
    navigate('/portfolio')
  }

  const handleBookConsultation = () => {
    window.open('https://calendly.com/aishasaeedmarketing/30min', '_blank')
  }

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Trusted E-commerce Growth Partner
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I help established e-commerce businesses achieve sustainable growth through proven strategies, transparent processes, and data-driven results. Your success is my commitment.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Trusted by 50+ Brands</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Target className="h-6 w-6 text-blue-600" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span>Proven Results</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150%</div>
                <div className="text-sm text-gray-600">Average Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">3.2x</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleViewWork} className="bg-blue-600 hover:bg-blue-700 text-white">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" onClick={handleBookConsultation} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Recent Success</h3>
              
              {/* Sample Case Study Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Sales Growth</div>
                      <div className="text-sm text-gray-600">Fashion E-store</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">+127%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Conversion Rate</div>
                      <div className="text-sm text-gray-600">Tech Gadgets Store</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">4.8%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">ROAS</div>
                      <div className="text-sm text-gray-600">Beauty Brand</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">5.2x</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


