import Image from 'next/image';

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);  
  });

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        
        {/* Text Content */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-6 text-white">About Mohenjo Daro</h1>
          
          <p className="text-lg text-gray-200 mb-6">
            Mohenjo Daro, a marvel of ancient civilization, was built around 2500 BCE and is one of the largest settlements of the Indus Valley Civilization. The city is an epitome of advanced urban planning and engineering.
          </p>
         
          <p className="text-lg text-gray-200 mb-6">
            Section 385 is renowned for its monumental structures, including large public baths that symbolize the sophisticated water management of the era. The drainage system here is a testimony to the extraordinary knowledge of engineering and sanitation by the city's inhabitants.
          </p>

          <br />
          <br />
          <br />


          <p className="text-lg text-gray-200 mb-6">
            In Section 387, archaeologists uncovered well-preserved houses and streets, highlighting the societal hierarchy and the impressive urban layout. This section reflects the social and economic fabric of Mohenjo Daro, with indications of the way families and communities lived.
          </p>
          
          <p className="text-lg text-gray-200">
            Today, Mohenjo Daro stands as a UNESCO World Heritage site, inviting scholars and travelers to uncover the mysteries of this ancient metropolis. It serves as a window into the culture, architecture, and life of one of the world's earliest cities.
          </p>
        </div>

        {/* Images on the right */}
        <div className="md:w-1/2 p-8 flex flex-col items-center md:items-end">
          <div className="mb-6">
            <Image 
              src="/image2.jpg" 
              alt="Mohenjo Daro - Section 385" 
              className="rounded-lg shadow-lg" 
              width={500} 
              height={300} // Adjusted height
            />
          </div>
          <div>
            <Image 
              src="/images3.jpg" 
              alt="Mohenjo Daro - Section 387" 
              className="rounded-lg shadow-lg" 
              width={500} 
              height={300} // Adjusted height
            />
          </div>
        </div>
      </div>
    </div>
  );  
}
