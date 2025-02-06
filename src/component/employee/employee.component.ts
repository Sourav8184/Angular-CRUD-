import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee',
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addEmployee() {
    this.dialog.open(AddEmployeeComponent, {
      width: '50%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}
