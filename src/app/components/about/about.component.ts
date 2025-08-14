import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Developer } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  developer!: Developer;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.developer = this.portfolioService.getDeveloperInfo();
  }
}
