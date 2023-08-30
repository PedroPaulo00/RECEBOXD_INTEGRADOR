import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCampeonatoBaseballComponent } from './detalhes-campeonato-baseball.component';

describe('DetalhesCampeonatoBaseballComponent', () => {
  let component: DetalhesCampeonatoBaseballComponent;
  let fixture: ComponentFixture<DetalhesCampeonatoBaseballComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesCampeonatoBaseballComponent]
    });
    fixture = TestBed.createComponent(DetalhesCampeonatoBaseballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
