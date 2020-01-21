import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../../../../util/config';

@Component({
  selector: 'app-servico-indisponivel',
  templateUrl: './servico-indisponivel.component.html',
  styleUrls: ['./servico-indisponivel.component.css']
})
export class ServicoIndisponivelComponent implements OnInit {
  pathContext: string;
  readonly config: ConfigService;

  constructor(config: ConfigService) {
    this.config = config;
  }

  ngOnInit() {
    this.pathContext = this.config.pathContext + 'assets/img/Indisponivel.jpg';

  }

}
