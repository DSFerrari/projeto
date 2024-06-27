import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerregistroComponent } from './verregistro.component';

describe('VerregistroComponent', () => {
  let component: VerregistroComponent;
  let fixture: ComponentFixture<VerregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerregistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
