import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCampeonatoComponent } from './detalhes-campeonato.component';

describe('DetalhesCampeonatoComponent', () => {
  let component: DetalhesCampeonatoComponent;
  let fixture: ComponentFixture<DetalhesCampeonatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesCampeonatoComponent]
    });
    fixture = TestBed.createComponent(DetalhesCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
