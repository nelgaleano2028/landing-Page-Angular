import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.models';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit {

  loading: boolean = true;
  public product?: IProducto;

  private _router = inject(ActivatedRoute);
  private _apiServices = inject(ApiService);

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this._apiServices.getProductById(params['id']).subscribe((data: IProducto) => {
        this.product = data;
        this.loading = false;
      });
    });
  }

  goBack(): void {
    window.history.back();
  }
}
