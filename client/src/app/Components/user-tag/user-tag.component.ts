import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.css']
})
export class UserTagComponent implements OnInit {

  @Input() tagName: string = ''
  @Input() tagValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
