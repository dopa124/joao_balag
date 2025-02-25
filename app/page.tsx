import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Users, Mic, Gamepad, GraduationCap, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            João Balaguer
          </Link>
          <div className="space-x-4">
            <Link href="#sobre" className="text-gray-600 hover:text-gray-800">
              Sobre
            </Link>
            <Link href="#servicos" className="text-gray-600 hover:text-gray-800">
              Serviços
            </Link>
            <Link href="#contato" className="text-gray-600 hover:text-gray-800">
              Contato
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">João Balaguer</h1>
            <p className="text-xl text-gray-600 mb-8">Estudante de Psicologia & Terapeuta Aspirante</p>
            <Button asChild>
              <Link href="#contato">Entre em Contato</Link>
            </Button>
          </div>
        </section>

        <section id="sobre" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Mim</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jytjyt.jpg-lVcvkgS3Eu9hrbzgLyphz4v4pyaeoR.jpeg"
                  alt="João Balaguer"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 mb-4">
                  Como estudante de psicologia, dedico-me ao aprimoramento do potencial humano através de intervenções
                  terapêuticas baseadas em evidências. Meu trabalho concentra-se no desenvolvimento pessoal, habilidades
                  de liderança e na otimização da interação social.
                </p>
                <p className="text-gray-600 mb-4">
                  Utilizo técnicas fundamentadas na Terapia Cognitivo-Comportamental (TCC), combinadas com abordagens
                  inovadoras como a Terapia RPG, visando construir experiências de crescimento individualizadas e
                  eficazes.
                </p>
                <p className="text-gray-600">
                  Busco oportunidades de estágio em psicologia para consolidar minhas habilidades e contribuir
                  ativamente para o avanço da saúde mental e do desenvolvimento pessoal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meus Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Desenvolvimento Pessoal"
                description="Estratégias personalizadas para ajudar você a alcançar seus objetivos pessoais e melhorar o bem-estar geral."
                icon={<BookOpen className="h-6 w-6" />}
              />
              <ServiceCard
                title="Desenvolvimento de Liderança"
                description="Aprimore suas habilidades de liderança e aprenda a inspirar e orientar os outros de forma eficaz."
                icon={<Brain className="h-6 w-6" />}
              />
              <ServiceCard
                title="Habilidades de Oratória"
                description="Melhore suas habilidades de falar em público e comunique-se com confiança."
                icon={<Mic className="h-6 w-6" />}
              />
              <ServiceCard
                title="Terapia RPG"
                description="Terapia inovadora usando jogos de RPG para desenvolver habilidades sociais e capacidade de resolução de problemas."
                icon={<Gamepad className="h-6 w-6" />}
              />
              <ServiceCard
                title="Desenvolvimento de Habilidades Sociais"
                description="Aprenda a navegar em situações sociais com facilidade e construa relacionamentos significativos."
                icon={<Users className="h-6 w-6" />}
              />
              <ServiceCard
                title="Técnicas de TCC"
                description="Utilize ferramentas da Terapia Cognitivo-Comportamental para superar desafios e melhorar a saúde mental."
                icon={<GraduationCap className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Entre em Contato</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="Seu Telefone"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <textarea
                  placeholder="Sua Mensagem"
                  className="w-full p-2 border border-gray-300 rounded h-32"
                  required
                ></textarea>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
              <p className="mt-8 text-center text-gray-600">
                Ou me ligue diretamente:{" "}
                <a href="tel:+5521969880200" className="text-blue-600 hover:underline">
                  (21) 96988-0200
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/joao-victor-balaguer-3347b617b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@JoaoBalaguer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/joao_balagg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <p>&copy; 2025 João Balaguer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

