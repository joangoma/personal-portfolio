import { HomeData, NavBar, TitleSubtitileParagraph } from "./types";
import imgCastell from '../assets/castell.png'
import imgPronoms from '../assets/pronominalitza_web.png'
import hackupc24 from '../assets/hackupc24.png'
import outfit_generator from '../assets/outfit_generator.png'
import cinebus from '../assets/cinebus_web.png'


export const homeData: HomeData = {
  title: "Joan Gomà Cortés",
  subtitle: "Data Scientist and Engineering Student",
  description:
    "I am a curious person with very different interests. I have always enjoyed creating new things and understanding how they work, and now I am doing it from the area of Data Science.",
};

export const navBarData: NavBar = {
  items: [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]
}

// About me data
export const aboutMeData: TitleSubtitileParagraph = {
  title: "About me",
  subtitle: "Hobbies",
  descriptions: ["I'm a Data Scientist Student in Barcelona. I'm passionate about my work and always try to merge my knowledge in Data Science with my hobbies, such as music, climbing and human towers to approach problems differently.",
    "I love hiking and going outdoors at the Pyrenees, where I do crossings with my friends, sleeping in tents. I also enjoy playing the saxophone in a local street band, where we cheer up social events. Human towers are also one of my hobbies, as I'm a member of Colla Joves Xiquets de Valls. ",
  ]

}

// Coding: view more
export const codingPopUp: TitleSubtitileParagraph = {
  title: "Coding skills",
  subtitle: "",
  descriptions: ["Proficiency in C++ and Python programming.",
    "Skills in implementing machine learning algorithms and techniques.",
    "Expertise in data visualization and creating insightful dashboards.",
    "Basic knowledge of front-end development (HTML, CSS, JavaScript, React).",
    "Experience with SQL and database management.",
    "Knowledge of R for statistical analysis and computations.",
    "Basic understanding of video game development principles and tools.",
    "Strong foundation in data structures and algorithms.",
    "Experience in big data preprocessing for a language translation model."]
}

// Sport: view more
export const awardsAndAchievements: TitleSubtitileParagraph = {
  title: "Awards & Achievements",
  subtitle: "",
  descriptions: ["2023 Datathon FME Rookies category winner on the Outfit Generator project.",
    "2022 Youth Research Award (Generalitat de Catalunya) for a Research Work in collaboration with Barcelona Supercomputing Center.",
    "2022 Finalist at OIE (Spanish Olympiad in Informatics).", "2022 Silver Medal at OIcat (Catalan Olympiad in Informatics).",
    "July 2022 - Grant at Leagues of Code Summer Camp, focussed on competitive programming."]

}

// Coding: view more
export const workingExperiencePopUp: TitleSubtitileParagraph = {
  title: "Working Experience",
  subtitle: "",
  descriptions: ["BSC researcher internship (summer 2024) focused on Sign Language Translation, large language models applications for dataset labelling, classification and text mining.",
    "Coding Teacher (July 2021 - June 2022): Instructed children aged 7-14 at Codelearn in programming fundamentals and logic development."]
} 

export const projects = [
  {
    imageSrc: imgCastell,
    title: 'Human Towers (2024)',
    description: 'Research project focused on studying one of the hardest human tower ever build: [2d8sf](https://www.youtube.com/watch?v=ZyEPPkUIXeA). The aim of the resarch was to create a binary classification dataset (fail or success) containing different timing measures from all the towers of this type. Data visualization and machine learning techinques were used to find the optimal timing that guarantees maximum probability of success. \n This study is not public not to show other competing teams the results.',
  },
  {
    imageSrc: outfit_generator,
    title: 'Outfit Generator (2023)',
    description: 'The Outfit Generator project consisted of an app where the input user about an outfit was processed. Then, based on the outfits dataset styles, a completely new outfit was created. The system employed entropy minimization techniques to optimize the probability space between different garments. \n This project was developed during Datathon FME 2023. You can See it on [DevPost](https://devpost.com/software/outfit-generator-3k6tv1)',
  },
  {
    imageSrc: imgPronoms,
    title: 'Catalan Pronominalizer (2022)',
    description: 'Based on the interest in programming and the Catalan language, this research work consists of the creation of a software that pronominalizes the verbal complements of simple sentences with Catalan weak pronouns using Python. \n It is available on my [github page](https://github.com/joangoma/PronomsTDR).',
  },
  {
    imageSrc: hackupc24,
    title: 'Retrieval Augmented Generation Assistant (2024)',
    description: 'The Retrieval Augmented Generation Assistant is an intelligent chatbot that enables users to ask questions about information that was not available in the training dataset of the Large Language Model being used. \n To achieve it, the user just has to introduce any URL (it works both with webpages and PDFs) and Retrieval Augmented Generation Assistant will be able to answer questions about that content. \n This project was developed during the HackUPC 2024. You can see it on [DevPost](https://devpost.com/software/retrieval-augmented-generation-iris-intersystems)',
  },
  {
    imageSrc: cinebus,
    title: 'Cinebus university project (2023)',
    description: "With this project you will find the movie that best suits your preferences and you can go there by Barcelona bus! The project has three main steps: First, it collects information about movies, when they're on, and where you can watch them in Barcelona. Next, it gathers details about all the bus stops in the city and creates a map of how they're connected. Later, it combines this bus map with a map of Barcelona's streets. Lastly, with Dijkstra's path finding algorithm, it calculates the fastest route. \n It is available on my [github page](https://github.com/joangoma/ap2-cinebus?tab=readme-ov-file).",
  }

]







