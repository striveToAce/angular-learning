import { Component, input, model, output, signal } from "@angular/core";

@Component({
  selector: 'user-demo',
  templateUrl: './user-demo.component.html',
})
export class UserDemoComponent {
    static counter = 0
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
