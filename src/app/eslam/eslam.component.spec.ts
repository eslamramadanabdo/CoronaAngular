import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslamComponent } from './eslam.component';

describe('EslamComponent', () => {
  let component: EslamComponent;
  let fixture: ComponentFixture<EslamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
