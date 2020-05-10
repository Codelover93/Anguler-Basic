import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtfComponent } from './ntf.component';

describe('NtfComponent', () => {
  let component: NtfComponent;
  let fixture: ComponentFixture<NtfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
