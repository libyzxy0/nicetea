import { GlowBackground } from '@/components/GlowBackground'

type Props = {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

export function FeaturedProduct({ name, description, imageUrl, url }: Props) {
  return (
    <GlowBackground className="rounded-lg group shadow">
      <div className="relative group">
        <img src={imageUrl} alt={name} className="h-full w-full object-cover aspect-square" />
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white rounded-b-lg">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm">{description}</p>
            <button className="mt-3 border-none py-2.5 px-8 rounded bg-amber-800 font-mono text-white hover:bg-amber-800/90 transition-all duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </GlowBackground>
  )
}