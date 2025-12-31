import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SindicoComponent } from './sindico.component';

describe('SindicoComponent', () => {
  let component: SindicoComponent;
  let fixture: ComponentFixture<SindicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SindicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SindicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose title and description', () => {
    expect(component.title).toBe('Area do Sindico');
    expect(component.description).toBe(
      'Controle assembleias, comunicacoes e manutencoes programadas.'
    );
  });

  it('should render title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Area do Sindico');
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Controle assembleias, comunicacoes e manutencoes programadas.'
    );
  });
});
