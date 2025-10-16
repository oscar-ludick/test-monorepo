import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppA } from './app-a';

describe('AppA', () => {
  let component: AppA;
  let fixture: ComponentFixture<AppA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
