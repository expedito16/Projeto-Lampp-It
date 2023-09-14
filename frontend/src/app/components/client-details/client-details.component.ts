import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: number
  client: Client

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.viewCustomerDetails();
  }

  viewCustomerDetails(): void {
    this.id = this.route.snapshot.params['id'];
    this.client = new Client();
    this.clientService.getClientById(this.id).subscribe( data => {
      this.client = data;
    });
  }

  goToClientList(){
    this.router.navigate(['/clients']);
  }
}
