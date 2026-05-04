import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Star, 
  Plane, 
  Shield, 
  Globe, 
  Menu, 
  X, 
  ArrowRight,
  Phone,
  Mail,
  Map
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary' : 'bg-white/20 backdrop-blur-md'}`}>
              <Plane className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Wanderlust
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Destinations', 'Tours', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary transition-colors shadow-lg shadow-primary/30">
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4">
          {['Destinations', 'Tours', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold w-3/4">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Beautiful destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-50"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30"
        >
          ✈️ Explore The World With Us
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Discover Your Next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">
            Great Adventure
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-light"
        >
          Experience the most beautiful places on earth with our premium travel packages curated just for you.
        </motion.p>

        {/* Search Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-4xl bg-white rounded-3xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row gap-4"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-primary transition-colors">
            <MapPin className="text-primary w-5 h-5" />
            <div className="flex flex-col text-left w-full">
              <span className="text-xs text-slate-400 font-medium">Location</span>
              <input type="text" placeholder="Where to?" className="bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-300 text-sm font-semibold" />
            </div>
          </div>
          
          <div className="w-px bg-slate-200 hidden md:block"></div>
          
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-primary transition-colors">
            <Calendar className="text-primary w-5 h-5" />
            <div className="flex flex-col text-left w-full">
              <span className="text-xs text-slate-400 font-medium">Date</span>
              <input type="date" className="bg-transparent border-none outline-none text-slate-700 text-sm font-semibold" />
            </div>
          </div>
          
          <div className="w-px bg-slate-200 hidden md:block"></div>
          
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-primary transition-colors">
            <Users className="text-primary w-5 h-5" />
            <div className="flex flex-col text-left w-full">
              <span className="text-xs text-slate-400 font-medium">Guests</span>
              <select className="bg-transparent border-none outline-none text-slate-700 text-sm font-semibold cursor-pointer">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>
          </div>
          
          <button className="bg-primary hover:bg-secondary text-white p-4 rounded-2xl flex items-center justify-center transition-colors shadow-lg shadow-primary/30 min-w-[60px]">
            <Search className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const DestinationCard = ({ image, title, location, price, rating }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 group cursor-pointer"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
        <Star className="w-4 h-4 text-accent fill-accent" />
        <span className="text-sm font-bold text-slate-800">{rating}</span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-slate-500 mb-2">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">{location}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <div>
          <span className="text-xs text-slate-500 font-medium">Starting from</span>
          <div className="text-lg font-bold text-primary">${price}</div>
        </div>
        <button className="bg-slate-50 hover:bg-primary hover:text-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

const PopularDestinations = () => {
  const destinations = [
    {
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
      title: 'Eiffel Tower & City Tour',
      location: 'Paris, France',
      price: '899',
      rating: '4.9'
    },
    {
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
      title: 'Maldives Island Retreat',
      location: 'Male, Maldives',
      price: '1299',
      rating: '5.0'
    },
    {
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      title: 'Tokyo City Exploration',
      location: 'Tokyo, Japan',
      price: '1099',
      rating: '4.8'
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Top Destinations</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Our Popular Destinations</h2>
          <p className="text-slate-600">Discover the most trending places around the globe. We have curated the best experiences for your next vacation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Worldwide Coverage',
      desc: 'We offer tours and travel packages to over 100+ countries worldwide.'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Secure Booking',
      desc: 'Your payments and personal information are 100% safe and secure with us.'
    },
    {
      icon: <Plane className="w-8 h-8 text-primary" />,
      title: 'Fast Booking',
      desc: 'Book your flights and hotels instantly with our easy-to-use platform.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">We Offer Best Services For Your Trip</h2>
            <p className="text-slate-600 mb-8 text-lg">
              We are dedicated to providing the best travel experiences. Our team of experts works tirelessly to ensure your journey is seamless and unforgettable.
            </p>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522818150428-c614b1c210ab?auto=format&fit=crop&w=800&q=80" 
              alt="Travelers" 
              className="relative rounded-3xl shadow-2xl z-10 w-full object-cover h-[600px]"
            />
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="bg-accent/20 p-4 rounded-full">
                <Star className="w-8 h-8 text-accent fill-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">15k+</div>
                <div className="text-slate-500 font-medium">Happy Customers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Wanderlust</span>
          </div>
          <p className="text-slate-400 mb-6">
            Discover the world with Wanderlust. We provide the best travel experiences tailored just for you.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Map className="w-5 h-5" /></a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Phone className="w-5 h-5" /></a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-slate-400">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#destinations" className="hover:text-primary transition-colors">Destinations</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Tours</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Support</h4>
          <ul className="space-y-3 text-slate-400">
            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-primary text-white"
            />
            <button className="bg-primary hover:bg-secondary text-white py-3 rounded-xl font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Wanderlust Travel Agency. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
