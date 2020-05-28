import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VergraficasComponent } from './vergraficas.component';

describe('VergraficasComponent', () => {
  let component: VergraficasComponent;
  let fixture: ComponentFixture<VergraficasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VergraficasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VergraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
