import { ExternalLink, TrendingUp, Users, DollarSign, Eye, ArrowRight, Calendar, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const PortfolioPage = () => {
  const navigate = useNavigate()

  const caseStudies = [
    {
      title: "Fashion E-commerce Store",
      category: "Social Media Marketing + CRO",
      client: "Premium Fashion Retailer",
      challenge: "Low conversion rate (1.2%) and poor social media engagement despite high traffic. The brand struggled to convert social media followers into paying customers.",
      solution: "Implemented a comprehensive strategy including targeted Instagram campaigns, influencer partnerships, product page optimization, and streamlined checkout process.",
      results: [
        { metric: "Sales Increase", value: "127%", icon: TrendingUp, color: "text-green-600", description: "Monthly revenue growth" },
        { metric: "Conversion Rate", value: "3.2% → 7.8%", icon: Users, color: "text-blue-600", description: "Website conversion improvement" },
        { metric: "ROAS", value: "4.5x", icon: DollarSign, color: "text-purple-600", description: "Return on ad spend" },
        { metric: "Engagement", value: "+89%", icon: Eye, color: "text-orange-600", description: "Social media engagement" }
      ],
      duration: "3 months",
      investment: "$4,500",
      image: "bg-gradient-to-br from-pink-400 to-purple-600",
      testimonial: "The results exceeded our expectations. Not only did our sales increase dramatically, but we also built a loyal community of customers.",
      clientName: "Sarah Johnson, CEO"
    },
    {
      title: "Tech Gadgets Store",
      category: "Shopify CRO + Strategy",
      client: "Electronics E-commerce",
      challenge: "High traffic (50K monthly visitors) but extremely low conversion rates (1.8%). Cart abandonment rate was 78%, indicating major UX issues.",
      solution: "Complete UX overhaul including mobile optimization, simplified navigation, trust signals implementation, and strategic funnel optimization with A/B testing.",
      results: [
        { metric: "Conversion Rate", value: "1.8% → 4.8%", icon: TrendingUp, color: "text-green-600", description: "Conversion rate improvement" },
        { metric: "AOV Increase", value: "+45%", icon: DollarSign, color: "text-blue-600", description: "Average order value" },
        { metric: "Cart Abandonment", value: "-38%", icon: Users, color: "text-purple-600", description: "Reduction in cart abandonment" },
        { metric: "Revenue Growth", value: "+156%", icon: Eye, color: "text-orange-600", description: "Monthly revenue increase" }
      ],
      duration: "4 months",
      investment: "$6,200",
      image: "bg-gradient-to-br from-blue-400 to-cyan-600",
      testimonial: "The CRO optimization transformed our business. We're now converting visitors at nearly 5% which seemed impossible before.",
      clientName: "Mike Chen, Founder"
    },
    {
      title: "Beauty & Skincare Brand",
      category: "Full Marketing Strategy",
      client: "Startup Beauty Brand",
      challenge: "New brand with zero online presence, no social media following, and no established customer base. Needed to build everything from scratch.",
      solution: "Built comprehensive brand strategy from ground up including social media presence, influencer partnerships, content marketing, and conversion-optimized website.",
      results: [
        { metric: "Brand Awareness", value: "0 → 50K followers", icon: Users, color: "text-green-600", description: "Social media following" },
        { metric: "Monthly Revenue", value: "$0 → $85K", icon: DollarSign, color: "text-blue-600", description: "Monthly recurring revenue" },
        { metric: "Customer LTV", value: "$180", icon: TrendingUp, color: "text-purple-600", description: "Average customer lifetime value" },
        { metric: "Organic Reach", value: "2.3M/month", icon: Eye, color: "text-orange-600", description: "Monthly organic reach" }
      ],
      duration: "6 months",
      investment: "$12,000",
      image: "bg-gradient-to-br from-rose-400 to-pink-600",
      testimonial: "She didn't just help us grow - she helped us build a brand that customers love and trust. The ROI has been incredible.",
      clientName: "Emma Rodriguez, Founder"
    }
  ]

  const handleGetStarted = () => {
    navigate('/contact')
  }

  const handleBookConsultation = () => {
    // Calendly link - replace with actual Calendly URL
    window.open('https://calendly.com/your-calendly-link', '_blank')
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Proven Results That
            <span className="text-blue-600"> Speak Volumes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real case studies from real clients. See how strategic marketing and optimization 
            drive measurable, sustainable growth for e-commerce businesses.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">150%</div>
              <div className="text-sm text-gray-600">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">4.2x</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className={`${study.image} p-8 text-white relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                        <p className="text-lg opacity-90 mb-2">{study.category}</p>
                        <p className="text-sm opacity-75">{study.client}</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-center space-x-4 text-sm">
                            <div>
                              <Calendar className="h-4 w-4 mb-1" />
                              <div>{study.duration}</div>
                            </div>
                            <div>
                              <Target className="h-4 w-4 mb-1" />
                              <div>{study.investment}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Side - Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="text-2xl text-blue-600 mb-2">"</div>
                        <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                        <p className="text-sm font-semibold text-gray-900">— {study.clientName}</p>
                      </div>
                    </div>

                    {/* Right Side - Results */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Results Achieved
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon
                          return (
                            <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                              <Icon className={`h-6 w-6 ${result.color} mx-auto mb-2`} />
                              <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                              <div className="text-sm font-medium text-gray-700 mb-1">{result.metric}</div>
                              <div className="text-xs text-gray-500">{result.description}</div>
                            </div>
                          )
                        })}
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        View Detailed Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help grow your e-commerce business with proven strategies and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleBookConsultation} variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" onClick={handleGetStarted} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

