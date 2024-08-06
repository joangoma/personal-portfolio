import { HomeData, NavBar, TitleSubtitileParagraph, Projects} from "./types";
import imgCastell from '../assets/castell.png'

export const homeData: HomeData = {
  title: "Joan Gomà Cortés",
  subtitle: "Data Scientist and Engineering Student",
  description:
    "I am a curious person with very different interests. I have always enjoyed creating new things and understanding how they work, and now I am doing it from the area of Data Science.",
};

export const navBarData: NavBar = {
  items: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },  
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
    title: 'Project One',
    description: 'This is a description of project one.',
  },
  {
    imageSrc: '../assets/castell.png',
    title: 'Project Two',
    description: 'This is a description of project one.',
  },
  
]