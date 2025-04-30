import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDTO } from 'src/app/models/DTOs/product-dto';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  
  constructor(private productService : ProductService,private router : Router,private http : HttpClient,private route : ActivatedRoute){}

  product: Product = {

    productDescription : '',
    productImage : '',
    productName : '',
    productPrice : '',
    id : 0,
    rowGuid : ''
   
  };
  
    private apiUrl = environment.apiUrl;
     imageUrl = environment.imageUrl;
  
    imageUpdated : string = '';
  
    selectedFile : File | null = null;
  
    productForm : FormGroup = new FormGroup({});
  
    validationErrors = [];
  
    imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id){

      this.productService.get(id).subscribe({
        next : (data) => {
          
          this.product = data;
          console.log('Başarıyla tamamlandı.');
        },
        error : (err) => {
          console.error(err?.error?.errorMessage);
        }
      })
    }
   this.productForm = new FormGroup({
    
         ProductName : new FormControl(this.product.productName),
         ProductDescription : new FormControl(this.product.productDescription),
         ProductPrice : new FormControl(this.product.productPrice),
         ProductImage : new FormControl(''),
         Id : new FormControl(''),
         RowGuid : new FormControl('')

   
       });
    
  }
  onSubmit(){

    let editedProduct : ProductDTO = this.productForm.value;

    editedProduct.Id = this.product.id;
    editedProduct.RowGuid = this.product.rowGuid;

    const formData : FormData = new FormData();

    formData.append('Id',editedProduct.Id);
    formData.append('RowGuid',editedProduct.RowGuid);
    formData.append('ProductName',editedProduct.ProductName);
    formData.append('ProductDescription',editedProduct.ProductDescription);
    formData.append('ProductPrice',editedProduct.ProductPrice);
    formData.append('ProductImage',this.selectedFile != null ? this.selectedFile : 'saaaa');
    
    this.productService.updateProduct(formData).subscribe({

      next : () => {

        console.log("İşlem başarıyla tamamlandı.")

        this.router.navigate(['admin/products']);
      },
      error : () =>{

        console.error("Bir sıkıntı çıktı");

      }
    })
    
        


  }

  uploadFile(event : any){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];


      const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    this.imageUpdated = 'imageUpdated';
    }
    else{

      this.selectedFile = null;
    }

    


  }

}
