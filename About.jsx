import { 
  Award, 
  Users, 
  TrendingUp, 
  Star,
  Shield,
  Search,
  MessageCircle,
  Clock,
  Quote
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const stats = [
    { value: "150%", label: "Average Sales Growth", icon: TrendingUp },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "3.2x", label: "Average ROI", icon: Award },
    { value: "4.9/5", label: "Client Satisfaction", icon: Star }
  ]

  const coreValues = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete honesty in all communications, clear reporting, and no hidden costs. You'll always know exactly what I'm working on and why.",
      color: "blue"
    },
    {
      icon: Search,
      title: "Research-Driven",
      description: "Every strategy is backed by thorough market research, competitor analysis, and data insights. No guesswork, only proven methodologies.",
      color: "green"
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Regular updates, prompt responses, and easy-to-understand reports. I believe great results start with great communication.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable project timelines and consistent delivery. Your deadlines are my priority, and I always deliver what I promise when I promise it.",
      color: "orange"
    }
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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        lightBg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-500",
        lightBg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-500",
        lightBg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-500",
        lightBg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    }
    return colorMap[color] || colorMap.blue
  }

  const handleGetStarted = () => {
    navigate('/contact')
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about helping e-commerce businesses achieve sustainable growth through strategic marketing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600">
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

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Core Values Section - Redesigned */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every project I work on and every relationship I build with my clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              const colors = getColorClasses(value.color)
              return (
                <div key={index} className={`relative ${colors.lightBg} ${colors.border} border-2 rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Trusted badge */}
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                    ✓ TRUSTED
                  </div>
                  
                  <h4 className={`text-xl font-bold ${colors.text} mb-4`}>{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  
                  {/* Bottom accent line */}
                  <div className={`w-12 h-1 ${colors.bg} rounded-full mx-auto mt-6`}></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials - Simple Design */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Clients Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
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
    </section>
  )
}

export default About

