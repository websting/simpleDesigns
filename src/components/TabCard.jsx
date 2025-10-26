
import React from 'react'

function TabCard({title, description, author, credits, features, included}) {
  return (
    <div className='lg:w-[1000px]'>
        <h1 className="mt-6 text-2xl mb-4 text-gray-700">About this template</h1>
        <hr className='text-gray-300' />

        <div>
          <h1 className="mt-3 text-2xl mb-1 text-gray-700">Title</h1>
            <p className='text-gray-600'>{title}</p>
        </div>

        <div>
          <h1 className="mt-3 text-2xl mb-1 text-gray-700">Description</h1>
            <p className='text-gray-600'>{description}</p>
        </div>

        <div>
        <h1 className="mt-3 text-2xl mb-1 text-gray-700">Author</h1>
            <p className='text-gray-600'>{author}</p>
        </div>

        <div>
        <h1 className="mt-3 text-2xl mb-1 text-gray-700">Credits</h1>
            <p className='text-gray-600'>{credits}</p>
        </div>

        <div>
        <h1 className="mt-3 text-2xl mb-1 text-gray-700">Features</h1>
            {/* <p className='text-gray-600'>{features}</p> */}
            <ul className="list-disc list-inside text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>
            <strong className='text-gray-600'>{feature.title}</strong>: {feature.detail}
          </li>
        ))}
      </ul>
        </div>

        <div>
        <h1 className="mt-3 text-2xl mb-1 text-gray-700">Included</h1>
            <p className='text-gray-600'>{included}</p>
        </div>

    </div>
  )
}

export default TabCard
