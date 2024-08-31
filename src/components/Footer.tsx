import { Link } from 'react-router-dom'
import { clsx } from "clsx";

export function Footer() {
  return (
    <div className="text-xs text-gray-500">
      <div className="mx-7 md:mx-12">
        <hr className="h-px border-0 bg-gray-200" />
        <div className="flex flex-col gap-2 py-6">
          <div
            className={clsx(
              `flex flex-col gap-6 md:flex-row md:justify-between`
            )}
          >
            <div className="flex flex-col md:gap-0 gap-2">
              <div className="font-mono">NiceTea</div>
              <div className="font-mono">Copyright © 2024, NiceTea Allrights reserved.</div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link to="https://github.com/libyzxy0/milktea-shop">
                GitHub
              </Link>
              <Link to="/privacy">Privacy Policy</Link>
              <div className="text-orange-500">
                <Link to="https://libyzxy0.com">Developer</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}