import React from 'react'

const BrandLogos = () => {
  const logos = [
    '/logos/brand-logo-1.png',
    '/logos/brand-logo-2.png',
    '/logos/brand-logo-3.png',
    '/logos/brand-logo-4.png',
    '/logos/brand-logo-5.png',
    '/logos/brand-logo-6.png',
    '/logos/brand-logo-7.png',
    '/logos/brand-logo-8.png',
    '/logos/brand-logo-9.png',
    '/logos/brand-logo-10.png',
    '/logos/brand-logo-11.png',
    '/logos/brand-logo-12.png',
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Happy Brands</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Brand Logo ${index + 1}`} className="h-12 mx-8" />
            ))}
            {/* Duplicate logos for seamless loop */}
            {logos.map((logo, index) => (
              <img key={index + logos.length} src={logo} alt={`Brand Logo ${index + 1}`} className="h-12 mx-8" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandLogos


