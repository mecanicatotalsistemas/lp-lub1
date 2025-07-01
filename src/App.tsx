import React, { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  Users, 
  Zap, 
  Shield, 
  BookOpen, 
  Brain,
  Calculator,
  Award,
  Clock,
  ArrowRight,
  Star,
  Target
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(59 * 60); // 59 minutes in seconds

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const courseFeatures = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Curso Completo de Lubrificação Industrial com linguagem prática, exemplos reais e foco na aplicação técnica."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Acesso Vitalício: estude no seu ritmo, sem pressa."
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Certificado Reconhecido com validade em todo o território nacional."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "IA LubrIA: sua assistente inteligente, pronta para tirar dúvidas, gerar planos e te ajudar 24h."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      text: "Planilha Automática de Cálculo de Quantidade de Graxa."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Conteúdo sempre atualizado com novas aulas e recursos."
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Didática clara, direto ao ponto, voltado para técnicos e engenheiros."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Suporte técnico direto para dúvidas com especialistas."
    }
  ];

  const targetAudience = [
    "Técnicos de manutenção",
    "Engenheiros mecânicos, de produção ou industriais", 
    "Profissionais que atuam com rolamentos, redutores, motores e bombas",
    "Estudantes e estagiários que querem se destacar",
    "Supervisores e encarregados de PCM e confiabilidade"
  ];

  const testimonials = [
    {
      text: "A IA LubrIA já me ajudou a evitar falhas em equipamentos críticos! O curso é muito prático e aplicável no dia a dia.",
      name: "Carlos Eduardo Silva",
      position: "Técnico de Manutenção Industrial"
    },
    {
      text: "O curso é direto, sem enrolação. Muito melhor que faculdade! Aprendi mais em algumas semanas do que em anos de teoria.",
      name: "Ana Paula Santos",
      position: "Engenheira Mecânica"
    },
    {
      text: "A planilha economizou horas da minha equipe! Agora conseguimos calcular a quantidade de graxa com precisão e rapidez.",
      name: "Roberto Oliveira",
      position: "Supervisor de PCM"
    }
  ];

  const handleCTAClick = () => {
    // Track Facebook Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    
    // Open the Hotmart checkout page
    window.open('https://pay.hotmart.com/W94555852I?checkoutMode=10&bid=1750519719612', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header with Logo */}
      <header className="relative z-20 p-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <img 
              src="/LOGO SEM FUNDO.png" 
              alt="Mecânica Total" 
              className="h-12 w-auto"
            />
            <div className="text-white">
              <h3 className="font-bold text-lg">Mecânica Total</h3>
              <p className="text-sm text-gray-300">CNPJ: 29.705.491/0001-58</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        
        <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Curso + IA + Planilha
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Torne-se um <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Especialista</span> em Lubrificação Industrial
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Curso completo + Inteligência Artificial exclusiva + Planilha automática de cálculo de graxa.<br/>
            <span className="text-blue-300 font-semibold">Tudo o que você precisa para dominar a lubrificação com segurança e precisão.</span>
          </p>

          <p className="text-gray-400 mt-4 text-sm">
            🔥 Bônus por tempo limitado incluído
          </p>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🧠 O que você vai encontrar no <span className="text-blue-400">Expert Lubrificação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courseFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📈 Para quem é esse curso?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-600 hover:border-green-500/50 transition-all duration-300"
              >
                <Users className="w-8 h-8 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials and Guarantee Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🎓 Depoimentos e Garantia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-slate-900/50 rounded-2xl border border-slate-700 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-blue-400 text-sm font-medium">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl border-2 border-green-500/50">
              <Shield className="w-12 h-12 text-green-400" />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Garantia de 7 dias</h3>
                <p className="text-gray-300 text-lg">Você testa, e se não gostar, recebe o dinheiro de volta. Simples assim!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-green-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            👉 Garanta agora seu acesso vitalício ao Expert Lubrificação
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            🔥 Bônus por tempo limitado: atualizações vitalícias + acesso à IA LubrIA
          </p>

          <button
            onClick={handleCTAClick}
            className="relative overflow-hidden bg-white text-blue-900 px-12 py-6 rounded-full text-xl font-bold shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-white/50 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute inset-0 bg-blue-500/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
            <span className="relative flex items-center gap-3">
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              Começar Agora - Acesso Imediato
            </span>
          </button>
        </div>
      </section>

      {/* Footer with Company Info */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/LOGO SEM FUNDO.png" 
              alt="Mecânica Total" 
              className="h-10 w-auto"
            />
            <div className="text-white">
              <h3 className="font-bold text-lg">Mecânica Total</h3>
              <p className="text-sm text-gray-400">CNPJ: 29.705.491/0001-58</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Mecânica Total. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Expert Lubrificação - Curso de Lubrificação Industrial
          </p>
        </div>
      </footer>

      {/* Sticky Bottom CTA with Countdown */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-green-600 p-4 shadow-2xl z-50 border-t border-blue-400/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-white">
            <p className="font-bold text-lg">Expert Lubrificação</p>
            <p className="text-blue-100 text-sm">Acesso vitalício + IA LubrIA + Planilha</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-4 h-4 text-red-300" />
              <span className="text-red-300 font-bold text-sm">
                Oferta expira em: {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          <button
            onClick={handleCTAClick}
            className="bg-red-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer animate-pulse"
          >
            <ArrowRight className="w-5 h-5" />
            Garantir Vaga
          </button>
        </div>
      </div>

      {/* Bottom padding to account for sticky CTA */}
      <div className="h-20"></div>
    </div>
  );
}

export default App;