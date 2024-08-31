import { GlowBackground } from '@/components/GlowBackground'
import { FeaturedProduct } from '@/components/FeaturedProduct'
import { Testimonial } from '@/components/Testimonial'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import mockup from '@/assets/9efec97fb37b858be9bcb6e41d0c11d4_high.webp'
import { Link } from 'react-router-dom'

function LandingHero() {
  return (
    <GlowBackground>
      <section className="pb-16 pt-16 mx-7 md:mx-12" id="hero">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        <div className="pt-8 space-y-4">
          <h2 className="font-mono text-2xl leading-normal">Give a try of Our Delicious, Refreshing, and Affordable Milk Tea!</h2>
          <p className="text-[15px]">Try our delicious, refreshing, and affordable milk teas! Explore our wide range of flavors and find your new favorite today.</p>
          
          <div className="flex flex-row items-center pt-8 space-x-5">
            <Link to="/products">
            <button className="border-none py-3 px-8 rounded bg-amber-800 font-mono text-white hover:bg-amber-800/90 transition-all duration-200">
            Explore
            </button>
            </Link>
            <button className="bg-transparent border-2 border-amber-800 py-2.5 px-5 rounded bg-amber-800 font-mono text-amber-800 hover:bg-amber-800/90 hover:border-amber-800 hover:text-white transition-all duration-200">
            Order Now
            </button>
            
          </div>
        </div>
        
        <div className="mt-5">
          <img className="h-96 w-96" style={{borderRadius: "30% 70% 42% 58% / 61% 17% 83% 39% "}} src={mockup} />
        </div>
        
        </div>
      </section>
    </GlowBackground>
  )
}

function LandingBestSellers() {
  return (
    <section className="py-16 mx-7 md:mx-12" id="bestsellers">
      <div>
        <h1 className="text-3xl font-mono text-amber-800">Our Bestsellers.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-8">
      
        <FeaturedProduct name="Assorted Milk Tea" description="Delicious milk tea with a variety of toppings, perfect for any occasion." imageUrl="https://t3.ftcdn.net/jpg/08/14/52/58/360_F_814525801_vjbpFtItHLLcA1Lf4Zyqth8HKfn01AMI.webp" url="#" />
        <FeaturedProduct name="Assorted Milk Tea" description="Delicious milk tea with a variety of toppings, perfect for any occasion." imageUrl="https://t4.ftcdn.net/jpg/08/39/35/05/360_F_839350564_RNvfcLeb1J4SjSI5gWv5bLJTrQT40ubo.webp" url="#" />
        <FeaturedProduct name="Assorted Milk Tea" description="Delicious milk tea with a variety of toppings, perfect for any occasion." imageUrl="https://t4.ftcdn.net/jpg/08/46/13/23/360_F_846132349_udHh3FoOyMhMRRBNgG9teI3VTr0JjHtw.webp" url="#" />
        
      </div>
      </div>
    </section>
  )
}

function LandingAbout() {
  return (
    <GlowBackground>
      <section className="py-16 mx-7 md:mx-12 space-y-5" id="about">
        <h2 className="font-mono text-2xl leading-normal">A Fresh Take on Milk Tea</h2>
        <p className="text-[15px]">At Nicetea, we believe that the best milk tea experience starts with the perfect blend of quality ingredients and innovative flavors. We've crafted our menu to transform classic tea traditions into modern delights, ensuring every sip is a refreshing adventure. Discover your new favorite at Nicetea—where taste meets innovation.</p>
      </section>
    </GlowBackground>
  )
}

function LandingTestimonials() {
  return (
    <section className="mx-7 md:mx-12 py-16">
    <h1 className="text-3xl font-mono text-amber-800">Customer Reviews.</h1>
    <div className="hiddenscrollbar flex my-16 overflow-auto xl:justify-center ">
      <div className="hiddenscrollbar flex gap-12 xl:grid xl:grid-cols-3">
        {testimonials.map((t) => (
          <Testimonial key={t.person} {...t} />
        ))}
      </div>
    </div>
    </section>
  );
}

