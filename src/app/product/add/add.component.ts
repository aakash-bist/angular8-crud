import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  productForm: FormGroup;
  pageType: string;
  id: string;
  formData: any = {};
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private service: CrudService) {
    this.createForm();
    this.pageType = this.route.snapshot.paramMap.get('handle');
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDataById();
  }

  createForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.pageType);
  }
  addData(): void {
    console.log(this.productForm.value);
    this.service.addData(this.productForm.value).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  getDataById() {
    console.log(this.id);
    this.service.getDataById(this.id).subscribe(data => {
     this.productForm.patchValue({
      name: data['name'],
      price: data['price'],
      comment: data['comment'],
     })
    })
  }

  updateData(){
    const data = this.productForm.value;
    this.service.updateData(data, this.id).subscribe(() => {
    this.router.navigate(['/products']);
    })
  }
}
