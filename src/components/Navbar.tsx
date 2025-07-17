
import { useState } from 'react';
import { Menu, X, ShoppingCart, Search, User, Home, Calendar, Package } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: User, href: '/about' },
    { name: 'Events', icon: Calendar, href: '#events' },
    { name: 'Merch', icon: Package, href: '#merch' },
    { name: 'Contact', icon: Search, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              BITS PILANI,<span className="text-accent"> Dubai</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-accent hover:text-secondary hover:bg-accent/10 transition-colors font-semibold text-base group"
                style={{ textDecoration: 'none' }}
              >
                <item.icon className="w-5 h-5 group-hover:text-secondary" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="interactive p-2 text-accent hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <button className="interactive relative p-2 text-accent hover:text-secondary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="interactive p-2 text-accent hover:text-secondary transition-colors">
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden interactive p-2 text-accent hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray/90 backdrop-blur-md border-t border-accent/30 animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 text-accent hover:text-secondary transition-colors interactive"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wider">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
