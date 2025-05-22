import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { UpdateUserDTO } from '../models/DTOs/updateUser-dto';
import { UserDTO } from '../models/DTOs/user-dto';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {



   updateUserForm : FormGroup = new FormGroup({});
  
   validationErrors = [];

   updatedUser : UpdateUserDTO = {};

   user : UserDTO = {};

   errorMessage : string = "";
  
    constructor(private userService : UserService,private router : Router){}

  
   ngOnInit(): void {
  
      this.updateUserForm = new FormGroup({
  
        Username : new FormControl(''),

        Password : new FormControl(''),
  
        NewPassword : new FormControl(''),

        ConfirmPassword : new FormControl(''),
  
        Email : new FormControl(''),
  
        Neighbourhood : new FormControl(''),
  
        Street : new FormControl(''),
  
        City : new FormControl(''),
  
        PostalCode : new FormControl(''),
  
        Adress : new FormControl(''),
  
        PhoneNumber : new FormControl(''),
  
      });

      this.userService.getUser().subscribe({
        next : (data) =>{
          this.user = data;

          this.updateUserForm = new FormGroup({
  
        Username : new FormControl(this.user.username),

        Password : new FormControl(''),
  
        NewPassword : new FormControl(''),

        ConfirmPassword : new FormControl(''),
  
        Email : new FormControl(this.user.email),
  
        Neighbourhood : new FormControl(this.user.neighbourhood),
  
        Street : new FormControl(this.user.street),
  
        City : new FormControl(this.user.city),
  
        PostalCode : new FormControl(this.user.postalCode),
  
        Adress : new FormControl(this.user.adress),
  
        PhoneNumber : new FormControl(this.user.phoneNumber),
  
      });


        }
      })
      
    }


   
onSubmitPassword() {
  this.updatedUser = this.updateUserForm.value;

  this.userService.updateUserPassword(this.updatedUser).subscribe({
    next : () => {
      console.log("İşlem başarıyla tamamlandı.");
      this.router.navigate(['/home']);
    },
    error : (err) => {

      this.errorMessage = err.error.message;
      console.error("Bir hata oluştu");
    }
  })
}

onSubmitProfile() {
  this.updatedUser = this.updateUserForm.value;

  this.userService.updateUserProfile(this.updatedUser).subscribe({
    next : () => {
      console.log("İşlem başarıyla tamamlandı.");
      this.router.navigate(['/home']);
    },
    error : (err) => {

      this.validationErrors = err.error.errors;
      console.error("Bir hata oluştu");
    }
  })
}

}
