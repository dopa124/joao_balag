document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")

  root.innerHTML = `
    <div class="flex flex-col min-h-screen">
      <header class="bg-white shadow-sm">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" class="text-2xl font-bold text-gray-800">João Balaguer</a>
          <div class="space-x-4">
            <a href="#sobre" class="text-gray-600 hover:text-gray-800">Sobre</a>
            <a href="#servicos" class="text-gray-600 hover:text-gray-800">Serviços</a>
            <a href="#contato" class="text-gray-600 hover:text-gray-800">Contato</a>
          </div>
        </nav>
      </header>

      <main class="flex-grow">
        <section class="bg-gradient-to-r from-purple-100 to-blue-100 py-20">
          <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">João Balaguer</h1>
            <p class="text-xl text-gray-600 mb-8">Estudante de Psicologia & Terapeuta Aspirante</p>
            <a href="#contato" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Entre em Contato
            </a>
          </div>
        </section>

        <section id="sobre" class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Sobre Mim</h2>
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="md:w-1/2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jytjyt.jpg-lVcvkgS3Eu9hrbzgLyphz4v4pyaeoR.jpeg"
                  alt="João Balaguer"
                  class="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div class="md:w-1/2">
                <p class="text-gray-600 mb-4">
                  Como estudante de psicologia, dedico-me ao aprimoramento do potencial humano através de intervenções terapêuticas baseadas em evidências. Meu trabalho concentra-se no desenvolvimento pessoal, habilidades de liderança e na otimização da interação social.
                </p>
                <p class="text-gray-600 mb-4">
                  Utilizo técnicas fundamentadas na Terapia Cognitivo-Comportamental (TCC), combinadas com abordagens inovadoras como a Terapia RPG, visando construir experiências de crescimento individualizadas e eficazes.
                </p>
                <p class="text-gray-600">
                  Busco oportunidades de estágio em psicologia para consolidar minhas habilidades e contribuir ativamente para o avanço da saúde mental e do desenvolvimento pessoal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" class="py-16 bg-gray-100">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Meus Serviços</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${[
                "Desenvolvimento Pessoal",
                "Desenvolvimento de Liderança",
                "Habilidades de Oratória",
                "Terapia RPG",
                "Desenvolvimento de Habilidades Sociais",
                "Técnicas de TCC",
              ]
                .map(
                  (service) => `
                <div class="bg-white rounded-lg shadow-md p-6">
                  <h3 class="text-xl font-semibold mb-2">${service}</h3>
                  <p class="text-gray-600">Descrição do serviço ${service}.</p>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </section>

        <section id="contato" class="py-16 bg-white">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Entre em Contato</h2>
            <div class="max-w-md mx-auto">
              <form class="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  class="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  class="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="Seu Telefone"
                  class="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <textarea
                  placeholder="Sua Mensagem"
                  class="w-full p-2 border border-gray-300 rounded h-32"
                  required
                ></textarea>
                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Enviar Mensagem
                </button>
              </form>
              <p class="mt-8 text-center text-gray-600">
                Ou me ligue diretamente: <a href="tel:+5521969880200" class="text-blue-600 hover:underline">(21) 96988-0200</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <div class="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/joao-victor-balaguer-3347b617b/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@JoaoBalaguer"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-red-500"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/joao_balagg/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-pink-500"
            >
              Instagram
            </a>
          </div>
          <p>&copy; 2025 João Balaguer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  `
})