function LandingProducts() {
  return (
    <section className="bg-slate-100 w-full py-16">
      <div className="mx-7 md:mx-12">
      <h1 className="text-3xl font-mono text-amber-800">Our MilkTea's.</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 pt-8 gap-5 md:gap-8">
      
      
        <GlowBackground className="w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
          src="https://t3.ftcdn.net/jpg/08/14/52/58/360_F_814525801_vjbpFtItHLLcA1Lf4Zyqth8HKfn01AMI.webp"
          alt="Milktea"
          width="100"
          height="100"
          className="h-24 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-mono  font-semibold">Classic Milktea</h3>
            <p className="mt-1 text-xs text-gray-600">Creamy and delicious milktea with tapioca pearls.</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-lg font-bold font-mono">₱30</span>
            </div>
          </div>
        </GlowBackground>
        <GlowBackground className="w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
          src="https://t3.ftcdn.net/jpg/08/14/52/58/360_F_814525801_vjbpFtItHLLcA1Lf4Zyqth8HKfn01AMI.webp"
          alt="Milktea"
          width="100"
          height="100"
          className="h-24 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-mono  font-semibold">Classic Milktea</h3>
            <p className="mt-1 text-xs text-gray-600">Creamy and delicious milktea with tapioca pearls.</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-lg font-bold font-mono">₱30</span>
            </div>
          </div>
        </GlowBackground>
        <GlowBackground className="w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
          src="https://t3.ftcdn.net/jpg/08/14/52/58/360_F_814525801_vjbpFtItHLLcA1Lf4Zyqth8HKfn01AMI.webp"
          alt="Milktea"
          width="100"
          height="100"
          className="h-24 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-mono  font-semibold">Classic Milktea</h3>
            <p className="mt-1 text-xs text-gray-600">Creamy and delicious milktea with tapioca pearls.</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-lg font-bold font-mono">₱30</span>
            </div>
          </div>
        </GlowBackground>
        <GlowBackground className="w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <img
          src="https://t3.ftcdn.net/jpg/08/14/52/58/360_F_814525801_vjbpFtItHLLcA1Lf4Zyqth8HKfn01AMI.webp"
          alt="Milktea"
          width="100"
          height="100"
          className="h-24 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-mono  font-semibold">Classic Milktea</h3>
            <p className="mt-1 text-xs text-gray-600">Creamy and delicious milktea with tapioca pearls.</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-lg font-bold font-mono">₱30</span>
            </div>
          </div>
        </GlowBackground>

      </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    blurb: "The best milk tea I've ever had! The flavors are rich, and the bubbles are always perfectly chewy. My new favorite spot!",
    person: 'Emily Wong',
    role: 'Food Blogger',
    photo: '/dummy.png',
  },
  {
    blurb: "Amazing selection of flavors and the staff is always friendly. I love their seasonal specials—they never disappoint!",
    person: 'John Smith',
    role: 'Local Business Owner',
    photo: '/dummy.png',
  },
  {
    blurb: "Their milk tea is a game changer. The quality of ingredients really shines through in every cup. Highly recommend!",
    person: 'Sophie Lee',
    role: 'Graphic Designer',
    photo: '/dummy.png',
  },
  {
    blurb: "A cozy spot with fantastic milk tea and a great atmosphere. Perfect for catching up with friends or just relaxing.",
    person: 'Mike Chen',
    role: 'Tech Entrepreneur',
    photo: '/dummy.png',
  },
  {
    blurb: "I’ve tried many milk tea places, but this one stands out. The balance of sweetness and tea strength is perfect every time.",
    person: 'Jessica Rivera',
    role: 'Student',
    photo: '/dummy.png',
  },
  {
    blurb: "Their matcha milk tea is out of this world! I keep coming back for more. Service is always quick and friendly too.",
    person: 'David Kim',
    role: 'Fitness Trainer',
    photo: '/dummy.png',
  },
];


export default function Landing() {
  return(
  <>
  <Navbar />
  <LandingHero />
  <LandingBestSellers />
  <LandingAbout />
  <LandingProducts />
  <LandingTestimonials />
  <Footer />
  </>
 )
}