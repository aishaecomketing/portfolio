import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle, Clock, Users, ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBookConsultation = () => {
    window.open('https://calendly.com/aishasaeedmarketing/30min', '_blank')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/923064669779', '_blank')
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get a response within 24 hours",
      contact: "hello@portfolio.com",
      action: "Send Email",
      link: "mailto:hello@portfolio.com"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick chat and instant responses",
      contact: "+92 306 4669779",
      action: "Chat Now",
      link: "https://wa.me/923064669779"
    },
    {
      icon: MessageSquare,
      title: "LinkedIn",
      description: "Connect for professional networking",
      contact: "linkedin.com/in/portfolio",
      action: "Connect",
      link: "https://linkedin.com/in/portfolio"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule a free 30-minute consultation",
      contact: "calendly.com/portfolio",
      action: "Schedule Now",
      link: "#",
      onClick: handleBookConsultation
    }
  ]

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We discuss your goals, challenges, and current situation",
      duration: "30 minutes"
    },
    {
      icon: Users,
      title: "Strategy Development",
      description: "I create a customized action plan with clear timelines",
      duration: "3-5 days"
    },
    {
      icon: CheckCircle,
      title: "Implementation",
      description: "Execute the strategy and track results with regular updates",
      duration: "Ongoing"
    }
  ]

  const services = [
    "Social Media Marketing",
    "Creative Strategy & Marketing Plans",
    "Shopify CRO Optimization",
    "Full Marketing Strategy",
    "Not sure - need consultation"
  ]

  const budgetRanges = [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+",
    "Let's discuss"
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Grow Your Business
            <span className="text-blue-600"> Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to see real results? Let's discuss how I can help scale your e-commerce business 
            with proven strategies and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Free Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Send Message Below
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll review your message and get back to you within 24 hours 
                    with a detailed response and next steps.
                  </p>
                  <Button onClick={handleBookConsultation} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Book a Call Instead
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Store Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell me about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your goals, challenges, current situation, and what you're looking to achieve. The more details you provide, the better I can help you."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Right Side - Contact Info & Process */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h4>
                            <p className="text-gray-600 mb-2">{method.description}</p>
                            <p className="text-blue-600 font-medium mb-3">{method.contact}</p>
                            <Button 
                              size="sm" 
                              onClick={method.onClick || (() => window.open(method.link, '_blank'))}
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              {method.action}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How We'll Work Together</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                            <span className="text-sm text-blue-600 font-medium">{step.duration}</span>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Response Time & Guarantees */}
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Response Time</h4>
                      <p className="text-gray-600">I typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                      <p className="text-gray-600">30-minute strategy call at no cost</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage


