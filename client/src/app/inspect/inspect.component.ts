import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import User from '../models/User';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""

  inspectedUser?: User
  error: string = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username).then(response => {
      //console.log(response);
      this.inspectedUser = response ?? undefined;
      this.error = '';
      console.log(this.inspectedUser);
    }, error => {
      this.error = error.message;
      console.log(error.tips);
    });
  }



}
