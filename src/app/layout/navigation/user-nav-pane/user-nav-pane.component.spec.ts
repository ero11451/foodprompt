import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavPaneComponent } from './user-nav-pane.component';

describe('UserNavPaneComponent', () => {
  let component: UserNavPaneComponent;
  let fixture: ComponentFixture<UserNavPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
