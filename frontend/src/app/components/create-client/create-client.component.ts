import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  client: Client = new Client();
  clientForm: FormGroup;

  constructor (
    private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.clientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
          Validators.required,
          Validators.email
      ]],
      phone: ['', Validators.required]
    });
  }

  saveClient(): void {
    this.clientService.createClient(this.clientForm.value).subscribe( data =>{
      console.log(data);
      this.goToClientList();
    },
    error => console.log(error));
  }

  goToClientList(): void{
    this.router.navigate(['/clients']);
  }
  
  onSubmit(): void{
    this.saveClient();
  }
}
