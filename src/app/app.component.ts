import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

type NavLink = {
  path: string;
  label: string;
};

function toNavLinks(): NavLink[] {
  return routes
    .filter((route) => route.path !== '**')
    .map((route) => {
      const data = route.data as { label?: unknown } | undefined;
      const label =
        typeof data?.label === 'string'
          ? data.label
          : typeof route.title === 'string'
          ? route.title
          : 'Home';
      return {
        path: route.path ?? '',
        label,
      };
    });
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  appTitle = 'Gestao de Edificios';
  navLinks = toNavLinks();
  isNavOpen = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(): void {
    this.isNavOpen = false;
  }
}
