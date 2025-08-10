import { Award, Users, TrendingUp, Star, Quote, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()

  const coreValues = [
    {
      title: "Transparency",
      description: "Open and honest communication in all aspects of our work, from strategy to results.",
      icon: CheckCircle,
      color: "text-blue-600"
    },
    {
      title: "Research-Driven",
      description: "Every strategy is backed by in-depth market research and data analysis for optimal results.",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Clear Communication",
      description: "Ensuring you are always informed and understand the 'why' behind every decision.",
      icon: CheckCircle,
      color: "text-purple-600"
    },
    {
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines and delivering high-quality work promptly.",
      icon: CheckCircle,
      color: "text-yellow-600"
    },
  ]

  const testimonials = [
    {
      text: "Working with her transformed our business. Our sales increased by 127% in just 3 months. Her strategic approach and attention to detail are exceptional.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Forward",
      rating: 5
    },
    {
      text: "The CRO optimization she implemented doubled our conversion rate. Her data-driven approach and clear communication made the entire process smooth.",
      author: "Mike Chen",
      role: "Founder, TechGear Pro",
      rating: 5
    },
    {
      text: "She helped us build our brand from zero to 50K followers and $85K monthly revenue. Her creativity and strategic thinking are unmatched.",
      author: "Emma Rodriguez",
      role: "Marketing Director, BeautyBliss",
      rating: 5
    }
  ]

  const handleGetStarted = () => {
    navigate("/contact")
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about helping e-commerce businesses achieve sustainable growth through strategic marketing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over 5 years of experience in digital marketing, I've dedicated my career to helping 
                e-commerce businesses unlock their full potential. My journey began when I helped a small 
                local business increase their online sales by 200% in just 4 months.
              </p>
              <p>
                Since then, I've worked with 50+ e-commerce brands, from startups to established companies, 
                helping them achieve an average of 150% sales growth through strategic social media marketing 
                and conversion optimization.
              </p>
              <p>
                My approach combines creativity with data-driven insights. I believe that every business is 
                unique, and that's why I create customized strategies that align with your specific goals 
                and target audience.
              </p>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">My Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-start">
                    <div className={`p-3 rounded-full bg-opacity-20 ${value.color.replace('text-', 'bg-')} mb-4`}>
                      <Icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Clients Say</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how I can help grow your e-commerce business with proven strategies
            </p>
            <Button onClick={handleGetStarted} size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage


