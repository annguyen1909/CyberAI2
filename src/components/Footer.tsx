import Link from "next/link";
import { navLinks } from "@/constants";
import Facebook from "@/assets/icons/facebook.svg"
import Linkedin from "@/assets/icons/linkedin.svg"
import Github from "@/assets/icons/github.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        {/* Company Info */}
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-white text-xl font-bold mb-4">CyberAI</h2>
          <p className="text-gray-400">
            CyberAI is your go-to platform for cutting-edge AI solutions, driving innovation and efficiency in every industry.
          </p>
        </div>

        <div className="w-full mb-8 md:mb-0">
          <ul>
          {navLinks.map(({route, label}) => {
              return <Link href={route} key={label} className={'block text-white hover:bg-zinc-700 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300'}>
                <p>{label}</p>
              </Link>
            } )}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-white text-xl font-bold mb-4">Subscribe</h2>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 bg-zinc-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="w-full">
          <h2 className="text-white text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-red-500 transition-colors duration-300">
              <Facebook/>
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors duration-300">
              <Linkedin/>
            </Link>
            <Link href="#" className="hover:text-red-500 transition-colors duration-300">
              <Github/>
            </Link>
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 CyberAI. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> |{' '}
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
  );
};
