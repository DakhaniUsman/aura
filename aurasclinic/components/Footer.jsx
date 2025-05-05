import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Logo & Quote */}
        <div>
          <h2 className="text-2xl font-bold mb-3">AURA'S Clinic</h2>
          <img src="/logo.png" alt="AURA'S Clinic" className='rounded-2xl mb-3'/>
          <p className="text-sm italic">"Whoever saves a life, it is as if he has saved all mankind"</p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>24/7 Emergency Care Facility</li>
            <li>Home Visit</li>
            <li>General Checkup</li>
            <li>ECG Services</li>
            <li>Vaccination</li>
            <li>Blood Test Collection</li>
            <li>Minor Treatments</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Socials & Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-lg hover:text-green-400"><FaWhatsapp /></a>
            <a href="#" className="text-lg hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/auras.clinic/" className="text-lg hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="text-lg hover:text-blue-500"><FaFacebookF /></a>
          </div>
          <h3 className="text-lg font-semibold mb-1">Address</h3>
          <p className="text-sm leading-relaxed">
            Shop No. 10, Shree Complex, <br />
            Kamothe, Navi Mumbai - 410 209
          </p>
          <button className='w-[60%] md:w-[80%] m-auto mt-5 px-4 py-2 rounded-full font-bold border-2 border-blue-500 bg-blue-500 text-white hover:bg-transparent active:bg-transparent hover:text-blue-500 active:text-blue-500 duration-500 ease-in-out'><a href="https://www.google.com/maps/dir//19.0167755,73.0884616/@19.016782,73.0883359,45m/data=!3m1!1e3!4m2!4m1!3e2?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D">Visit Us</a></button>
        </div>
      </div>
      <div className="text-center text-xs mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} AURA'S Clinic. All rights reserved.
      </div>
    </footer>
  );
}
