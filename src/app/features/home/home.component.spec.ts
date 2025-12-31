import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose greeting and description', () => {
    expect(component.greeting).toBe('Bem-vindo(a) ao gestor de edificios');
    expect(component.description).toBe(
      'Use o menu para navegar pelas funcionalidades.'
    );
  });

  it('should render greeting and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Bem-vindo(a) ao gestor de edificios'
    );
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Use o menu para navegar pelas funcionalidades.'
    );
  });
});
