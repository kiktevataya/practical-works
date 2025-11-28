import { Component } from '@angular/core';
import { User } from './user.interface';
import { UserStatus } from './user-status.enum';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User = {
    id: 1,
    name: 'John Doe',
    status: UserStatus.Active,
    address: {
      city: 'Kyiv',
      street: 'Shevchenka 12'
    },
    hobbies: ['Football', 'Cooking', 'Gaming']
  };

  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}
