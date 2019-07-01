import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swagger3Component } from './swagger3.component';

describe('Swagger3Component', () => {
  let component: Swagger3Component;
  let fixture: ComponentFixture<Swagger3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swagger3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swagger3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
