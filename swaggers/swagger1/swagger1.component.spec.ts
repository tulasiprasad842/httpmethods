import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swagger1Component } from './swagger1.component';

describe('Swagger1Component', () => {
  let component: Swagger1Component;
  let fixture: ComponentFixture<Swagger1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swagger1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swagger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
