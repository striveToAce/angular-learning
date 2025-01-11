import { Component, computed, inject, signal, viewChild } from "@angular/core";
import { UserService } from "./user.service";
import { UserDemoComponent } from "./user-demo/user-demo.component";

interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  date: string;
}

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  imports: [UserDemoComponent],
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {

  private userService = inject(UserService);


  childContents = viewChild(UserDemoComponent);

  firstName = signal('John');
  lastName = signal('Smith');
  transactionError = signal('');
  balance = signal(100);
  sendDataTypeSignal = signal('email');
  transactions = signal<Transaction[]>([]);

  userDemoEmitAlert = (event:{message:string,counter:number})=>{
    console.log('::USER DEMO EMII FOUND::',event);
  }

  getFullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  updateFirstName(newFirstName: string) {
    this.firstName.set(newFirstName);
  }
  updateLastName(newLastName: string) {
    this.lastName.set(newLastName);
  }
  performTransaction(amount:number,type:'deposit'|'withdrawal'){
    const approval = this.userService.transactionApproval(amount,this.balance());
    if(approval.isApproved){
      if(type === 'deposit'){
        this.increaseBalance(amount);
      }else{
        this.decreaseBalance(amount);
      }
    }
    else{
      this.transactionError.set(approval.message);
      setTimeout(() => {
        this.transactionError.set('');
      }, 2000);
    }
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
