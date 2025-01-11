import { Component, computed, inject, signal } from "@angular/core";
import { UserService } from "./user.service";

interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  date: string;
}

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {

  private userService = inject(UserService);

  firstName = signal('John');
  lastName = signal('Smith');
  balance = signal(100);
  transactions = signal<Transaction[]>([]);

  getFullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  updateFirstName(newFirstName: string) {
    this.firstName.set(newFirstName);
  }
  updateLastName(newLastName: string) {
    this.lastName.set(newLastName);
  }

  increaseBalance(amount: number) {
    this.balance.update(balance => balance + amount);
    this.transactions.update(transactions => [...transactions, {
      id: crypto.randomUUID(),
      amount: amount,
      type: 'deposit',
      date: this.userService.getDateTimeFormatted(),
    }]);
  }

  decreaseBalance(amount: number) {
    this.balance.update(balance => balance - amount);
    this.transactions.update(transactions => [...transactions, {
      id: crypto.randomUUID(),
      amount: amount,
      type: 'withdrawal',
      date: this.userService.getDateTimeFormatted(),
    }]);
  }
}
