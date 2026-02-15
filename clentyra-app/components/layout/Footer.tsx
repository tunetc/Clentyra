import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

const Footer = () => {
  const footerSections = [
    {
      title: 'Можливості',
      links: ['Клієнти та компанії', 'Проєкти та завдання', 'Фінанси', 'Ролі та доступи', 'Безпека даних'],
    },
    {
      title: 'Компанія',
      links: ['Про нас', 'Тарифи', 'FAQ', 'Підтримка', 'Блог / Оновлення'],
    },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Колонка 1: Лого та опис */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="text-2xl font-bold text-[#7B92FF]">Clentyra</span>
            </Link>
            <p className="text-[#1A1C46] text-sm leading-relaxed">
              CRM-система для керування клієнтами, проєктами та фінансами в одному місці.
            </p>
            <Button variant="primary">Спробувати безкоштовно</Button>
          </div>

          {/* Колонки 2 та 3: Навігація */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-[#1A1C46] mb-6">{section.title}</h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-[#7B92FF] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Колонка 4: Контакти та соцмережі */}
          <div>
            <h3 className="font-bold text-[#1A1C46] mb-6">Контакти</h3>
            <div className="flex flex-col gap-4 mb-6">
              <Link href="mailto:support@clentyra.com" className="text-gray-600">Email підтримки</Link>
              <Link href="tel:+380000000000" className="text-gray-600">Номер телефону</Link>
              <button className="border border-[#1A1C46] rounded-xl py-2 px-4 text-[#1A1C46] hover:bg-gray-50 transition-all text-center">
                Зв’язатися з нами
              </button>
            </div>
            {/* Соціальні мережі (іконки можна взяти з lucide-react або як SVG) */}
            <div className="flex gap-4">
               {/* Сюди додайте іконки LinkedIn, Facebook, Telegram, Instagram */}
               <div className="w-8 h-8 bg-[#1A1C46] rounded-full flex items-center justify-center text-white">in</div>
               <div className="w-8 h-8 bg-[#1A1C46] rounded-full flex items-center justify-center text-white">f</div>
            </div>
          </div>
        </div>

        {/* Нижня частина */}
        <div className="border-t border-[#7B92FF]/30 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Clentyra. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;