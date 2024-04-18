import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScoreComponent } from './register-score.component';

describe('RegisterScoreComponent', () => {
  let component: RegisterScoreComponent;
  let fixture: ComponentFixture<RegisterScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
