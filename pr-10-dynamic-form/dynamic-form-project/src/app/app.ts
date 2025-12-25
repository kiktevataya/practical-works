import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { noTestWordValidator } from './name.validator';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html'
})
export class App implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, noTestWordValidator]],
      skills: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    });
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(
      this.fb.control('', Validators.required)
    );
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit(): void {
  console.log('SUBMIT WORKS');
  console.log(this.userForm.value);
}
}
