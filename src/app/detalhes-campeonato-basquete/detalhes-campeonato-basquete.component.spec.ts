import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCampeonatoBasqueteComponent } from './detalhes-campeonato-basquete.component';

describe('DetalhesCampeonatoBasqueteComponent', () => {
  let component: DetalhesCampeonatoBasqueteComponent;
  let fixture: ComponentFixture<DetalhesCampeonatoBasqueteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesCampeonatoBasqueteComponent]
    });
    fixture = TestBed.createComponent(DetalhesCampeonatoBasqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
