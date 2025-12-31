import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  greeting = 'Bem-vindo(a) ao gestor de edifícios';
  description = 'Use o menu para navegar pelas funcionalidades.';
}
