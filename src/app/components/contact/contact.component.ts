import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Developer } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  developer!: Developer;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.developer = this.portfolioService.getDeveloperInfo();
  }
}
