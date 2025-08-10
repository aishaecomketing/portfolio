import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Get a response within 24 hours",
      contact: "hello@portfolio.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "LinkedIn",
      description: "Connect for professional networking",
      contact: "linkedin.com/in/portfolio",
      action: "Connect"
    }
  ]

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We discuss your goals and challenges"
    },
    {
      icon: Users,
      title: "Strategy Development",
      description: "I create a customized action plan"
    },
    {
      icon: CheckCircle,
      title: "Implementation",
      description: "Execute the strategy and track results"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Grow Your Business Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to see real results? Let's discuss how I can help scale your e-commerce business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">I'll get back to you within 24 hours.</p>
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your goals, challenges, and what you're looking to achieve..."
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
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                      <div className="flex items-start space-x-4">
                        <Icon className="h-8 w-8 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{method.title}</h4>
                          <p className="text-gray-600 mb-2">{method.description}</p>
                          <p className="text-blue-600 font-medium">{method.contact}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How We'll Work Together</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quick Response Time</h4>
                  <p className="text-gray-600">I typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

