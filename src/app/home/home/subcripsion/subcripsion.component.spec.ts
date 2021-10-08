import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcripsionComponent } from './subcripsion.component';

describe('SubcripsionComponent', () => {
  let component: SubcripsionComponent;
  let fixture: ComponentFixture<SubcripsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcripsionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcripsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
