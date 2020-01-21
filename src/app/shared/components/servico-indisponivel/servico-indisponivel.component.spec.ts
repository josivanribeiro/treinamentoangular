import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoIndisponivelComponent } from './servico-indisponivel.component';
import { ConfigService } from '../../../../util/config';
import { HttpClientModule } from '@angular/common/http';

describe('ServicoIndisponivelComponent', () => {
  let component: ServicoIndisponivelComponent;
  let fixture: ComponentFixture<ServicoIndisponivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoIndisponivelComponent ],
      providers: [
        ConfigService
      ],
      imports: [
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoIndisponivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

