import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/DTOs/user-dto';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 

  customers : UserDTO[] = [];
  filteredCustomers : UserDTO[] = [];

  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {

      this.customers = data;
      this.filteredCustomers = data;
    })

    
  }

  onChange(event : Event){

    const inputValue = (event.target as HTMLInputElement).value;

    this.filteredCustomers = this.customers.filter(i => i.username?.toLowerCase().includes(inputValue.toLowerCase()));
  }

}
