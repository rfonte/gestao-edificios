import { Component } from '@angular/core';

@Component({
  selector: 'app-sindico',
  standalone: true,
  templateUrl: './sindico.component.html',
  styleUrl: './sindico.component.css',
})
export class SindicoComponent {
  title = 'Area do Sindico';
  description = 'Controle assembleias, comunicacoes e manutencoes programadas.';
}
