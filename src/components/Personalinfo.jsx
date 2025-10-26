import React from 'react'
import { useState } from 'react';

const Personalinfo = () => {
// Personal info state
const [email, setEmail] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8 mt-6">
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150"
            placeholder="John"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-150"
            placeholder="Doe"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Personalinfo
