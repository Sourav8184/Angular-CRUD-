import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-employee',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  constructor(
    private empService: EmployeeService,
    private ref: MatDialogRef<AddEmployeeComponent>
  ) {}
  title = 'Add Employee';

  empForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    doj: new FormControl(new Date(), Validators.required),
    role: new FormControl('', Validators.required),
    salary: new FormControl(0, Validators.required),
  });

  jobRoles = [
    'Software Engineer',
    'Data Scientist',
    'Web Developer',
    'UI/UX Designer',
    'Project Manager',
    'DevOps Engineer',
    'Cybersecurity Analyst',
    'Cloud Architect',
    'Machine Learning Engineer',
    'Business Analyst',
  ];

  saveEmployee() {
    if (this.empForm.valid) {
      let _data: Employee = {
        id: this.empForm.value.id as number,
        name: this.empForm.value.name as string,
        doj: new Date(this.empForm.value.doj as Date),
        role: this.empForm.value.role as string,
        salary: this.empForm.value.salary as number,
      };
      this.empService.Create(_data).subscribe((item) => {
        alert('save');
        this.closePopup();
      });
    }
  }

  closePopup() {
    this.ref.close();
  }
}
