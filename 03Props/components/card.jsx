import React from 'react'

function Card() {
  return (
    <div class="relative w-96 h-64 rounded-2xl overflow-hidden shadow-lg">
    <img src="https://unsplash.com/photos/people-crossing-a-street-in-an-urban-setting-0KRTNKPznoU" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-80"/>

    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="relative z-10 p-6 text-white flex flex-col justify-end h-full">
      <h2 class="text-2xl font-bold mb-2">Card Title</h2>
      <p class="text-sm mb-4">This card uses a background image with an overlay for readability.</p>
      <a href="https://www.google.com" class="self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition" target='_blank'>Learn More</a>
    </div>
  </div>

  )
}

export default Card
