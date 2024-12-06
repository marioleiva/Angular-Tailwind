import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  title = 'Power BI';
  Tipo = '';
  
  abrirEnlace(url: string): void {
    if (url) {
      console.log("Prueba");
      window.open(url, '_blank');
    } else {
      console.error('La URL proporcionada es inválida.');
    }
  }
}
