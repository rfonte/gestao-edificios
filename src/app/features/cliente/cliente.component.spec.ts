import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteComponent } from './cliente.component';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose title and description', () => {
    expect(component.title).toBe('Area do Cliente');
    expect(component.description).toBe(
      'Acompanhe boletos, comunicados e solicitacoes de servico.'
    );
  });

  it('should render title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Area do Cliente');
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Acompanhe boletos, comunicados e solicitacoes de servico.'
    );
  });
});
