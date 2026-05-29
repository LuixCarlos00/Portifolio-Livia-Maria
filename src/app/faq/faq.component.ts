import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question: 'Quanto tempo demora um processo de divorcio?',
      answer: 'O prazo varia conforme o tipo de divorcio. O divorcio consensual em cartorio pode ser feito em ate 30 dias. Ja o divorcio judicial litigioso pode levar de 6 meses a 2 anos, dependendo da complexidade do caso e da quantidade de bens para partilha.',
      open: false
    },
    {
      question: 'Como funciona a pensao alimenticia?',
      answer: 'A pensao alimenticia e um valor mensal pago para garantir o sustento do filho ou do ex-conjuge. O valor e calculado considerando as necessidades de quem recebe e a capacidade financeira de quem paga. Pode ser revisada judicialmente caso haja mudanca nas condicoes financeiras.',
      open: false
    },
    {
      question: 'Preciso ir ao cartorio pessoalmente para todas as etapas?',
      answer: 'Nao necessariamente. Muitos documentos podem ser elaborados e protocolados pelo advogado. No entanto, alguns procedimentos especificos podem exigir sua presenca, como assinaturas em cartorio ou audiencias em processos judiciais.',
      open: false
    },
    {
      question: 'Qual a diferenca entre divorcio consensual e litigioso?',
      answer: 'O divorcio consensual ocorre quando ambos os conjuges estao de acordo sobre todos os termos (guarda, pensao, partilha de bens). Pode ser feito em cartorio ou judicialmente. O litigioso acontece quando ha desacordo, sendo necessario a intervencao judicial para resolver as questoes.',
      open: false
    },
    {
      question: 'Quanto custa uma consulta inicial?',
      answer: 'Oferecemos a primeira consulta gratuita para avaliar seu caso e orientar sobre os procedimentos necessarios. Nas consultas subsequentes, trabalhamos com valores acessiveis e podemos negociar formas de pagamento que cabem no seu orcamento.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
