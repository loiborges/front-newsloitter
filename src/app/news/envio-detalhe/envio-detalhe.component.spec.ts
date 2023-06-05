import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDetalheComponent } from './envio-detalhe.component';

describe('EnvioDetalheComponent', () => {
  let component: EnvioDetalheComponent;
  let fixture: ComponentFixture<EnvioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
