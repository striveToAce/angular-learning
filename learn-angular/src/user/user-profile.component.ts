import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  firstName = signal('John');
  lastName = signal('Smith');
  balance = signal(100);

  getFullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  updateFirstName(newFirstName: string) {
    this.firstName.set(newFirstName);
  }
  updateLastName(newLastName: string) {
    this.lastName.set(newLastName);
  }
  increaseBalance(amount: number) {
    this.balance.update(balance => balance + amount);
  }

  decreaseBalance(amount: number) {
    this.balance.update(balance => balance - amount);
  }
}
