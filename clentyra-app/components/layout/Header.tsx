import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

const Header = () => {
  const navLinks = [
    { name: 'CRM', href: '/crm' },
    { name: 'Ціни', href: '/pricing' },
    { name: 'Сервіси', href: '/services' },
    { name: 'Ресурси', href: '/resources' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Clentyra Logo" width={32} height={32} />
          <span className="text-2xl font-bold text-[#7B92FF]">Clentyra</span>
        </Link>

        {/* Навігація (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[#1A1C46] hover:text-[#7B92FF] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Кнопки дій */}
        <div className="flex items-center gap-4">
          <Button variant="primary">Спробувати безкоштовно</Button>
          <Button variant="outline">Увійти</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;