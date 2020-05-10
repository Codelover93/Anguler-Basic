import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginathenticationComponent } from './loginathentication.component';

describe('LoginathenticationComponent', () => {
  let component: LoginathenticationComponent;
  let fixture: ComponentFixture<LoginathenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginathenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginathenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
