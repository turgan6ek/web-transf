import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {fadeInUp400ms} from '../../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  animations: [fadeInUp400ms]
})
export class FilterPanelComponent implements OnInit {

  selectCtrl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
