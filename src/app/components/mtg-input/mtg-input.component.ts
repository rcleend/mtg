import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mtg-input',
  templateUrl: './mtg-input.component.html',
  styleUrls: ['./mtg-input.component.scss'],
})
export class MtgInputComponent implements OnInit {

  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {}

}
