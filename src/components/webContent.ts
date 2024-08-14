import { HomeData, NavBar, TitleSubtitileParagraph, Projects} from "./types";
import imgCastell from '../assets/castell.png'
import imgPronoms from '../assets/pronominalitza_web.png'
import hackupc24 from '../assets/hackupc24.png'
import outfit_generator from '../assets/outfit_generator.png'

export const homeData: HomeData = {
  title: "Joan Gomà Cortés",
  subtitle: "Data Scientist and Engineering Student",
  description:
    "I am a curious person with very different interests. I have always enjoyed creating new things and understanding how they work, and now I am doing it from the area of Data Science.",
};

export const navBarData: NavBar = {
  items: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },  
  ]
}

// About me data
export const aboutMeData: TitleSubtitileParagraph = {
  title: "About me",
  subtitle: "My introduction",
  descriptions: ["Hi, I'm Joan Gomà, a Data Scientist Student in Barcelona. I'm passionate about my work and always try to merge my knowledge in Data Science with my hobbies such as music and sport to approach problems differently.",
    "Hi, I'm Joan Gomà, a Data Scientist Student in Barcelona. I'm passionate about my work and always try to merge my knowledge in Data Science with my hobbies such as music and sport to approach problems differently.",
   ]

} 

// Coding: view more
export const codingPopUp: TitleSubtitileParagraph = {
  title: "Coding skills",
  subtitle: "noseee",
  descriptions: ["Item 1: Detailed description about item 1.", "Item 2: Detailed description about item 2.", "Item 3: Detailed description about item 3.", "Item 4: Detailed description about item 4."]
}

// Sport: view more
export const sportPopUp: TitleSubtitileParagraph = {
  title: "Sport",
  subtitle: "noseee",
  descriptions: ["Item 1: Detailed description about item 1.", "Item 2: Detailed description about item 2.", "Item 3: Detailed description about item 3.", "Item 4: Detailed description about item 4."]
}

// Coding: view more
export const workingExperiencePopUp: TitleSubtitileParagraph = {
  title: "Working Experience",
  subtitle: "noseee",
  descriptions: ["Item 1: Detailed description about item 1.", "Item 2: Detailed description about item 2.", "Item 3: Detailed description about item 3.", "Item 4: Detailed description about item 4."]
}

export const projects = [
  {
    imageSrc: imgCastell,
    title: 'Human Towers',
    description: 'This is a description of project one.',
  },
  {
    imageSrc: outfit_generator,
    title: 'Outfit Generator',
    description: 'The Outfit Generator project leverages user input to create tailored outfit recommendations from a curated dataset of "good" outfits. By incorporating user preferences for various clothing items, the system employs entropy minimization techniques to optimize the probability space between different garments. \n This approach ensures that the generated outfits not only match user specifications but also exhibit minimal randomness, resulting in cohesive and stylish outfit combinations. The project showcases innovative use of data analysis and machine learning to enhance personal fashion choices. \n This project was developed during Datathon FME 2023. See it on [DevPost](https://devpost.com/software/outfit-generator-3k6tv1)',
  },
  {
    imageSrc: imgPronoms,
    title: 'Catalan Pronominalizer',
    description: 'This is a description of project one.',
  }, 
  {
    imageSrc: hackupc24,
    title: 'Retrieval Augmented Generation Assistant',
    description: 'The Retrieval Augmented Generation Assistant is an intelligent chatbot that enables users to ask questions about information that was not available in the training dataset of the Large Language Model being used. \n To achieve so, the user just has to introduce any URL (it works both with webpages and PDFs) and Retrieval Augmented Generation Assistant will be able to answer questions about that content. \n This project was developed during the HackUPC 2024. See it on [DevPost](https://devpost.com/software/retrieval-augmented-generation-iris-intersystems)',
  }
  
]