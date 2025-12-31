import { routes } from './app.routes';
import { HomeComponent } from './features/home/home.component';

describe('App Routes', () => {
  it('should define a default route to HomeComponent', () => {
    expect(routes.length).toBe(1);
    const [route] = routes;
    expect(route.path).toBe('');
    expect(route.component).toBe(HomeComponent);
    expect(route.title).toBe('Gestao de Edificios');
  });
});
