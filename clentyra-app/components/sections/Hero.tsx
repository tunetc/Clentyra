import Image from "next/image"; // Обов'язково за ТЗ
import { Button } from "../ui/Button"; // Ваш UI компонент

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-[#7692FF]">
      {/* Фонова картинка (та, що розмита на задньому плані) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.svg" 
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Контентна частина */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Заголовок та опис */}
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            CRM для керування клієнтами, проєктами <br className="hidden md:block" />
            та фінансами в одній системі
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
            Організація робочого простору, панель аналітики даних, воронка продажу, 
            автоматизація бізнес-процесів, завдання та контроль за ефективністю команди.
          </p>
          
          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white rounded-xl font-medium hover:bg-black transition-all shadow-xl">
              Замовити демо
            </button>
            <Button variant="primary">
              Спробувати безкоштовно
            </Button>
          </div>
          
          <p className="text-white/80 text-sm font-medium italic mb-16">
            Українська CRM для українського бізнесу
          </p>
        </div>

        {/* ЦЕНТРАЛЬНИЙ ВІЗУАЛ (ВАША ФОТКА) */}
        <div className="relative mx-auto max-w-[1100px] w-full transition-transform duration-700 hover:scale-[1.02]">
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20">
            <Image 
              src="/Visual.svg" // Назва вашого файлу в папці public
              alt="Clentyra Interface Preview"
              width={1357}
              height={716}
              layout="responsive"
              priority
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};