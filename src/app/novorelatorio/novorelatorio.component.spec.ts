import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovorelatorioComponent } from './novorelatorio.component';

describe('NovorelatorioComponent', () => {
  let component: NovorelatorioComponent;
  let fixture: ComponentFixture<NovorelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovorelatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovorelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
