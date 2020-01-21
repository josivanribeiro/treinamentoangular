import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../../util/config';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  nomeUsuario: string;
  logoutUrl;
  readonly config: ConfigService;
  readonly http: HttpClient;
  readonly route: Router;
  readonly oauthService: OAuthService;
  isRedirecting = true;

  @Input('selecionado') set selecionado(selecionado) {
    this.nomeUsuario = selecionado;
  }

  constructor(oauthService: OAuthService,
              route: Router,
              http: HttpClient,
              config: ConfigService) {
    this.oauthService = oauthService;
    this.route = route;
    this.config = config;
    this.http = http;
  }

  @Output()
  public logout = new EventEmitter();

  ngOnInit() {

  }

  logoutAct() {
    const logoutP1 = this.config.wsoRedirectLogout;
    const logoutP2 = sessionStorage.getItem('id_token');
    const logoutP3 = '&post_logout_redirect_uri=';
    const logoutP4 = this.config.logoutUrl;
    const logoutURL = logoutP1 + logoutP2 + logoutP3 + logoutP4;
    sessionStorage.clear();
    if (this.isRedirecting) {
      window.location.href = logoutURL;
    }
  }

}
