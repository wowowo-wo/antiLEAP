import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'DETAIL', path: '/detail' },
    { name: 'VOICES', path: '/voices' },
    { name: 'REPORT', path: '/report' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'DOCUMENTS', path: '/documents' }
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-black border-b-4 border-accent px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white hover:text-accent transition-colors">
          東北大学の<span className="text-accent">大学院生支援制度改悪に反対する会</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-black tracking-widest hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;