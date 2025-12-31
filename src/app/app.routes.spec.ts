import { routes } from './app.routes';
import { HomeComponent } from './features/home/home.component';

describe('App Routes', () => {
  it('should define a default route to HomeComponent', () => {
    expect(routes.length).toBeGreaterThanOrEqual(4);
    const homeRoute = routes.find((route) => route.path === '');
    expect(homeRoute?.component).toBe(HomeComponent);
    expect(homeRoute?.title).toBe('Gestao de Edificios');
    expect((homeRoute?.data as { label?: string } | undefined)?.label).toBe('Inicio');
  });

  it('should expose admin, cliente and sindico routes with labels', () => {
    const adminRoute = routes.find((route) => route.path === 'administracao');
    const clienteRoute = routes.find((route) => route.path === 'cliente');
    const sindicoRoute = routes.find((route) => route.path === 'sindico');

    expect(adminRoute?.title).toBe('Administracao');
    expect((adminRoute?.data as { label?: string } | undefined)?.label).toBe('Administracao');

    expect(clienteRoute?.title).toBe('Area do Cliente');
    expect((clienteRoute?.data as { label?: string } | undefined)?.label).toBe('Area do Cliente');

    expect(sindicoRoute?.title).toBe('Area do Sindico');
    expect((sindicoRoute?.data as { label?: string } | undefined)?.label).toBe('Area do Sindico');
  });

  it('should define a wildcard redirect to home', () => {
    const wildcard = routes.find((route) => route.path === '**');
    expect(wildcard?.redirectTo).toBe('');
    expect(wildcard?.pathMatch).toBe('full');
  });
});
