import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AreasComponent } from './areas/areas.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';

/**
 * Componente principal do Portfolio Juridico
 * Implementa navegacao moderna com scroll detection,
 * menu mobile e animacoes suaves
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AboutComponent,
    ContactComponent,
    AreasComponent,
    TestimonialsComponent,
    FaqComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Portifolio-Livia-Maria';

  // Estados de UI
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';
  currentYear = new Date().getFullYear();

  // Secoes para scroll spy
  private sections = ['home', 'about', 'areas', 'testimonials', 'faq', 'contact'];
  private scrollTimeout: any;

  ngOnInit(): void {
    this.checkScroll();
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  /**
   * Detecta scroll para aplicar estilos no header
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkScroll();
    this.scrollTimeout = setTimeout(() => this.updateActiveSection(), 100);
  }

  /**
   * Verifica se a pagina foi scrollada para aplicar classe no header
   */
  private checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  /**
   * Configura Intersection Observer para detectar secao ativa
   */
  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observa todas as secoes
    this.sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });
  }

  /**
   * Atualiza a secao ativa baseada na posicao do scroll
   */
  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const sectionId of this.sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  /**
   * Alterna o estado do menu mobile
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  /**
   * Fecha o menu mobile
   */
  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  /**
   * Scroll suave para uma secao especifica
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
