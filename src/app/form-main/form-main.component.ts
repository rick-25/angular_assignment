import { Component, OnInit } from '@angular/core';



interface Text {
  value: string;
}
interface Checkbox {
  values: string[];
}
interface Range {
  value: number;
}



@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {

  options: any[] = [
    {value: ''}, { values: [] }, { value: -1 }
  ];
  
  nums = [1, 2, 3, 4, 5];

  updateStarPos(e: any) {
    const questionNo: number = e.target.parentNode.parentNode.parentNode.parentNode.getAttribute("aria-posinset");
    const option: number = e.target.parentNode.getAttribute("aria-posinset");
    console.log(questionNo, option);

    this.options[questionNo].value = option;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
