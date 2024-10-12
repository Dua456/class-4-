import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen">
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left text-white">Welcome to Mohenjo Daro</h1>
        <p className="text-lg text-gray-100 mb-4">
          Mohenjo Daro, one of the oldest cities of the Indus Valley Civilization, showcases the remarkable urban planning and architecture of the time. This ancient city, located in present-day Pakistan, is renowned for its advanced drainage system, grid layout, and impressive public baths.
        </p>
        <p className="text-lg text-gray-100 mb-4">
          Explore the remnants of a great civilization and witness the extraordinary engineering skills that have withstood the test of time. Mohenjo Daro is not just a historical site; it's a journey into the heart of ancient culture, innovation, and community living.
        </p>
        <p className="text-lg text-gray-100 mb-4">
          Visit this UNESCO World Heritage site and let the echoes of the past inspire your imagination and curiosity.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <Image 
          src="/image1.jpeg" 
          alt="Mohenjo Daro" 
          className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105" 
          layout="responsive" 
          width={500} 
          height={300}
        />
      </div>
    </div>
  );
}
