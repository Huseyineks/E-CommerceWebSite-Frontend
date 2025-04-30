import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductDTO } from '../../models/DTOs/product-dto';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  constructor(private productService : ProductService,private router : Router,private http : HttpClient){}

  private apiUrl = environment.apiUrl;

  imageExisted : string = '';

  selectedFile : File | null = null;

  productForm : FormGroup = new FormGroup({});

  validationErrors = [];

  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    
    this.productForm = new FormGroup({
 
      ProductName : new FormControl(''),
      ProductDescription : new FormControl(''),
      ProductPrice : new FormControl(''),
      ProductImage : new FormControl('')

    });
  }

  onSubmit(){
    
    let productDTO : ProductDTO = this.productForm.value;


    const formData : FormData = new FormData();

    formData.append('ProductName',productDTO.ProductName);
    formData.append('ProductDescription',productDTO.ProductDescription);
    formData.append('ProductPrice',productDTO.ProductPrice);
    formData.append('ProductImage',this.selectedFile != null ? this.selectedFile : 'saaaa');


    

    
    

    this.productService.addProduct(formData).subscribe({

      next : () => {

        this.router.navigate(['']);

      },
      error : (err) => {

        this.validationErrors = err.error.errors;
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
    this.imageExisted = 'imageExisted';
    }
    else{

      this.selectedFile = null;
    }

    


  }

 



  

  
}
