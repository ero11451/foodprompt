import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeavendorComponent } from './becomeavendor.component';

describe('BecomeavendorComponent', () => {
  let component: BecomeavendorComponent;
  let fixture: ComponentFixture<BecomeavendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeavendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeavendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
