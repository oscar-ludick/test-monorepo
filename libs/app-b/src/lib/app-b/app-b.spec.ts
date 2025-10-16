import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppB } from './app-b';

describe('AppB', () => {
  let component: AppB;
  let fixture: ComponentFixture<AppB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppB],
    }).compileComponents();

    fixture = TestBed.createComponent(AppB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
