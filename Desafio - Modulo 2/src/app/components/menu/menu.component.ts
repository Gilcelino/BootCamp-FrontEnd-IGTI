import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interfaces/imenu';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: IMenu[] = []

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.orderService.getMenu().subscribe(itens => {
      this.menu = itens;
    });
  }

  getCategory(): String[] {
    let categoria: String[] = [];

    this.menu.map(item => item.categoria).reduce((x, y) => {
      if (categoria.find(cat => cat == x)) {
        return y;
      }
      categoria.push(x)
      return y;
    });
    return categoria;
  }

  getItemCategoria(categoria: any): IMenu[] {

    return this.menu.filter(item => item.categoria === categoria);
  }
}
