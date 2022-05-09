import { Component, OnInit } from '@angular/core';
import { Report } from '../Report';





@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {

  selectedOption: Report;
  
  updateContest(e: any) {
    let contests = this.selectedOption.contests;
    const value = e.target.value;
    const index = contests.indexOf(value);
    if(index === -1) contests.push(value);
    else contests.splice(index, 1);
  }
  updateQuality(e: any) {
    const option: number = e.target.parentNode.getAttribute("aria-posinset");
    this.selectedOption.quality = option;
  }
  showReport(e: any) {
    alert(`Collected data ... \nName: ${this.selectedOption.name}\nContests: ${this.selectedOption.contests}\nQuality: ${this.selectedOption.quality}`);

  }
  constructor() { 
    this.selectedOption = {
      name: '',
      contests: [],
      quality: -1
    };
  }

  ngOnInit(): void {
  }

}
