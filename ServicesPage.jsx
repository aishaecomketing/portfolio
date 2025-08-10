import { 
  Share2, 
  Target, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Zap,
  TrendingUp,
  Search,
  MessageSquare,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const ServicesPage = () => {
  const navigate = useNavigate()

  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that convert followers into customers and drive measurable business growth.",
      detailedDescription: "I create comprehensive social media strategies that align with your business goals. From content creation to community management, every aspect is designed to maximize engagement and conversions.",
      features: [
        "Content Strategy & Creation",
        "Paid Social Advertising (Facebook, Instagram, LinkedIn)",
        "Community Management & Engagement",
        "Social Media Analytics & Reporting",
        "Influencer Collaboration Strategies",
        "Brand Voice Development"
      ],
      results: "Average 85% increase in engagement",
      pricing: "Starting from $1,500/month",
      color: "blue",
      benefits: [
        "Increased brand awareness and visibility",
        "Higher engagement rates and follower growth",
        "Improved lead generation and sales",
        "Better customer relationships and loyalty"
      ]
    },
    {
      icon: Target,
      title: "Creative Strategy & Marketing Plans",
      description: "Data-driven strategies that align with your business goals and deliver measurable results.",
      detailedDescription: "I develop comprehensive marketing strategies based on thorough market research and competitor analysis. Every plan is customized to your unique business needs and target audience.",
      features: [
        "Market Research & Analysis",
        "Competitor Intelligence & Benchmarking",
        "Campaign Planning & Execution",
        "Brand Positioning & Messaging",
        "Customer Journey Mapping",
        "Performance Tracking & Optimization"
      ],
      results: "40% improvement in campaign performance",
      pricing: "Starting from $2,000/project",
      color: "green",
      benefits: [
        "Clear roadmap for marketing success",
        "Better understanding of target audience",
        "Improved campaign ROI and effectiveness",
        "Competitive advantage in the market"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Shopify CRO Optimization",
      description: "Optimize your Shopify store for maximum conversions and revenue growth.",
      detailedDescription: "I analyze every aspect of your Shopify store to identify conversion barriers and implement data-driven optimizations that increase sales and improve user experience.",
      features: [
        "Comprehensive Conversion Audit",
        "A/B Testing & Experimentation",
        "UX/UI Optimization",
        "Sales Funnel Enhancement",
        "Checkout Process Optimization",
        "Mobile Experience Improvement"
      ],
      results: "Average 60% increase in conversion rate",
      pricing: "Starting from $2,500/project",
      color: "purple",
      benefits: [
        "Higher conversion rates and sales",
        "Improved user experience and satisfaction",
        "Reduced cart abandonment rates",
        "Better mobile performance and accessibility"
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        accent: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        accent: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        accent: "text-purple-600",
        border: "border-purple-200"
      }
    }
    return colors[color]
  }

  const handleGetStarted = () => {
    navigate('/contact')
  }

  const handleViewPortfolio = () => {
    navigate('/portfolio')
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Services That Drive
            <span className="text-blue-600"> Real Results</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            I specialize in three core areas that work together to maximize your e-commerce success. 
            Each service is designed to deliver measurable growth and sustainable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={handleViewPortfolio} className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color)
              const Icon = service.icon
              
              return (
                <div key={index} className={`bg-white rounded-3xl shadow-xl overflow-hidden ${colors.border} border-2`}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left Side - Content */}
                    <div className="p-12">
                      <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-600 mb-6">{service.detailedDescription}</p>
                      
                      <div className="space-y-4 mb-8">
                        <h3 className="text-xl font-semibold text-gray-900">What's Included:</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className={`h-5 w-5 ${colors.icon}`} />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`${colors.bg} p-6 rounded-xl mb-8`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <TrendingUp className={`h-5 w-5 ${colors.icon}`} />
                              <span className={`font-semibold ${colors.accent}`}>Typical Results</span>
                            </div>
                            <p className="text-gray-700">{service.results}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Investment</div>
                            <div className={`text-lg font-bold ${colors.accent}`}>{service.pricing}</div>
                          </div>
                        </div>
                      </div>

                      <Button onClick={handleGetStarted} className={`w-full ${colors.button} text-white`}>
                        Get Started with {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Right Side - Benefits */}
                    <div className={`${colors.bg} p-12 flex flex-col justify-center`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Benefits</h3>
                      <div className="space-y-6">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-4">
                            <div className={`w-8 h-8 rounded-full ${colors.icon.replace('text-', 'bg-')} flex items-center justify-center flex-shrink-0`}>
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                            <p className="text-gray-700 leading-relaxed">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures consistent results and transparent communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Research & Analysis", desc: "Deep dive into your market, competitors, and target audience to understand opportunities" },
              { icon: Target, title: "Strategy Development", desc: "Create customized, data-driven action plans aligned with your business goals" },
              { icon: Zap, title: "Implementation", desc: "Execute campaigns with precision, monitoring performance and making real-time adjustments" },
              { icon: BarChart3, title: "Optimize & Scale", desc: "Continuous improvement and scaling based on performance data and market feedback" }
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss which service is the perfect fit for your goals and create a customized strategy for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleGetStarted} variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={handleViewPortfolio} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              See Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

