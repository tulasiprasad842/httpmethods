import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swagger4Component } from './swagger4.component';

describe('Swagger4Component', () => {
  let component: Swagger4Component;
  let fixture: ComponentFixture<Swagger4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swagger4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swagger4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
