import { Component, OnInit } from '@angular/core';


interface Question {
  id: number;
  text: string;
  required: boolean;
  valueType: string;
  selectedValue?: string | boolean;
}

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {

  questions?: Question[] = [
    {
      id: 1,
      text: 'Are you gay',
      required: true,
      valueType: 'text'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
