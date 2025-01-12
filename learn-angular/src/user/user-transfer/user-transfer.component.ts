import { Component, model } from '@angular/core';
import { users } from '../../data/user';

@Component({
  selector: 'user-transfer',
  templateUrl: './user-transfer.component.html',
  styleUrls: ['./user-transfer.component.css']
})
export class UserTransferComponent {
    transferAmount = model<number>(0);
    userId = model<string>("");
    users = users;
    inputOnChange(event:any){
        this.transferAmount.set(event.target.value);
    }
    selectUser(userId:string){
        this.userId.set(userId);
    }
    transferMoney(){
        console.log(this.transferAmount());
        console.log(this.userId());
    }
}
