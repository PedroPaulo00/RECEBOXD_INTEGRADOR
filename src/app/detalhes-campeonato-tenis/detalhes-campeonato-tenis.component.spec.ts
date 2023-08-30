import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCampeonatoTenisComponent } from './detalhes-campeonato-tenis.component';

describe('DetalhesCampeonatoTenisComponent', () => {
  let component: DetalhesCampeonatoTenisComponent;
  let fixture: ComponentFixture<DetalhesCampeonatoTenisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesCampeonatoTenisComponent]
    });
    fixture = TestBed.createComponent(DetalhesCampeonatoTenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
