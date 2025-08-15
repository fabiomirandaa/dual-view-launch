import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Cadastre-se gratuitamente no programa de afiliados.",
    bgColor: "bg-gaming-pink"
  },
  {
    number: "2", 
    title: "Receba seu link exclusivo para divulgação.",
    bgColor: "bg-gaming-pink"
  },
  {
    number: "3",
    title: "Indique novos jogadores para a ZeroUm Bet.",
    bgColor: "bg-gaming-pink"
  },
  {
    number: "4",
    title: "Ganhe comissões a cada depósito ou aposta realizada.",
    bgColor: "bg-gaming-pink"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gaming-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gaming-text mb-8">
            Como Funciona?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-gaming-dark-light border-border p-6 text-center">
              <div className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto`}>
                {step.number}
              </div>
              <p className="text-gaming-text text-sm leading-relaxed">
                {step.title}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gaming-text-muted max-w-2xl mx-auto">
            <span className="text-gaming-pink">Política sobre 10 clientes por semana e uma vida larga semanal</span> - VIP5 até VIP8. Quanto mais você divulga, mais você ganha!
          </p>
        </div>
      </div>
    </section>
  );
};