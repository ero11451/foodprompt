import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeavendorbottonComponent } from './becomeavendorbotton.component';

describe('BecomeavendorbottonComponent', () => {
  let component: BecomeavendorbottonComponent;
  let fixture: ComponentFixture<BecomeavendorbottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeavendorbottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeavendorbottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
