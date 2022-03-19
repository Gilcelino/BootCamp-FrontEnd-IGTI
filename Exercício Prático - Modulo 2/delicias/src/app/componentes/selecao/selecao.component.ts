import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent implements OnInit {
  @Input() titulo: String = '';
  @Input() opcoes: String[] = [];
  @Input() escolhaAte: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
