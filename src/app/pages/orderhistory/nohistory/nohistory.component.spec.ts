import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NohistoryComponent } from './nohistory.component';

describe('NohistoryComponent', () => {
  let component: NohistoryComponent;
  let fixture: ComponentFixture<NohistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NohistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NohistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
