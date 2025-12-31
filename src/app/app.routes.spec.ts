import { routes } from './app.routes';
import { HomeComponent } from './features/home/home.component';

describe('App Routes', () => {
  it('should define a default route to HomeComponent', () => {
    expect(routes.length).toBeGreaterThanOrEqual(1);
    const homeRoute = routes.find((route) => route.path === '');
    expect(homeRoute?.component).toBe(HomeComponent);
    expect(homeRoute?.title).toBe('Gestão de Edifícios');
  });

  it('should define a wildcard redirect to home', () => {
    const wildcard = routes.find((route) => route.path === '**');
    expect(wildcard?.redirectTo).toBe('');
    expect(wildcard?.pathMatch).toBe('full');
  });
});
