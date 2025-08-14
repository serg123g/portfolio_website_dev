import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  platform?: string;
  imageUrl?: string;
}

export interface Developer {
  name: string;
  title: string;
  description: string;
  skills: string[];
  email: string;
  githubProfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getDeveloperInfo(): Developer {
    return {
      name: 'Sergio Portugal',
      title: 'Full Stack Developer & Mobile App Specialist',
      description: 'Passionate developer specializing in creating innovative solutions using Java, Flutter, and JavaScript. I focus on building scalable applications and implementing new features that enhance user experience and drive business growth.',
      skills: ['Java', 'Flutter', 'JavaScript', 'Android Development', 'Angular', 'Node.js', 'Mobile Apps', 'API Development', 'Kotlin', 'XML'],
      email: 'sergio.projects.dev@gmail.com',
      githubProfile: 'https://github.com/serg123g'
    };
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Wise Body',
        description: 'An A.I. based app that helps you to track your body measurements and progress. Available for download on Google Play Store.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'A.I.', 'Node.js', 'Express.js', 'Gemini API'],
        // githubUrl: 'https://github.com/yourusername/chat-app',
        // demoUrl: 'https://play.google.com/store/apps/details?id=com.wisebody.app.health',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.wisebody.app.health',
        platform: 'Android'
      },
      {
        id: 2,
        title: 'E-Commerce Mobile App',
        description: 'A complete e-commerce solution built with Flutter, featuring real-time inventory management, secure payment processing, and an intuitive user interface.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API'],
        githubUrl: 'https://github.com/serg123g/ecommerce_app',
        // demoUrl: 'https://your-demo-link.com'
      },
      {
        id: 3,
        title: 'Instagram Clone',
        description: 'A clone of Instagram built with Flutter, featuring user authentication, post sharing, and a feed of user posts.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        githubUrl: 'https://github.com/serg123g/instagram_clone_flutter',
        // demoUrl: 'https://your-demo-link.com'
      },
      {
        id: 4,
        title: 'An app to search gifs',
        description: 'A web app to search gifs using the Giphy API.',
        technologies: ['TypeScript', 'HTML', 'CSS', 'Giphy API'],
        githubUrl: 'https://github.com/serg123g/03-gifsApp'
      },
      {
        id: 5,
        title: 'Shopping List',
        description: 'An app to manage your shopping list.',
        technologies: ['Android', 'Kotlin'],
        githubUrl: 'https://github.com/serg123g/AndroidShoppingList',
        // demoUrl: 'https://your-demo-link.com'
      },
      // {
      //   id: 6,
      //   title: 'Financial Dashboard',
      //   description: 'An analytics dashboard for financial data visualization with interactive charts and real-time data updates using modern web technologies.',
      //   technologies: ['Angular', 'TypeScript', 'Chart.js', 'REST APIs'],
      //   githubUrl: 'https://github.com/yourusername/financial-dashboard',
      //   demoUrl: 'https://your-demo-link.com'
      // }
    ];
  }
}