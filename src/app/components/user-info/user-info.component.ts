import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.firstName = this.userService.fistName;
    this.lastName = this.userService.lastName;
  }
}
