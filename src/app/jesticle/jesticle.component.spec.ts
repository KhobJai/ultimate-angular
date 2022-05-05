import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesticleComponent } from './jesticle.component';

describe('JesticleComponent', () => {
  let component: JesticleComponent;
  let fixture: ComponentFixture<JesticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JesticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JesticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
