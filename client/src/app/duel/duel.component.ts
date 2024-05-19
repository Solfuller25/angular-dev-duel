import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import User from '../models/User';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  winner: string = ""
  users?: User[]
  error: string = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  /** This method calculates who wins the duel. The winner is the user
  **  who has the most total count of the letters 'w', 'i', and 'n' in 
  **  their bio. If one user does not have a bio, and the other does, the
  **  user with the bio wins. If neither have a bio, or there is a tie,
  **  a coin is flipped to determine the winner of the duel.
  **/
  calculateWinner(response?: User[]) {
    if (response !== undefined) {
      let userOne = response[0];
      let userTwo = response[1];

      const regX = /[win]/gi
      let bioOneLength = ((userOne.bio || '').match(regX) || []).length;
      let bioTwoLength = ((userTwo.bio || '').match(regX) || []).length;

      if (bioOneLength > bioTwoLength) {
        return userOne.username;
      } else if (bioTwoLength > bioOneLength) {
        return userTwo.username;
      } else {
        // Coin flip
        return Math.round(Math.random()) ? userOne.username : userTwo.username;
      }
    } else {
      return "";
    }
  }

  onSubmit() {
    this.userService.duelUsers(this.usernameOne, this.usernameTwo).then(response => {
      this.users = response;
      this.winner = this.calculateWinner(response ?? undefined);
      this.error = '';
      console.log(this.winner);
    }, error => {
      this.error = error.message;
    });
  }
}
