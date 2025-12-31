import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  standalone: true,
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  title = 'Area do Cliente';
  description = 'Acompanhe boletos, comunicados e solicitacoes de servico.';
}
