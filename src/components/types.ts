export interface NavItem {
    name: string;
    href: string;
  }

export interface NavBar {
    items: NavItem[];
}
  
export interface HomeData {
title: string;
subtitle: string;
description: string;
}

export interface AboutMeData {
  title: string;
  subtitle: string;
  descriptions: string[];
}

export interface SocialLink {
platform: string;
url: string;
}
