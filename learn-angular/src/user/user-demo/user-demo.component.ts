import { Component, input, model, output, signal } from "@angular/core";
import { UserTransferComponent } from "../user-transfer/user-transfer.component";

@Component({
  selector: 'user-demo',
  templateUrl: './user-demo.component.html',
  imports:[UserTransferComponent]
})
export class UserDemoComponent {
    static counter =  0

    // transfer money section
    transferAmount = signal<number>(0);
    userId = signal<string>("");
    




    cashBalance = input<number>();
    sendDataType = model<string>();

    emitUserDemoEvent = output<{message:string,counter:number}>();

    updateSendDataType(type: string){
        this.sendDataType.set(type);
        this.emitUserDemoEvent.emit({
            message:"Hey parent how are you",
            counter:UserDemoComponent.counter++
        });
    }
}
