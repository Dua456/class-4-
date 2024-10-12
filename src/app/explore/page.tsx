import Image from 'next/image';

export default function Explore() {
  return (
    <div className="container mx-auto p-4 bg-blue-50"> {/* Change to desired background color */}
      <h1 className="text-3xl font-bold text-center mb-4">Explore the Wonders of Mohenjo Daro!</h1> {/* Adjust margin bottom */}
      <p className="text-center mb-8">Discover the history and culture of one of the oldest urban settlements in the world.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-4">
          <Image src="/image4.jpg" alt="Great Bath" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">The Great Bath - A significant architectural feature.</p>
        </div>
        <div className="mb-4">
          <Image src="/image5.webp" alt="Archaeological Site" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Archaeological Excavation - Ongoing research at the site.</p>
        </div>
        <div className="mb-4">
          <Image src="/images6.webp" alt="Pottery" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Ancient Pottery - Everyday items from the civilization.</p>
        </div>
        <div className="mb-4">
          <Image src="/images7.jpg" alt="Seal" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Indus Valley Seal - Illustrating trade and artistry.</p>
        </div>

        <div className="mb-4">
          <Image src="/images9.jpg" alt="Landscape" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Scenic View - The natural beauty surrounding Mohenjo Daro.</p>
        </div>
        <div className="mb-4">
          <Image src="/images11.png" alt="Sunset at Mohenjo Daro" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Sunset Views - The serene beauty of Mohenjo Daro.</p>
        </div>
        <div className="mb-4">
          <Image src="/images10.avif" alt="Sunset at Mohenjo Daro" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Sunset Views - The serene beauty of Mohenjo Daro.</p>
        </div>
        <div className="mb-4">
          <Image src="/images12.jpg" alt="Educational Program" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Educational Tours - Learning about the history.</p>
        </div>
        <div className="mb-4">
          <Image src="/images13.jpg" alt="Site Map" width={400} height={300} className="w-full h-64 object-cover rounded shadow-lg" />
          <p className="mt-2 text-center">Site Layout Map - Understanding the layout of Mohenjo Daro.</p>
        </div>
      </div>
    </div>
  );
}
