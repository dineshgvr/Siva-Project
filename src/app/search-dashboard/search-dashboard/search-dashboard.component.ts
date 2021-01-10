import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.scss']
})
export class SearchDashboardComponent implements OnInit {
  public checkInDate: Date = new Date();
  public checkOutDate = new Date(new Date().setMonth(3));
  constructor() {
  }

  ngOnInit(): void {
  }

}
