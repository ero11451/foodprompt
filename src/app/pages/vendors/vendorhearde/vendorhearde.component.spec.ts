import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorheardeComponent } from './vendorhearde.component';

describe('VendorheardeComponent', () => {
  let component: VendorheardeComponent;
  let fixture: ComponentFixture<VendorheardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorheardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorheardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
