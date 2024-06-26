import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Inserir as perguntas de matemática
  const questions = [
    {
      name: 'Matemática',
      title: 'Qual é o valor de π (pi) arredondado para duas casas decimais?',
      answer1: '3.14',
      answer2: '3.16',
      answer3: '3.18',
      correct: 1,
    },
    {
      name: 'Matemática',
      title: 'Qual é o volume de um cubo com aresta de comprimento 4 unidades?',
      answer1: '2',
      answer2: '16',
      answer3: '64',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Se x + 5 = 12, qual é o valor de x?',
      answer1: '1',
      answer2: '11',
      answer3: '7',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Qual é o valor de sen(45°)?',
      answer1: '0.5',
      answer2: '√2/2',
      answer3: '1',
      correct: 2,
    },
    {
      name: 'Matemática',
      title: 'Qual é a área de um círculo com raio de 6 metros?',
      answer1: '36π',
      answer2: '72π',
      answer3: '108π',
      correct: 1,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 12 ÷ 0?',
      answer1: '19',
      answer2: '21',
      answer3: 'Não Definido',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Quantos lados tem um dodecágono?',
      answer1: '6',
      answer2: '13',
      answer3: '12',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Qual é o logaritmo de 1?',
      answer1: '0',
      answer2: '1',
      answer3: 'Indefinido',
      correct: 1,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 15 + 23?',
      answer1: '37',
      answer2: '38',
      answer3: '39',
      correct: 2,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 2 * 9?',
      answer1: '16',
      answer2: '18',
      answer3: '20',
      correct: 2,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 25 ÷ 5?',
      answer1: '3',
      answer2: '4',
      answer3: '5',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 6 * 6?',
      answer1: '30',
      answer2: '36',
      answer3: '42',
      correct: 2,
    },
    {
      name: 'Matemática',
      title: 'Quanto é 2 elevado a 5ª potência?',
      answer1: '24',
      answer2: '28',
      answer3: '32',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 7 * 8?',
      answer1: '52',
      answer2: '54',
      answer3: '56',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Quanto é a raiz quadrada de 144?',
      answer1: '10',
      answer2: '12',
      answer3: '14',
      correct: 2,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 38 + 17?',
      answer1: '55',
      answer2: '56',
      answer3: '57',
      correct: 1,
    },
    {
      name: 'Matemática',
      title: 'Quanto é 4 elevado a 3ª potência?',
      answer1: '32',
      answer2: '64',
      answer3: '128',
      correct: 2,
    },
    {
      name: 'Matemática',
      title: 'Qual é o resultado de 19 - 9?',
      answer1: '8',
      answer2: '9',
      answer3: '10',
      correct: 3,
    },
    {
      name: 'Matemática',
      title: 'Quanto é a raiz quadrada de 225?',
      answer1: '15',
      answer2: '20',
      answer3: '25',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Qual é o plural de "mouse"?',
      answer1: 'Mouses',
      answer2: 'Mices',
      answer3: 'Mice',
      correct: 3,
    },
    {
      name: 'Inglês',
      title: 'Qual é o antônimo de "happy"?',
      answer1: 'Sad',
      answer2: 'Joyful',
      answer3: 'Content',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Qual é o passado simples do verbo "buy"?',
      answer1: 'Bought',
      answer2: 'Buyed',
      answer3: 'Buied',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Como se escreve "bola" em inglês?',
      answer1: 'Ball',
      answer2: 'Bowl',
      answer3: 'Bal',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Qual é o presente contínuo do verbo "to eat"?',
      answer1: 'Eating',
      answer2: 'Eatting',
      answer3: 'Ate',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Qual é o plural de "woman"?',
      answer1: 'Womans',
      answer2: 'Womens',
      answer3: 'Women',
      correct: 3,
    },
    {
      name: 'Inglês',
      title: 'Qual é o oposto de "fast"?',
      answer1: 'Quick',
      answer2: 'Slow',
      answer3: 'Rapid',
      correct: 2,
    },
    {
      name: 'Inglês',
      title: 'Qual é a forma correta da terceira pessoa do singular do verbo "to have" no presente simples?',
      answer1: 'Have',
      answer2: 'Has',
      answer3: 'Having',
      correct: 2,
    },
    {
      name: 'Inglês',
      title: 'Como se escreve "cachorro" em inglês?',
      answer1: 'Dog',
      answer2: 'Cat',
      answer3: 'Horse',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "apple"?',
      answer1: 'Maçã',
      answer2: 'Banana',
      answer3: 'Laranja',
      correct: 1,
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "house"?',
      answer1: 'Carro',
      answer2: 'Casa',
      answer3: 'Avião',
      correct: 2
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "cat"?',
      answer1: 'Cachorro',
      answer2: 'Gato',
      answer3: 'Pássaro',
      correct: 2
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "book"?',
      answer1: 'Livro',
      answer2: 'Bola',
      answer3: 'Piano',
      correct: 1
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "sun"?',
      answer1: 'Lua',
      answer2: 'Sol',
      answer3: 'Estrela',
      correct: 2
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "blue"?',
      answer1: 'Azul',
      answer2: 'Vermelho',
      answer3: 'Verde',
      correct: 1
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "table"?',
      answer1: 'Mesa',
      answer2: 'Cadeira',
      answer3: 'Sofá',
      correct: 1
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "red"?',
      answer1: 'Verde',
      answer2: 'Azul',
      answer3: 'Vermelho',
      correct: 3
    },
    {
      name: 'Inglês',
      title: 'Qual é a tradução de "pen"?',
      answer1: 'Caneta',
      answer2: 'Lápis',
      answer3: 'Caderno',
      correct: 1
    },
    {
      name: 'Química',
      title: 'Qual é o número atômico do carbono?',
      answer1: '5',
      answer2: '6',
      answer3: '15',
      correct: 2,
    },
    {
      name: 'Química',
      title: 'Qual é a fórmula química da água?',
      answer1: 'H2O',
      answer2: 'CO2',
      answer3: 'NaCl',
      correct: 1,
    },
    {
      name: 'Química',
      title: 'Qual é o gás responsável pelo efeito estufa?',
      answer1: 'Oxigênio (O2)',
      answer2: 'Dióxido de carbono (CO2)',
      answer3: 'Metano (CH4)',
      correct: 2,
    },
    {
      name: 'Química',
      title: 'Qual é o elemento mais abundante na crosta terrestre?',
      answer1: 'Oxigênio (O)',
      answer2: 'Silício (Si)',
      answer3: 'Alumínio (Al)',
      correct: 1,
    },
    {
      name: 'Química',
      title: 'Qual é o ácido presente no limão?',
      answer1: 'Ácido cítrico',
      answer2: 'Ácido acético',
      answer3: 'Ácido clorídrico',
      correct: 1,
    },
    {
      name: 'Química',
      title: 'Qual é o nome do processo de transformação de um sólido diretamente para um gás?',
      answer1: 'Sublimação',
      answer2: 'Evaporação',
      answer3: 'Fusão',
      correct: 1,
    },
    {
      name: 'Química',
      title: 'Qual é a fórmula química do gás carbônico?',
      answer1: 'CO2',
      answer2: 'H2O',
      answer3: 'CH4',
      correct: 1,
    },
    {
      name: 'Química',
      title: 'Qual é o metal mais leve?',
      answer1: 'Lítio',
      answer2: 'Alumínio',
      answer3: 'Potássio',
      correct: 1,
    },
    {
      name: 'Química',
      title: 'Qual é o principal componente do petróleo?',
      answer1: 'Metano',
      answer2: 'Gasolina',
      answer3: 'Hidrocarbonetos',
      correct: 3,
    },
    {
      name: 'Química',
      title: 'Qual é o símbolo químico do oxigênio?',
      answer1: 'O',
      answer2: 'O2',
      answer3: 'O3',
      correct: 1
    },
    {
      name: 'Química',
      title: 'Qual é o pH neutro?',
      answer1: '7',
      answer2: '8',
      answer3: '6',
      correct: 1
    },
    {
      name: 'Química',
      title: 'Qual é o metal líquido à temperatura ambiente?',
      answer1: 'Ferro',
      answer2: 'Chumbo',
      answer3: 'Mercúrio',
      correct: 3
    },
    {
      name: 'Química',
      title: 'Qual é o elemento usado como referência para a massa atômica?',
      answer1: 'Carbono',
      answer2: 'Hidrogênio',
      answer3: 'Oxigênio',
      correct: 1
    },
    {
      name: 'Química',
      title: 'Qual é o gás responsável pela cor azul das chamas?',
      answer1: 'Oxigênio',
      answer2: 'Metano',
      answer3: 'Metano',
      correct: 1
    },
    {
      name: 'Química',
      title: 'Qual é o elemento químico presente em todos os ácidos?',
      answer1: 'Hidrogênio',
      answer2: 'Oxigênio',
      answer3: 'Carbono',
      correct: 1
    },
    {
      name: 'Física',
      title: 'Qual é a unidade de medida da força?',
      answer1: 'Newton (N)',
      answer2: 'Joule (J)',
      answer3: 'Watt (W)',
      correct: 1,
    },
    {
      name: 'Física',
      title: 'Qual é a fórmula para calcular a velocidade média?',
      answer1: 'Velocidade = Distância × Tempo',
      answer2: 'Velocidade = Tempo ÷ Distância',
      answer3: 'Velocidade = Distância ÷ Tempo',
      correct: 3,
    },
    {
      name: 'Física',
      title: 'Qual é a fórmula da segunda lei de Newton?',
      answer1: 'F = m × a',
      answer2: 'F = m ÷ a',
      answer3: 'F = m + a',
      correct: 1,
    },
    {
      name: 'Física',
      title: 'Qual é a aceleração da gravidade na superfície da Terra?',
      answer1: '9.8 m/s²',
      answer2: '10 m/s²',
      answer3: '11 m/s²',
      correct: 1,
    },
    {
      name: 'Física',
      title: 'Qual é a fórmula para calcular a densidade de um objeto?',
      answer1: 'Densidade = Massa ÷ Volume',
      answer2: 'Densidade = Volume ÷ Massa',
      answer3: 'Densidade = Massa × Volume',
      correct: 1,
    },
    {
      name: 'Física',
      title: 'Qual é a fórmula para calcular a força gravitacional entre duas massas?',
      answer1: 'F = G × m1 × m2 ÷ r²',
      answer2: 'F = G × m1 + m2 ÷ r²',
      answer3: 'F = G × m1 - m2 ÷ r²',
      correct: 1,
    },
    {
      name: 'Física',
      title: 'Qual é a unidade de medida da resistência elétrica?',
      answer1: 'Ampère (A)',
      answer2: 'Volt (V)',
      answer3: 'Ohm (Ω)',
      correct: 3,
    },
    {
      name: 'Física',
      title: 'Qual é a fórmula para calcular o trabalho realizado por uma força?',
      answer1: 'Trabalho = Força × Distância',
      answer2: 'Trabalho = Força ÷ Distância',
      answer3: 'Trabalho = Força + Distância',
      correct: 1,
    },
    {
      name: 'Física',
      title: 'Qual é a unidade SI de força?',
      answer1: 'Newton',
      answer2: 'Joule',
      answer3: 'Watt',
      correct: 1
    },
    {
      name: 'Física',
      title: 'Qual é a primeira lei de Newton?',
      answer1: 'Lei da inércia',
      answer2: 'Lei da gravitação universal',
      answer3: 'Lei da ação e reação',
      correct: 1
    },
    {
      name: 'Física',
      title: 'Qual é a unidade SI de distância?',
      answer1: 'Metros',
      answer2: 'Quilograma',
      answer3: 'Segundos',
      correct: 1
    },
    {
      name: 'Física',
      title: 'Qual é a unidade SI de tempo?',
      answer1: 'Segundos',
      answer2: 'Metros',
      answer3: 'Quilograma',
      correct: 1
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "livro"?',
      answer1: 'Livros',
      answer2: 'Livres',
      answer3: 'Livras',
      correct: 1,
    },
    {
      name: 'Português',
      title: 'Qual é o antônimo de "alegre"?',
      answer1: 'Triste',
      answer2: 'Feliz',
      answer3: 'Contente',
      correct: 1,
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "país"?',
      answer1: 'Países',
      answer2: 'Paiss',
      answer3: 'Páises',
      correct: 1,
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "cidadão"?',
      answer1: 'Cidadões',
      answer2: 'Cidadãos',
      answer3: 'Cidados',
      correct: 2,
    },
    {
      name: 'Português',
      title: 'Qual é o sinônimo de "rápido"?',
      answer1: 'Lento',
      answer2: 'Ágil',
      answer3: 'Veloz',
      correct: 3,
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "fim"?',
      answer1: 'Fins',
      answer2: 'Fins',
      answer3: 'Fimes',
      correct: 1,
    },
    {
      name: 'Português',
      title: 'Qual é o antônimo de "bom"?',
      answer1: 'Mau',
      answer2: 'Ruim',
      answer3: 'Negativo',
      correct: 2,
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "papel"?',
      answer1: 'Papéis',
      answer2: 'Papéiss',
      answer3: 'Papéis',
      correct: 1,
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "cachorro"?',
      answer1: 'Cachorros',
      answer2: 'Cachorra',
      answer3: 'Cachorral',
      correct: 1
    },
    {
      name: 'Português',
      title: 'Qual é o antônimo de "amor"?',
      answer1: 'Ódio',
      answer2: 'Alegria',
      answer3: 'Paz',
      correct: 1
    },
    {
      name: 'Português',
      title: 'Qual é a classe gramatical da palavra "casa"?',
      answer1: 'Substantivo',
      answer2: 'Verbo',
      answer3: 'Adjetivo',
      correct: 1
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "lápis"?',
      answer1: 'Lápis',
      answer2: 'Lápises',
      answer3: 'Lápiz',
      correct: 2
    },
    {
      name: 'Português',
      title: 'Qual é a palavra corretamente acentuada?',
      answer1: 'Cafézinho',
      answer2: 'Cafezinho',
      answer3: 'Cafezinhu',
      correct: 1
    },
    {
      name: 'Português',
      title: 'Qual é o antônimo de "grande"?',
      answer1: 'Pequeno',
      answer2: 'Alto',
      answer3: 'Largo',
      correct: 1
    },
    {
      name: 'Português',
      title: 'Qual é o plural de "mão"?',
      answer1: 'Mães',
      answer2: 'Mãos',
      answer3: 'Mãoes',
      correct: 2
    },
    {
      name: 'Geografia',
      title: 'Qual é o maior país do mundo em área territorial?',
      answer1: 'Estados Unidos',
      answer2: 'Rússia',
      answer3: 'China',
      correct: 2,
    },
    {
      name: 'Geografia',
      title: 'Qual é o rio mais longo do mundo?',
      answer1: 'Rio Amazonas',
      answer2: 'Rio Nilo',
      answer3: 'Rio Yangtzé',
      correct: 1,
    },
    {
      name: 'Geografia',
      title: 'Qual é o menor continente do mundo?',
      answer1: 'África',
      answer2: 'Europa',
      answer3: 'Oceania',
      correct: 3,
    },
    {
      name: 'Geografia',
      title: 'Qual é o maior oceano do mundo?',
      answer1: 'Oceano Pacífico',
      answer2: 'Oceano Atlântico',
      answer3: 'Oceano Índico',
      correct: 1,
    },
    {
      name: 'Geografia',
      title: 'Qual é o ponto mais alto da Terra?',
      answer1: 'Monte Everest',
      answer2: 'Monte Kilimanjaro',
      answer3: 'Monte Fuji',
      correct: 1,
    },
    {
      name: 'Geografia',
      title: 'Qual é o deserto mais quente do mundo?',
      answer1: 'Deserto do Saara',
      answer2: 'Deserto do Atacama',
      answer3: 'Deserto do Kalahari',
      correct: 1,
    },
    {
      name: 'Geografia',
      title: 'Qual é a capital do Canadá?',
      answer1: 'Toronto',
      answer2: 'Ottawa',
      answer3: 'Vancouver',
      correct: 2,
    },
    {
      name: 'Geografia',
      title: 'Qual é o país mais extenso da América do Sul?',
      answer1: 'Brasil',
      answer2: 'Argentina',
      answer3: 'Chile',
      correct: 1,
    },
    {
      name: 'Geografia',
      title: 'Qual é o maior rio do mundo em volume de água?',
      answer1: 'Nilo',
      answer2: 'Amazonas',
      answer3: 'Yangtzé',
      correct: 2
    },
    {
      name: 'Geografia',
      title: 'Qual é a capital da Austrália?',
      answer1: 'Sydney',
      answer2: 'Melbourne',
      answer3: 'Canberra',
      correct: 3
    }
  ]

  for (const question of questions) {
    await prisma.question.upsert({
      where: {
        title: question.title
      },
      create: question,
      update: {}
    }) 
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
