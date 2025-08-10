import { ExternalLink, TrendingUp, Users, DollarSign, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate()

  const caseStudies = [
    {
      title: "Fashion E-commerce Store",
      category: "Social Media Marketing + CRO",
      challenge: "Low conversion rate and poor social media engagement",
      solution: "Implemented targeted Instagram campaigns and optimized product pages",
      results: [
        { metric: "Sales Increase", value: "127%", icon: TrendingUp, color: "text-green-600" },
        { metric: "Conversion Rate", value: "3.2% → 7.8%", icon: Users, color: "text-blue-600" },
        { metric: "ROAS", value: "4.5x", icon: DollarSign, color: "text-purple-600" },
        { metric: "Engagement", value: "+89%", icon: Eye, color: "text-orange-600" }
      ],
      duration: "3 months",
      image: "bg-gradient-to-br from-pink-400 to-purple-600"
    },
    {
      title: "Tech Gadgets Store",
      category: "Shopify CRO + Strategy",
      challenge: "High traffic but low conversion rates",
      solution: "Complete UX overhaul and strategic funnel optimization",
      results: [
        { metric: "Conversion Rate", value: "1.8% → 4.8%", icon: TrendingUp, color: "text-green-600" },
        { metric: "AOV Increase", value: "+45%", icon: DollarSign, color: "text-blue-600" },
        { metric: "Cart Abandonment", value: "-38%", icon: Users, color: "text-purple-600" },
        { metric: "Revenue Growth", value: "+156%", icon: Eye, color: "text-orange-600" }
      ],
      duration: "4 months",
      image: "bg-gradient-to-br from-blue-400 to-cyan-600"
    },
    {
      title: "Beauty & Skincare Brand",
      category: "Full Marketing Strategy",
      challenge: "New brand with zero online presence",
      solution: "Built brand from scratch with comprehensive digital strategy",
      results: [
        { metric: "Brand Awareness", value: "0 → 50K followers", icon: Users, color: "text-green-600" },
        { metric: "Monthly Revenue", value: "$0 → $85K", icon: DollarSign, color: "text-blue-600" },
        { metric: "Customer LTV", value: "$180", icon: TrendingUp, color: "text-purple-600" },
        { metric: "Organic Reach", value: "2.3M/month", icon: Eye, color: "text-orange-600" }
      ],
      duration: "6 months",
      image: "bg-gradient-to-br from-rose-400 to-pink-600"
    }
  ]

  const handleViewCaseStudy = () => {
    navigate('/portfolio')
  }

  const handleScheduleCall = () => {
    // Calendly link - replace with actual Calendly URL
    window.open('https://calendly.com/your-calendly-link', '_blank')
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results That Speak
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real case studies from real clients. See how strategic marketing drives measurable growth.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Visual */}
                <div className={`${study.image} p-8 flex items-center justify-center relative`}>
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                    <p className="text-lg opacity-90">{study.category}</p>
                    <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-sm opacity-80">Project Duration</div>
                      <div className="text-2xl font-bold">{study.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Challenge & Solution */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon
                          return (
                            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                              <Icon className={`h-6 w-6 ${result.color} mx-auto mb-2`} />
                              <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                              <div className="text-sm text-gray-600">{result.metric}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button onClick={handleViewCaseStudy} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to See Similar Results?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how I can help grow your e-commerce business
            </p>
            <Button onClick={handleScheduleCall} size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

