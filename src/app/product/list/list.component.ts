import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import Crud from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  crud: Crud[];
  constructor(private service: CrudService, private router: Router) {
    this.refresh();
   }

  ngOnInit() {

  }

  refresh() {
    this.service.getData().subscribe((data: Crud[]) => {
        this.crud = data;
      });
  }
  deleteData(id) {
    this.service.deleteData(id).subscribe(async res => {
      this.crud.splice(id, 1);
      this.refresh();
    });
  }

  editData(id){
    this.router.navigate([`/products/edit/${id}`])
  }

}
