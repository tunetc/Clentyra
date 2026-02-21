interface ClientCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isMain?: boolean;
}

export const ClientCard = ({ icon, title, description, isMain }: ClientCardProps) => {
  return (
    <div className={`p-8 rounded-2xl bg-white shadow-xl transition-all duration-300 
      ${isMain ? 'scale-105 z-10 border-2 border-[#7692FF]' : 'scale-95 opacity-80'}`}>
      <div className="text-[#7692FF] mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#1A1C46] mb-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};