import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OAuthService, UrlHelperService, OAuthLogger } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { PesquisaCPFCNPJComponent } from '../../../home/pesquisa-cpf-cnpj/pesquisa-cpf-cnpj.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TopoComponent } from './topo.component';
import { ConfigService } from '../../../../util/config';
import { Ng2BRPipesModule } from 'ng2-brpipes';

describe('TopoComponent', () => {
  let component: TopoComponent;
  let fixture: ComponentFixture<TopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoComponent,
        PesquisaCPFCNPJComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        OAuthService,
        UrlHelperService,
        OAuthLogger,
        ConfigService
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot(
          [
            { path: '', component: PesquisaCPFCNPJComponent}
          ]
        ),
        Ng2BRPipesModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve invocar o método logoutAct', () => {
    component.isRedirecting = false;
    fixture.detectChanges();
    component.logoutAct();
  });

});

