
import React from 'react'

function TabCard({title, description, author, credits, features, included}) {
  return (
    <div className='lg:w-[1000px]'>
        <h2 className="font-Audiowide text-3xl text-gray-800 mb-4">About this template</h2>
        <hr className='text-gray-300' />

        <div>
          <h2 className="mt-3 text-xl mb-1 text-gray-600">Title</h2>
            <p className='text-gray-600'>{title}</p>
        </div>

        <div>
          <h2 className="mt-3 text-xl mb-1 text-gray-600">Description</h2>
            <p className='text-gray-600'>{description}</p>
        </div>

        <div>
        <h2 className="mt-3 text-xl mb-1 text-gray-600">Author</h2>
            <p className='text-gray-600'>{author}</p>
        </div>

        <div>
        <h2 className="mt-3 text-xl mb-1 text-gray-600">Credits</h2>
            <p className='text-gray-600'>{credits}</p>
        </div>

        <div>
        <h2 className="mt-3 text-xl mb-1 text-gray-600">Features</h2>
            {/* <p className='text-gray-600'>{features}</p> */}
            <ul className="list-disc list-inside text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>
            <strong className='text-gray-500'>{feature.title}</strong>: {feature.detail}
          </li>
        ))}
      </ul>
        </div>

        <div>
        <h2 className="mt-3 text-xl mb-1 text-gray-600">Included</h2>
            <p className='text-gray-600'>{included}</p>
        </div>

    </div>
  )
}

export default TabCard
