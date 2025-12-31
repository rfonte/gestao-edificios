import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Gestao de Edificios');
  });

  it('should include the router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render nav links for available routes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.app-nav a');
    const appInstance = fixture.componentInstance;
    expect(navLinks.length).toBe(appInstance.navLinks.length);
    expect(navLinks[0]?.textContent).toContain('Inicio');
  });

  it('should build navLinks with labels and paths from routes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    const labels = appInstance.navLinks.map((l: { label: string }) => l.label);
    const paths = appInstance.navLinks.map((l: { path: string }) => l.path);

    expect(labels).toEqual(
      jasmine.arrayContaining(['Inicio', 'Administracao', 'Area do Cliente', 'Area do Sindico'])
    );
    expect(paths).toEqual(
      jasmine.arrayContaining(['', 'administracao', 'cliente', 'sindico'])
    );
  });

  it('should toggle and close nav via component methods', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance as AppComponent;

    expect(appInstance.isNavOpen).toBeFalse();
    appInstance.toggleNav();
    expect(appInstance.isNavOpen).toBeTrue();
    appInstance.toggleNav();
    expect(appInstance.isNavOpen).toBeFalse();
    appInstance.isNavOpen = true;
    appInstance.closeNav();
    expect(appInstance.isNavOpen).toBeFalse();
  });
});
