import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarEncuestaComponent } from './generar-encuesta.component';

describe('GenerarEncuestaComponent', () => {
  let component: GenerarEncuestaComponent;
  let fixture: ComponentFixture<GenerarEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
