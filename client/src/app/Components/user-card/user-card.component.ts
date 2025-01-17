import { Component, Input, OnInit } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user?: User = undefined
  @Input() error: string = ''
  @Input() imageUrl: string = ''
  @Input() winner: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
