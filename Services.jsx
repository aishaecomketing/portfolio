import { 
  Share2, 
  Target, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Zap,
  TrendingUp,
  Search,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()

  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that convert followers into customers",
      features: [
        "Content Strategy & Creation",
        "Paid Social Advertising",
        "Community Management",
        "Analytics & Reporting"
      ],
      results: "Average 85% increase in engagement",
      color: "blue"
    },
    {
      icon: Target,
      title: "Creative Strategy & Marketing Plans",
      description: "Data-driven strategies that align with your business goals",
      features: [
        "Market Research & Analysis",
        "Competitor Intelligence",
        "Campaign Planning",
        "Brand Positioning"
      ],
      results: "40% improvement in campaign performance",
      color: "green"
    },
    {
      icon: ShoppingCart,
      title: "Shopify CRO Optimization",
      description: "Optimize your Shopify store for maximum conversions",
      features: [
        "Conversion Audit",
        "A/B Testing",
        "UX/UI Optimization",
        "Sales Funnel Enhancement"
      ],
      results: "Average 60% increase in conversion rate",
      color: "purple"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        accent: "text-blue-600"
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        accent: "text-green-600"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        accent: "text-purple-600"
      }
    }
    return colors[color]
  }

  const handleLearnMore = () => {
    navigate('/services')
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in three core areas that work together to maximize your e-commerce success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            const Icon = service.icon
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`${colors.bg} p-6`}>
                  <Icon className={`h-12 w-12 ${colors.icon} mb-4`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${colors.icon.replace('text-', 'bg-')}`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`${colors.bg} p-4 rounded-lg mb-6`}>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className={`h-5 w-5 ${colors.icon}`} />
                      <span className={`font-semibold ${colors.accent}`}>{service.results}</span>
                    </div>
                  </div>
                  
                  <Button onClick={handleLearnMore} className={`w-full ${colors.button} text-white`}>
                    Learn More
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">My Process</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Research & Analysis", desc: "Deep dive into your market and competitors" },
              { icon: Target, title: "Strategy Development", desc: "Create data-driven action plans" },
              { icon: Zap, title: "Implementation", desc: "Execute campaigns with precision" },
              { icon: BarChart3, title: "Optimize & Scale", desc: "Continuous improvement for maximum ROI" }
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

