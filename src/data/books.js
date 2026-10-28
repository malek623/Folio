// Required fields: id (unique number), title, author, category, price (DA), rating (0-5), description
// Optional fields:
//   image    -> URL or imported file for a real cover (otherwise a generated cover is shown)
//   cover    -> [colorA, colorB] gradient used for the generated cover
//   oldPrice -> shows a discount badge when higher than price
//   year, pages
// ------------------------------------------------------------
const books = [
  {
    id: 1,
    title: "L étranger",
    author: "Albert Camus",
    image: "/public/letranger.webp",
    category: "Absurd",
    price: 1800,
    oldPrice: 2200,
    rating: 4.6,
    year: 2021,
    pages: 312,
    description:
      "Quand la sonnerie a encore retenti, que la porte du box s'est ouverte, c'est le silence de la salle qui est monté vers moi, le silence, et cette singulière sensation que j'ai eue lorsque j'ai constaté que le jeune journaliste avait détourné les yeux. Je n'ai pas regardé du côté de Marie",
  },
  {
    id: 2,
    title: "La délicatesse",
    author: "David Foenkinos",
    image: "/public/ladelicatesse.webp",
    category: "Fiction",
    price: 3200,
    rating: 4.8,
    year: 2023,
    pages: 420,

    description:
      "François pensa : si elle commande un déca, je me lève et je m'en vais. C'est la boisson la moins conviviale qui soit. Un thé, ce n'est guère mieux. ",
  },
  {
    id: 3,
    title: "Emile Zola",
    author: "Thérèse Raquin",
    category: "Realism",
    image: "/public/thteresraquin.webp",
    price: 2400,
    rating: 4.4,
    year: 2020,
    pages: 268,
    description:
      "Avec Camille, son époux, Thérèse mène une vie rythmée par les parties de dominos aux côtés de petit-bourgeois satisfaits. Assoiffée de vie, elle est astreinte à la charge de garde-malade d'un mari souffreteux. ",
  },
  {
    id: 4,
    title: "Je vais mieux",
    author: "David Foenkinos",
    category: "Fiction",
    image: "/public/jevaismieux.webp",
    price: 2700,
    oldPrice: 3000,
    rating: 4.5,
    year: 2019,
    pages: 355,
    cover: ["#b3472f", "#5c1f12"],
    description:
      "Un jour, je me suis réveillé avec une inexplicable douleur dans le dos.",
  },
  {
    id: 5,
    title: "Lettre au père",
    author: "Franz Kafka",
    category: "Absurd",
    image: "/public/lettreaupere.webp",
    price: 1500,
    rating: 4.1,
    year: 2022,
    pages: 240,
    cover: ["#d99a1e", "#7a4d05"],
    description:
      "Dernièrement, tu m'as demandé incidemment pourquoi je prétendais te craindre. J'ai été comme d'habitude incapable de te répondre, en partie à cause justement de la crainte que j'ai de toi, en partie parce qu'à l'explication de cette crainte seraient liés des détails trop nombreux pour que, oralement, je puisse en faire à peu près la somme.",
  },
  {
    id: 6,
    title: "La chute",
    author: "Albert Camus",
    image: "/public/lachute.webp",
    category: "Absurd",
    price: 2900,
    oldPrice: 3400,
    rating: 4.7,
    year: 2024,
    pages: 288,

    description:
      "Sur le pont, je passai derrière une forme penchée sur le parapet, et qui semblait regarder le fleuve",
  },
  {
    id: 7,
    title: "Je dirai malgré tout que cette vie fut belle",
    author: "jean d'Ormesson",
    category: "Psychological",
    image: "/public/cetteviefutbelle.webp",
    price: 1200,
    rating: 4.9,
    year: 2022,
    pages: 64,
    description:
      "Pour se défendre dans un procès qu'il s'intente à lui- même, l'auteur fait défiler au galop un passé évanoui. ",
  },
  {
    id: 8,
    title: "La metamorphose",
    author: "Franz Kafka",
    category: "Absurd",
    image: "/public/lametamorphonse.webp",
    price: 2100,
    rating: 4.3,
    year: 2021,
    pages: 190,
    cover: ["#e08a2c", "#8f3d0c"],
    description:
      "Et si je continuais un peu à dormir et oubliais toutes ces bêtises », pensa-t-il, mais cela était tout à fait irréalisable, car il avait coutume de dormir sur le côté droit et il lui était impossible, dans son état actuel, de se mettre dans cette position. ",
  },
  {
    id: 9,
    title: "Lettre d une inconnue",
    author: "Stefan Zweig",
    image: "/public/lettreduneinconnue.webp",
    category: "Poetry",
    price: 1400,
    rating: 4.2,
    year: 2018,
    pages: 120,
    description:
      "Une jeune femme dans une situation tragique écrit à l'homme qu'elle a aimé passionnément, depuis l'enfance, pour lui rappeler son histoire : de leurs trois nuits d'amour est né un enfant qu'elle a élevé seule.",
  },
  {
    id: 10,
    title: "L assommoir",
    author: "thérèse Raquin",
    category: "Realism",
    image: "/public/lassomoir.webp",
    price: 3500,
    rating: 4.6,
    year: 2023,
    pages: 376,
    cover: ["#0e7490", "#083344"],
    description:
      "Qu'est-ce qui nous fascine dans la vie « simple et tranquille » de Gervaise Macquart ? Pourquoi le destin de cette petite blanchisseuse montée de Provence à Paris nous touche-t-il tant aujourd'hui encore ? Que nous disent les exclus du quartier de la Goutte-d'Or version Second Empire ?",
  },
  {
    id: 11,
    title: "Deux sœurs",
    author: "David Foenkinos",
    category: "Fiction",
    image: "/public/deuxsoeurs.webp",
    price: 2600,
    rating: 4.0,
    year: 2017,
    pages: 330,

    description:
      " L'amour passionnel vous pousse à emmitoufler le moindre de vos gestes, à anticiper de manière excessive les réactions de l'autre, à vous perdre finalement dans le dédale de l'anarchie du coeur. ",
  },
  {
    id: 12,
    title: "La peste",
    author: "Albert Camus",
    category: "Psychological",
    image: "/public/lapeste.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "Seulement, on n'a pas osé leur donner un nom, sur le moment... Et puis, comme disait un confrère : «C'est impossible, tout le monde sait qu'elle a disparu de l'Occident.» ",
  },
  {
    id: 13,
    title: "plus malin que le diable",
    author: "Napoleon Hill",
    category: "Psychological",
    image: "/public/plusmalinquelediable.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "Découvrez sept principes qui sont autant de clés pour vaincre vos obstacles intérieurs et accéder à la réussite.  ",
  },
  {
    id: 14,
    title: "A l'ami qui ne m'a pas sauvé la vie",
    author: "hervé Guibert",
    category: "Psychological",
    image: "/public/lami.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "In erschütternder Klarheit schildert »Dem Freund, der mir das Leben nicht gerettet hat« die Erfahrung einer Aids-Diagnose in der zweiten Hälfte der 1980er Jahre. Wir folgen dem Erzähler von einem Arzttermin zum nächsten.",
  },
  {
    id: 15,
    title: "Le dernier jour d'un condamné",
    author: "Victor Hugo",
    category: "Realism",
    image: "/public/ledernierjourdun.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "Seulement, on n'a pas osé leur donner un nom, sur le moment... Et puis, comme disait un confrère : «C'est impossible, tout le monde sait qu'elle a disparu de l'Occident.» ",
  },
  {
    id: 16,
    title: "Le premier homme",
    author: "Albert Camus",
    category: "Absurd",
    image: "/public/lepremierhomme.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "En somme, je vais parler de ceux que j'aimais », écrit Albert Camus dans une note pour Le premier homme.» ",
  },
  {
    id: 17,
    title: "Crime et châtiment",
    author: "Fyodor Dostoievski",
    category: "Realism",
    image: "/public/crimeetchatiment.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "A  Saint-Pétersbourg, en 1865, Raskolnikov, un jeune noble sombre et altier, renfermé mais aussi généreux, a interrompu ses études faute d’argent.",
  },
  {
    id: 18,
    title: "Le proces",
    author: "Franz Kafka",
    category: "Absurd",
    image: "/public/leproces.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "Joseph K., cadre de banque, est arrêté chez lui, un beau matin, sans raison, le jour de son trentième anniversaire. ",
  },
  {
    id: 19,
    title: "vers la beauté",
    author: "david Foenkinos",
    category: "Fiction",
    image: "/public/verslabeaute.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "Antoine Duris est professeur aux Beaux-Arts de Lyon. Du jour au lendemain, il décide de tout quitter pour devenir gardien de salle au musée d'Orsay. » ",
  },
  {
    id: 20,
    title: "La mort heureuse",
    author: "Albert Camus",
    category: "Fiction",
    image: "/public/lamortheureuse.webp",
    price: 1900,
    oldPrice: 2300,
    rating: 4.7,
    year: 2024,
    pages: 298,

    description:
      "Je suis certain qu'on ne peut être heureux sans argent. Voilà tout. Je n'aime ni la facilité ni le romantisme. J'aime à me rendre compte.",
  },
];

export default books;
