import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerrelatorioComponent } from './verrelatorio.component';

describe('VerrelatorioComponent', () => {
  let component: VerrelatorioComponent;
  let fixture: ComponentFixture<VerrelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerrelatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerrelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
