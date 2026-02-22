import Image from "next/image";
import { Button } from "../ui/Button";

export const SolvingProblems = () => {
  const points = [
    { problem: "Дані розкидані по різних інструментах", solution: "Усі клієнти, проєкти, завдання та фінанси зібрані в одній системі з єдиною логікою та структурою 👌" },
    { problem: "Відсутній контроль задач і проєктів", solution: "Чітка структура проєктів і задач, статуси, відповідальні та дедлайни — усе під контролем у реальному часі ⏳" },
    { problem: "Втрачається історія роботи з клієнтами", solution: "Повна історія роботи з клієнтом зберігається в його профілі: контакти, проєкти, завдання, фінанси ✅" },
    { problem: "Немає прозорої фінансової картини", solution: "Облік витрат і надходжень безпосередньо в CRM дозволяє бачити фінансову картину бізнесу в одному місці ✍️" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ЛІВА ЧАСТИНА: Проблеми та рішення */}
        <div className="space-y-8">
          {points.map((item, index) => (
            <div key={index} className="flex flex-col space-y-3">
              {/* Хмаринка проблеми (сіра) */}
              <div className="self-start bg-gray-100 rounded-2xl p-4 text-[#1A1C46] max-w-[80%] shadow-sm">
                <p className="text-sm font-medium">{item.problem}</p>
              </div>
              {/* Хмаринка рішення (блакитна) */}
              <div className="self-end bg-[#E8EFFF] rounded-2xl p-4 text-[#1A1C46] max-w-[85%] border border-[#7692FF]/20 shadow-md">
                <p className="text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ПРАВА ЧАСТИНА: Текст та Візуал */}
        <div className="flex flex-col text-center lg:text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7692FF] mb-6 leading-tight">
            З якими проблемами стикається бізнес щодня?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Наша CRM створена, щоб прибрати хаос у процесах, даних та комунікації команди
          </p>

          <div className="relative w-full aspect-[4/3] mb-10 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/Solving-problems.jpg" 
              alt="CRM Interface Solving Problems"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-4">
             <h3 className="text-xl font-semibold text-[#7692FF]">Хочете позбутися цих проблем у своєму бізнесі?</h3>
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <button className="px-8 py-3 bg-[#1A1C46] text-white rounded-xl font-medium hover:bg-black transition-all">
                  Замовити демо
                </button>
                <Button variant="primary">Спробувати CRM безкоштовно</Button>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};