import { useState, useEffect } from 'react';
import { ChevronDown, Check, Star, Shield, Users, TrendingUp, Zap, Award, Clock, Phone, Play, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const benefits = [
    {
      icon: "🏆",
      title: "Autoridade no Mercado",
      description: "Como construir sua autoridade e se posicionar como especialista"
    },
    {
      icon: "🚀",
      title: "Captação Diária",
      description: "Como captar e qualificar clientes todos os dias"
    },
    {
      icon: "💰",
      title: "Roteiro de Vendas",
      description: "Como aplicar o roteiro de vendas de milhões"
    },
    {
      icon: "🔥",
      title: "Transformar Objeções",
      description: "Como transformar objeções em vendas"
    },
    {
      icon: "🎯",
      title: "Liberdade Financeira",
      description: "Como bater metas e criar uma renda que te permite viver com liberdade"
    }
  ];

  const results = [
    {
      title: "Atrair e Fechar Vendas",
      description: "Atrair, qualificar e fechar vendas com segurança e método comprovado"
    },
    {
      title: "Negócio Sem Riscos",
      description: "Construir um negócio sem estoque, sem funcionários e com baixíssimo risco"
    },
    {
      title: "Trabalho Remoto",
      description: "Trabalhar de onde quiser, gerar sua própria renda"
    },
    {
      title: "Especialista Reconhecido",
      description: "Se tornar um especialista reconhecido no mercado"
    },
    {
      title: "Impacto Social",
      description: "Ajudar pessoas a realizarem sonhos e construir seu próprio patrimônio"
    },
    {
      title: "Escalabilidade",
      description: "Escalar suas vendas e transformar sua vida financeira"
    }
  ];

  const modules = [
    {
      number: "01",
      title: "Fundamentos do Consórcio",
      description: "Base sólida para entender o mercado"
    },
    {
      number: "02",
      title: "Domínio Técnico",
      description: "Veículos, Imóveis, Serviços e Rural"
    },
    {
      number: "03",
      title: "Posicionamento Digital",
      description: "Instagram, Conteúdo e Atração"
    },
    {
      number: "04",
      title: "Venda Consultiva",
      description: "O roteiro comprovado de vendas"
    },
    {
      number: "05",
      title: "Captação de Leads",
      description: "Orgânico e tráfego pago"
    },
    {
      number: "06",
      title: "Gestão de Pipeline",
      description: "Follow-up e fechamento inteligente"
    },
    {
      number: "07",
      title: "Batimento de Metas",
      description: "Metas diárias, semanais e mensais"
    },
    {
      number: "08",
      title: "Plano de Ação",
      description: "Construir sua carreira milionária"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Ex-vendedora de seguros",
      text: "Eu não sabia nada de consórcio e hoje já fechei minhas primeiras vendas. O método do Rodrigo é simplesmente incrível!",
      rating: 5,
      result: "3 vendas na primeira semana"
    },
    {
      name: "João Santos", 
      role: "Corretor de imóveis",
      text: "Esse desafio me deu uma nova vida. Agora tenho uma fonte de renda extra que já supera meu salário principal.",
      rating: 5,
      result: "R$ 15.000 no primeiro mês"
    },
    {
      name: "Ana Costa",
      role: "Representante comercial",
      text: "Nunca imaginei construir uma nova carreira, e consegui. O suporte e o método são excepcionais.",
      rating: 5,
      result: "Mudança completa de vida"
    }
  ];

  const bonuses = [
    {
      icon: TrendingUp,
      title: "Aula de Tráfego Pago Simples",
      value: "R$ 497",
      description: "Aprenda a gerar leads qualificados com investimento mínimo"
    },
    {
      icon: Users,
      title: "Planilha de Gestão + CRM Completo", 
      value: "R$ 297",
      description: "Sistema completo para organizar seus leads e vendas"
    },
    {
      icon: Phone,
      title: "Biblioteca de Scripts WhatsApp",
      value: "R$ 197",
      description: "Templates prontos para cada etapa da venda"
    },
    {
      icon: Sparkles,
      title: "Templates Instagram Completos",
      value: "R$ 397",
      description: "Posts, vídeos e stories para posicionamento"
    },
    {
      icon: Zap,
      title: "Primeira Venda em 7 dias",
      value: "R$ 697",
      description: "Método acelerado para seu primeiro resultado"
    }
  ];

  const faqs = [
    {
      question: "Preciso ter experiência prévia em vendas?",
      answer: "Não! O desafio foi criado para transformar qualquer pessoa, desde iniciantes até quem já tem experiência, em vendedores profissionais de consórcio. Nossa metodologia é step-by-step e funciona mesmo para quem nunca vendeu nada."
    },
    {
      question: "Quanto tempo preciso dedicar por dia?",
      answer: "Recomendamos de 1 a 2 horas diárias para absorver todo o conteúdo e aplicar as estratégias ensinadas. O curso é flexível e você pode estudar no seu ritmo."
    },
    {
      question: "Funciona para qualquer região do Brasil?",
      answer: "Sim! As estratégias funcionam em todo território nacional, adaptando-se às particularidades de cada região. Temos alunos de Norte a Sul do país com excelentes resultados."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias de garantia incondicional. Se não gostar ou achar que não é para você, devolvemos 100% do seu dinheiro sem fazer perguntas. Sem burocracia, sem complicação."
    },
    {
      question: "Vou ter suporte durante o desafio?",
      answer: "Sim! Você terá acesso a um grupo exclusivo no Telegram com suporte direto e uma comunidade ativa de alunos e mentores para tirar dúvidas e trocar experiências."
    }
  ];

  const CTAButton = ({ className = "", children = "QUERO ME INSCREVER AGORA", size = "default" }) => (
    <Button 
      className={`
        bg-gradient-to-r from-neon-green to-electric-blue
        hover:from-electric-blue hover:to-neon-green
        text-black font-bold rounded-2xl
        transform transition-all duration-300
        hover:scale-105 hover:shadow-neon
        animate-pulse-glow
        ${size === 'large' ? 'text-xl md:text-2xl py-6 px-12' : 'text-lg md:text-xl py-4 px-8'}
        ${className}
      `}
    >
      {children}
      <ArrowRight className="ml-2" size={20} />
    </Button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Header Fixo Melhorado */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
            Desafio Vendedor Milhões
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm text-gray-300">⏰ Oferta por tempo limitado</span>
            <CTAButton />
          </div>
        </div>
      </header>

      {/* Hero Section Melhorado */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 scroll-animate">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-electric-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Badge de urgência */}
            <div className={`inline-flex items-center bg-red-600/20 backdrop-blur-md border border-red-500 rounded-full px-6 py-2 mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-red-400 mr-2 animate-pulse">🔥</span>
              <span className="text-red-300 font-semibold text-sm">Últimas vagas disponíveis</span>
            </div>

            <h1 className={`text-4xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-neon-green via-electric-blue to-neon-green bg-clip-text text-transparent animate-gradient">
                O DESAFIO QUE TRANSFORMA
              </span>
              <br />
              <span className="text-white">
                QUALQUER PESSOA EM UM
              </span>
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                VENDEDOR DE CONSÓRCIO
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                DE MILHÕES
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Em 30 dias, você aprende a gerar vendas todos os dias, com método comprovado, segurança total e sem ser um vendedor chato.
            </p>

            {/* Elementos de credibilidade */}
            <div className={`flex flex-wrap justify-center items-center gap-8 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current" size={20} />
                ))}
                <span className="ml-2 text-white">4.9/5 (500+ alunos)</span>
              </div>
              <div className="flex items-center text-neon-green">
                <Users size={20} className="mr-2" />
                <span>+2.000 vendedores formados</span>
              </div>
            </div>

            <div className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
              <CTAButton size="large" />
              <p className="text-gray-400 text-sm mt-4">✅ Acesso imediato • 🛡️ 7 dias de garantia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Oportunidade Melhorada */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-gray-900/50 to-blue-900/30 backdrop-blur-md border-gray-700 rounded-3xl shadow-glass max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Uma Oportunidade Única Para Sua Vida
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Se você é <span className="text-neon-green font-bold">corretor de seguros</span>, <span className="text-electric-blue font-bold">corretor de imóveis</span>, 
                <span className="text-neon-green font-bold"> vendedor</span>, <span className="text-electric-blue font-bold">representante comercial</span> ou 
                <span className="text-neon-green font-bold"> alguém que busca uma nova fonte de renda</span> — 
                essa é sua chance de dominar a profissão que muda vidas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefícios Diretos Melhorados */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                Você SAI do desafio sabendo:
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cada módulo foi desenhado para transformar você em um especialista
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group bg-gray-900/30 backdrop-blur-md border-gray-700 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resultado Final Melhorado */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-green-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse-glow">
              AO FINAL DOS 30 DIAS,
              <br />
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                VOCÊ SERÁ CAPAZ DE:
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {results.map((result, index) => (
              <Card key={index} className="group bg-white/10 backdrop-blur-md border-gray-600 rounded-3xl shadow-glass hover:shadow-neon transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-neon-green rounded-full p-2 mt-1 group-hover:scale-110 transition-transform">
                      <Check className="text-black" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender Melhorado */}
      <section className="py-20 bg-blue-900/20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                O QUE VOCÊ VAI APRENDER
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              8 módulos completos para sua transformação profissional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {modules.map((module, index) => (
              <Card key={index} className="group bg-gray-900/40 backdrop-blur-md border-blue-500/30 rounded-3xl shadow-glass hover:shadow-glow-blue transition-all duration-500 transform hover:scale-105 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-electric-blue mb-4 font-bold text-2xl group-hover:text-neon-green transition-colors">
                    {module.number}
                  </div>
                  <div className="text-electric-blue mb-4 group-hover:scale-110 transition-transform">
                    <Zap size={32} className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-neon-green transition-colors leading-tight">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Melhorados */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                RESULTADOS REAIS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Veja o que nossos alunos estão dizendo
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-md border-gray-700 rounded-3xl shadow-glass">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={24} />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-neon-green/20 to-electric-blue/20 backdrop-blur-md rounded-2xl p-6 mb-6">
                    <p className="text-neon-green font-bold text-lg">
                      📈 {testimonials[activeTestimonial].result}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-neon-green font-bold text-xl">
                      — {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Indicadores */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-neon-green shadow-glow' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Melhorados */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-blue-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                🎁 BÔNUS EXCLUSIVOS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mais de R$ 2.000 em bônus para acelerar seus resultados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="group bg-white/10 backdrop-blur-md border-neon-green/30 rounded-3xl shadow-glass hover:shadow-neon transition-all duration-500 transform hover:scale-105 animate-glow">
                <CardContent className="p-8 text-center">
                  <div className="bg-neon-green/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <bonus.icon className="text-neon-green w-full h-full" />
                  </div>
                  
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    Valor: {bonus.value}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Melhorada */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                OFERTA ESPECIAL
              </span>
            </h2>
            
            <Card className="bg-gray-900/50 backdrop-blur-md border-neon-green rounded-3xl shadow-neon max-w-2xl mx-auto mb-8">
              <CardContent className="p-12">
                <div className="mb-8">
                  <span className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">
                    🔥 Últimas Horas - 45% OFF
                  </span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-lg mb-2">Valor total dos bônus:</p>
                  <p className="text-2xl text-gray-500 line-through">R$ 2.085</p>
                </div>
                
                <div className="text-6xl md:text-8xl font-bold mb-6 animate-pulse-glow">
                  <span className="line-through text-gray-500 text-3xl block">De R$ 497</span>
                  <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                    R$ 274,90
                  </span>
                </div>
                
                <p className="text-2xl text-gray-300 mb-8">
                  ou 12x de <span className="text-neon-green font-bold">R$ 27,90</span>
                </p>
                
                <CTAButton size="large" className="w-full md:w-auto text-2xl py-8 px-16" />
                
                <div className="mt-6 text-gray-400">
                  <p>✅ Acesso vitalício ao conteúdo</p>
                  <p>✅ Certificado de conclusão</p>
                  <p>✅ Suporte no Telegram</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Timer de urgência */}
            <div className="bg-red-600/20 backdrop-blur-md border border-red-500 rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-red-300 font-bold">⏰ Oferta expira em:</p>
              <div className="text-2xl font-bold text-white mt-2">
                23:45:12
              </div>
            </div>
          </div>
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

      {/* Garantia Melhorada */}
      <section className="py-20 scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-green-900/30 backdrop-blur-md border-neon-green rounded-3xl shadow-neon max-w-3xl mx-auto">
            <CardContent className="p-12">
              <div className="bg-neon-green/20 rounded-full p-6 w-24 h-24 mx-auto mb-8">
                <Shield size={48} className="text-neon-green mx-auto" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">
                Garantia Incondicional de 7 Dias
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Se você não ficar 100% satisfeito com o conteúdo, devolvemos todo seu dinheiro. 
                Sem perguntas, sem burocracia, sem complicação.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <p className="text-neon-green font-bold text-lg">
                  💡 Isso significa que você pode testar todo o método por 7 dias 
                  <br />
                  com ZERO risco!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Melhorado */}
      <section className="py-20 bg-gray-900/30 scroll-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tire todas suas dúvidas antes de começar sua transformação
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900/50 backdrop-blur-md border-gray-700 rounded-2xl px-6 hover:shadow-glow-blue transition-all duration-300">
                  <AccordionTrigger className="text-white hover:text-neon-green py-6 text-left">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 scroll-animate">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                SUA TRANSFORMAÇÃO
                <br />
                COMEÇA AGORA!
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Não deixe essa oportunidade passar. Milhares de pessoas já transformaram suas vidas. 
              <br />
              <span className="text-neon-green font-bold">Agora é sua vez!</span>
            </p>
            
            <CTAButton size="large" className="text-2xl py-8 px-16 mb-8" />
            
            <p className="text-gray-400">
              ⚡ Últimas vagas • 🔒 Pagamento 100% seguro • 🛡️ 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      {/* Footer Melhorado */}
      <footer className="py-12 bg-black/70 backdrop-blur-md border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
                Desafio Vendedor Milhões
              </div>
              <p className="text-gray-400">
                Transformando vidas através da venda de consórcio
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Links Importantes</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-neon-green transition-colors">Termos de Uso</a>
                <a href="#" className="block text-gray-400 hover:text-neon-green transition-colors">Política de Privacidade</a>
                <a href="#" className="block text-gray-400 hover:text-neon-green transition-colors">Contato</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="text-gray-400 mb-2">📧 contato@desafiovendedormilhoes.com</p>
              <p className="text-gray-400">📱 (11) 99999-9999</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Desafio Vendedor Milhões. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800 p-4">
        <CTAButton className="w-full" />
      </div>

      {/* WhatsApp Float Button Melhorado */}
      <a 
        href="https://wa.me/5511999999999" 
        className="fixed bottom-20 right-4 md:bottom-8 z-50 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-110 animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="text-white" size={24} />
      </a>
    </div>
  );
};

export default Index;
