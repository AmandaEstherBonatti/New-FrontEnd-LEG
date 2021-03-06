import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/guard/auth.guard';
import { ClientService } from 'src/services/client.service';
import { LoginService } from 'src/services/login.service';
import { RestaurantService } from 'src/services/restaurant.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(
    public serviceClient: ClientService,
    public serviceRestaurant: RestaurantService,
    public serviceLogin: LoginService,
  ) {}
    
  
  
 

  ngOnInit(): void {}
}
