import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularProject';

  productForm = new FormGroup({
    pvp: new FormControl(''),
    iva: new FormControl(''),
    discount: new FormControl(''),
  });

  productValue = "";

  /* constructor(
    private http : HttpClient
  ) {} */

  setProductValue() {
    this.productValue = JSON.stringify(this.productForm.value);
  }

  /* creatProduct() {
    this.http.post("http://localhost:",this.productForm.value).subscribe(res:any) => this.setProductValue(res)
  } */
}
