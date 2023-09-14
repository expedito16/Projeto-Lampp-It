import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  id: number;
  client: Client = new Client();

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    }, error => console.log(error));
  }

  onSubmit(): void{
    this.clientService.updateClient(this.id, this.client).subscribe(() =>{
      this.goToClientList();
    }
    , error => console.log(error));
  }

  goToClientList(): void{
    this.router.navigate(['/clients']);
  }
}
