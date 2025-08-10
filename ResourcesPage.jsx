import React from 'react'
import { Link } from 'react-router-dom'
import { Book, FileText, Layout, ArrowRight } from 'lucide-react'

const ResourcesPage = () => {
  const resources = [
    {
      type: 'Blog',
      title: '5 Strategies to Boost Your E-commerce Sales in Q4',
      description: 'Learn actionable tips to maximize your holiday season revenue.',
      link: '#',
      icon: FileText
    },
    {
      type: 'Template',
      title: 'Social Media Content Calendar Template',
      description: 'Download our free template to plan your social media content effortlessly.',
      link: '#',
      icon: Layout
    },
    {
      type: 'Book',
      title: 'The E-commerce Growth Playbook',
      description: 'My comprehensive guide to scaling your online business from scratch.',
      link: '#',
      icon: Book
    },
    {
      type: 'Blog',
      title: 'CRO Best Practices for Shopify Stores',
      description: 'Optimize your Shopify store for higher conversions with these proven tactics.',
      link: '#',
      icon: FileText
    },
    {
      type: 'Template',
      title: 'E-commerce Marketing Plan Template',
      description: 'A step-by-step template to create a winning marketing strategy for your online store.',
      link: '#',
      icon: Layout
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore valuable insights, tools, and guides to help you grow your e-commerce business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-blue-600 uppercase">{resource.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
                <Link to={resource.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage

