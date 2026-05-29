import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente - Direito de Familia',
      text: 'Atendimento excelente! A Livia foi muito atenciosa e me ajudou em todo o processo de divorcio. Recomendo demais!',
      rating: 5
    },
    {
      name: 'Joao Pereira',
      role: 'Cliente - Direito Civil',
      text: 'Profissionais dedicadas e comprometidas. Resolveram meu caso de indenizacao com muita eficiencia.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Cliente - Direito do Consumidor',
      text: 'Consegui resolver minha questao com a empresa em pouco tempo. Muito grata pelo trabalho!',
      rating: 5
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
