import { Component, OnInit } from '@angular/core';
import { PortfolioService, Developer } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  developer!: Developer;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.developer = this.portfolioService.getDeveloperInfo();
  }

  scrollToProjects(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
