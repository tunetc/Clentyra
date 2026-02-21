import { ChevronLeft, ChevronRight, Users, Briefcase, Building2 } from "lucide-react";
import { ClientCard } from "../ui/ClientCard";

export const OurClients = () => {
  return (
    <section className="py-24 bg-[#7692FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Кому підходить наша CRM
        </h2>
        <p className="text-white/90 mb-16 max-w-2xl mx-auto">
          CRM створена для команд і бізнесів, яким важливо навести порядок у клієнтах, задачах та фінансах — без складних налаштувань
        </p>

        {/* Контейнер слайдера */}
        <div className="relative flex items-center justify-center gap-4 mb-16">
          {/* Кнопка вліво */}
          <button className="absolute left-0 z-20 p-4 bg-orange-400 rounded-full text-white shadow-lg hover:bg-orange-500 transition-colors hidden md:block">
            <ChevronLeft size={32} />
          </button>

          {/* Картки (спрощена версія для прикладу) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <ClientCard 
              icon={<Users size={40} />}
              title="Команди продажів"
              description="Біль: губляться клієнти, немає прозорої історії взаємодії. Уся комунікація в єдиній системі."
            />
            <ClientCard 
              isMain
              icon={<Briefcase size={40} />}
              title="Малий та середній бізнес"
              description="Кому: ФОП, невеликі компанії. Біль: хаос у таблицях, відсутність контролю."
            />
            <ClientCard 
              icon={<Building2 size={40} />}
              title="Проєктні команди"
              description="Дозволяє керувати проєктами та задачами без перевантажених інструментів."
            />
          </div>

          {/* Кнопка вправо */}
          <button className="absolute right-0 z-20 p-4 bg-orange-400 rounded-full text-white shadow-lg hover:bg-orange-500 transition-colors hidden md:block">
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="text-center">
          <p className="text-white mb-6">Не знайшли свій кейс? CRM легко адаптується під ваш бізнес</p>
          <button className="px-10 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-[#7692FF] transition-all">
            Дізнатися більше
          </button>
        </div>
      </div>
    </section>
  );
};