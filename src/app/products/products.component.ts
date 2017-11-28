import { Component, OnInit } from "@angular/core";
import { ProductDto } from "../../shared/models";
import { UserService } from '../../shared/services/user.service';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Array<ProductDto> = [];

  p: number = 1;
  pageSize: number = 15;
  total: number = 0;
  skip: number = 0;

  search :string ="";

  constructor(private productsService:ProductsService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getAll(this.skip, this.pageSize).then((resp) => {
      this.products = resp;

      this.products.map((xx) => {
        if(xx.description.length > 150) {
          xx.description = xx.description.substring(0,150) + "...";
        }
      })

      this.total = this.products[0].totalCount;
    }).catch();
  }

  pageChanged($event: number) {
    this.p = $event;
    this.skip = ($event -1 ) * this.pageSize;
    this.loadProducts();
  }
}
