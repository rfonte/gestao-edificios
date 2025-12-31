import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose title and description', () => {
    expect(component.title).toBe('Area Administrativa');
    expect(component.description).toBe(
      'Gerencie cadastros, usuarios e configuracoes do condominio.'
    );
  });

  it('should render title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Area Administrativa');
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Gerencie cadastros, usuarios e configuracoes do condominio.'
    );
  });
});
