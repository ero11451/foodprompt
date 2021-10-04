import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderimageComponent } from './sliderimage.component';

describe('SliderimageComponent', () => {
  let component: SliderimageComponent;
  let fixture: ComponentFixture<SliderimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
