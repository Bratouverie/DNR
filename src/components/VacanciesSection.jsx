import VacancyCard from "./VacancyCard";
import { VACANCIES_DATA } from "@/lib/vacanciesData";

export default function VacanciesSection({ onApply }) {
  return (
    <section id="vacancies" className="py-24 sm:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm font-semibold tracking-widest uppercase">Вакансии</span>
          <h2 className="text-3xl sm:text-4xl font-inter font-black text-foreground mt-3 tracking-tight">
            Актуальные вакансии специалистов
          </h2>
          <p className="text-muted-foreground font-inter mt-4 max-w-xl mx-auto">
            Выберите направление, которое соответствует вашим навыкам и опыту
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VACANCIES_DATA.map((v) => (
            <VacancyCard key={v.id} vacancy={v} onApply={onApply} />
          ))}
        </div>
      </div>
    </section>
  );
}