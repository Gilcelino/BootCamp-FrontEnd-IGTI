import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent implements OnInit {
  @Input() titulo: String = '';
  @Input() opcoes: String[] = [];
  @Input() escolhaAte: number = 1;

  opcoesSelecionadas: { index: number; item: string }[] = [];

  objetoHabilitado: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onChange(i: number, value: boolean) {
    const item = { index: i, item: this.opcoes[i].toString() };

    if (value) {
      this.opcoesSelecionadas.push(item);
    } else {
      this.opcoesSelecionadas.splice(this.retornaIndexItemSelecionado(item), 1);
    }

    this.objetoHabilitado = this.opcoesSelecionadas.length < this.escolhaAte;
  }

  retornaIndexItemSelecionado = (item: any) =>
    this.opcoesSelecionadas.findIndex(
      (user, index, array) => user.index === item.index
    );
}
