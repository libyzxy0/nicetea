import {
  Link
} from 'react-router-dom'

type Props = {
  open: boolean;
}

export function Sidebar({
  open
}: Props) {
  return (
    <div className={`fixed top-0 bottom-0 right-0 left-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50 flex md:hidden justify-center items-center z-30 ${open ? 'visible': 'hidden' }`}>
      <ul className="space-y-6 flex justify-center items-center flex flex-col justify-center items-center">
        <li>
          <Link to="/" className="text-gray-800  font-mono text-2xl hover:text-amber-800 hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800  font-mono text-2xl hover:text-amber-800 hover:underline">About</Link>
        </li>
        <li>
          <Link to="/products" className="text-gray-800  font-mono text-2xl hover:text-amber-800 hover:underline">Products</Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-800  font-mono text-2xl hover:text-amber-800 hover:underline">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}