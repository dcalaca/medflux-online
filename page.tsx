import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Calendar, FileText, DollarSign, Shield } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Gestão de Pacientes",
      description: "Controle completo dos dados dos seus pacientes com segurança e praticidade.",
    },
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Organize sua agenda com sistema de cores, lembretes e confirmações automáticas.",
    },
    {
      icon: FileText,
      title: "Prontuário Eletrônico",
      description: "Prontuários completos com histórico, anexos e evolução do paciente.",
    },
    {
      icon: DollarSign,
      title: "Controle Financeiro",
      description: "Acompanhe pagamentos, gere relatórios e controle sua receita em tempo real.",
    },
    {
      icon: Shield,
      title: "Segurança LGPD",
      description: "Total conformidade com a LGPD e máxima segurança dos dados médicos.",
    },
    {
      icon: Users,
      title: "Multi-usuário",
      description: "Permissões específicas para médicos, recepcionistas e pacientes.",
    },
  ]

  const plans = [
    {
      name: "MedFlux Completo",
      price: "R$ 149",
      period: "/mês",
      description: "Tudo que sua clínica precisa",
      features: [
        "Pacientes ilimitados",
        "Usuários ilimitados",
        "Agenda completa",
        "Prontuário eletrônico",
        "Controle financeiro",
        "Relatórios avançados",
        "Backup automático",
        "Suporte por email",
        "Sem taxa de setup",
        "Cancele quando quiser",
      ],
      popular: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Image src="/logo.png" alt="MedFlux" width={160} height={48} />
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/registro">Começar Grátis</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          O futuro da gestão
          <span className="text-blue-600"> médica</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Sistema completo para gestão de clínicas e consultórios. Controle pacientes, agenda, prontuários e financeiro
          em uma única plataforma.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/registro">Teste Grátis por 30 Dias</Link>
          </Button>
          <Button size="lg" variant="outline">
            Ver Demonstração
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa em um só lugar</h2>
          <p className="text-xl text-gray-600">Recursos pensados especialmente para profissionais da saúde</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planos que cabem no seu bolso</h2>
          <p className="text-xl text-gray-600">Escolha o plano ideal para o seu consultório</p>
        </div>

        <div className="grid justify-center max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative border-2 border-blue-500 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Plano Único - Tudo Incluído
                </span>
              </div>
              <CardHeader className="text-center pt-12">
                <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-xl">{plan.period}</span>
                </div>
                <CardDescription className="text-lg mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold">
                  Começar Agora - R$ 149/mês
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  ✅ Teste grátis por 30 dias • ✅ Sem cartão de crédito
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pronto para transformar sua clínica?</h2>
        <p className="text-xl text-gray-600 mb-8">Junte-se a centenas de médicos que já usam o MedFlux</p>
        <Button size="lg" asChild>
          <Link href="/registro">Começar Gratuitamente</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="MedFlux"
                width={160}
                height={48}
                className="mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400">Sistema completo de gestão clínica para profissionais da saúde.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Treinamentos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedFlux. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
