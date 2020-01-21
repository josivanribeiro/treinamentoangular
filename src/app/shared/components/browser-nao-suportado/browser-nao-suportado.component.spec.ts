import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserNaoSuportadoComponent } from './browser-nao-suportado.component';

describe('BrowserNaoSuportadoComponent', () => {
  let component: BrowserNaoSuportadoComponent;
  let fixture: ComponentFixture<BrowserNaoSuportadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserNaoSuportadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserNaoSuportadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
