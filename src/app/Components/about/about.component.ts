import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @HostListener('window:scroll', [])
  onScroll(): void {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-in');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }
}