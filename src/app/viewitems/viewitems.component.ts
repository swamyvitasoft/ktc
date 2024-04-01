import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css'],
})
export class ViewitemsComponent implements OnInit {
  constructor(private api: AdminserviceService, private router: Router) {}
  items: any;
  ngOnInit(): void {
    this.allItems();
  }
  allItems(){
    this.api.getItems().subscribe((res) => {
      this.items = res;
    });
  }
  edit(row: any){
    this.router.navigate(['/additem']);
  }
  delete(data: any){
    this.api.deleteItem(data).subscribe((res:any) => {
      this.allItems();
      this.router.navigate(['/viewitems']);
    });
  }
}
