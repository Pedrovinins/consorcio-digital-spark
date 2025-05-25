
import { useState, useEffect } from 'react';
import { ChevronDown, Check, Star, Shield, Users, TrendingUp, Zap, Award, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "🏆 Como construir sua autoridade no mercado",
    "🚀 Como captar e qualificar clientes todos os dias",
    "💰 Como aplicar o roteiro de vendas de milhões",
    "🔥 Como transformar objeções em vendas",
    "🎯 Como bater metas e criar uma renda que te permite viver com liberdade"
  ];

  const results = [
    "Atrair, qualificar e fechar vendas com segurança",
    "Construir um negócio sem estoque, sem funcionários e com baixíssimo risco",
    "Trabalhar de onde quiser, gerar sua própria renda",
    "Se tornar um especialista reconhecido",
    "Ajudar pessoas a realizarem sonhos e construir seu próprio patrimônio",
    "Escalar suas vendas e transformar sua vida financeira"
  ];

  const modules = [
    "Fundamentos do Consórcio",
    "Domínio Técnico – Veículos, Imóveis, Serviços e Rural",
    "Posicionamento Digital — Instagram, Conteúdo e Atração",
    "Venda Consultiva — O roteiro comprovado",
    "Captação de Leads — Orgânico e tráfego pago",
    "Gestão de pipeline, follow-up e fechamento inteligente",
    "Como bater metas diárias, semanais e mensais",
    "Plano de Ação para construir sua carreira milionária"
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Eu não sabia nada de consórcio e hoje já fechei minhas primeiras vendas.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Esse desafio me deu uma nova vida.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Nunca imaginei construir uma nova carreira, e consegui.",
      rating: 5
    }
  ];

  const bonuses = [
    "Aula de Tráfego Pago Simples",
    "Planilha de Gestão de Leads + CRM Completo",
    "Biblioteca de Scripts e Copy para WhatsApp",
    "Templates de Posts, Vídeos e Stories para Instagram",
    "Treinamento: Como Fazer sua Primeira Venda em até 7 dias"
  ];

  const faqs = [
    {
      question: "Preciso ter experiência prévia em vendas?",
      answer: "Não! O desafio foi criado para transformar qualquer pessoa, desde iniciantes até quem já tem experiência, em vendedores profissionais de consórcio."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Recomendamos de 1 a 2 horas diárias para absorver todo o conteúdo e aplicar as estratégias ensinadas."
    },
    {
      question: "Funciona para qualquer região do Brasil?",
      answer: "Sim! As estratégias funcionam em todo território nacional, adaptando-se às particularidades de cada região."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem fazer perguntas."
    }
  ];

  const CTAButton = ({ className = "", children = "QUERO ME INSCREVER AGORA" }) => (
    <Button 
      className={`
        bg-gradient-to-r from-neon-green to-electric-blue
        hover:from-electric-blue hover:to-neon-green
        text-black font-bold py-4 px-8 rounded-2xl
        transform transition-all duration-300
        hover:scale-105 hover:shadow-neon
        animate-pulse-glow
        text-lg md:text-xl
        ${className}
      `}
    >
      {children}
    </Button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
            Desafio Vendedor Milhões
          </div>
          <CTAButton className="hidden md:block" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 scroll-animate">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className={`text-4xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-neon-green via-electric-blue to-neon-green bg-clip-text text-transparent animate-gradient">
                O DESAFIO QUE TRANSFORMA
              </span>
              <br />
              <span className="text-white">
                QUALQUER PESSOA EM UM
              </span>
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                VENDEDOR DE CONSÓRCIO DE MILHÕES
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 text-gray-300 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Em 30 dias, você aprende a gerar vendas todos os dias, com método, segurança e sem ser um vendedor chato.
            </p>

            <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
              <CTAButton className="text-2xl py-6 px-12" />
            </div>

            <div className={`inline-flex items-center bg-red-600/20 backdrop-blur-md border border-red-500 rounded-2xl px-6 py-3 transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-red-400 mr-2">⚠</span>
              <span className="text-red-300 font-semibold">Vagas Extremamente Limitadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Oportunidade */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700 rounded-3xl shadow-glass">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Se você é corretor de seguros, corretor de imóveis, vendedor, representante comercial ou alguém que busca uma nova fonte de renda — 
                <span className="text-neon-green font-bold"> essa é sua chance de dominar a profissão que muda vidas.</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefícios Diretos */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
              Você SAI do desafio sabendo:
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900/30 backdrop-blur-md border-gray-700 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <p className="text-lg text-gray-200">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resultado Final */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-green-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-pulse-glow">
            AO FINAL DOS 30 DIAS, VOCÊ SERÁ CAPAZ DE:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-gray-600 rounded-3xl shadow-glass hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Check className="text-neon-green mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-200">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-20 bg-blue-900/20 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
              O QUE VOCÊ VAI APRENDER
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gray-900/40 backdrop-blur-md border-blue-500/30 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-electric-blue mb-3">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{module}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
              O QUE NOSSOS ALUNOS DIZEM
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 backdrop-blur-md border-gray-700 rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-neon-green font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-blue-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
              🎁 BÔNUS EXCLUSIVOS
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-neon-green/30 rounded-3xl shadow-glass hover:shadow-neon transition-all duration-300 transform hover:scale-105 animate-glow">
                <CardContent className="p-6">
                  <div className="text-neon-green mb-3">
                    <Award size={32} />
                  </div>
                  <p className="text-white font-semibold">{bonus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-gray-900/50 backdrop-blur-md border-neon-green rounded-3xl shadow-neon max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="mb-8">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  🔥 Melhor Custo-benefício do Mercado
                </span>
              </div>
              
              <div className="text-6xl md:text-8xl font-bold mb-4 animate-pulse-glow">
                <span className="line-through text-gray-500 text-3xl">R$ 497</span>
                <br />
                <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                  R$ 274,90
                </span>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                ou 12x de R$ 27,90
              </p>
              
              <CTAButton className="text-2xl py-6 px-16" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quem é Rodrigo Namoá */}
      <section className="py-20 bg-gray-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-neon-green to-electric-blue p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Users size={80} className="text-neon-green" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                Quem é Rodrigo Namoá
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Sou mentor de vendedores de consórcio, com mais de 13 anos de experiência. 
              Já formei centenas de vendedores espalhados pelo Brasil. 
              Minha missão é transformar qualquer pessoa — de iniciante a especialista — 
              em um vendedor de milhões.
            </p>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-green-900/30 backdrop-blur-md border-neon-green rounded-3xl shadow-neon max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Shield size={64} className="text-neon-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">7 Dias de Garantia Incondicional</h3>
              <p className="text-gray-300">
                Se não for pra você, devolvemos 100% do seu dinheiro. 
                Sem burocracia, sem perguntas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900/50 backdrop-blur-md border-gray-700 rounded-2xl px-6">
                  <AccordionTrigger className="text-white hover:text-neon-green">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50 backdrop-blur-md border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
            Desafio Vendedor Milhões
          </div>
          <div className="flex justify-center space-x-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-neon-green transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-neon-green transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-neon-green transition-colors">Contato</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800 p-4">
        <CTAButton className="w-full" />
      </div>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5511999999999" 
        className="fixed bottom-20 right-4 md:bottom-8 z-50 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="text-white" size={24} />
      </a>
    </div>
  );
};

export default Index;
