import { HomeData, NavBar, AboutMeData } from "./types";

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
    { name: "Skills", href: "#" },
    { name: "Services", href: "#" },  
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ]
}

export const aboutMeData: AboutMeData = {
  title: "About me",
  subtitle: "My introduction",
  descriptions: ["Hi, I'm Joan Gomà, a Data Scientist Student in Barcelona. I'm passionate about my work and always try to merge my knowledge in Data Science with my hobbies such as music and sport to approach problems differently.",
    "Hi, I'm Joan Gomà, a Data Scientist Student in Barcelona. I'm passionate about my work and always try to merge my knowledge in Data Science with my hobbies such as music and sport to approach problems differently.",
   ]

} 