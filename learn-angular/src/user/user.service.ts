import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    lastTime = signal<number | null>(null);
    getDateTimeFormatted(): string {
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(new Date());
    }
   
    transactionApproval(amount: number, limit: number): {
        isApproved: boolean;
        message: string;
    } {
        const lastTime  = this.lastTime()
        if(lastTime){
            const timeDifference = new Date().getTime() - lastTime;
            console.log(lastTime, new Date().getTime());
            console.log(timeDifference);
            if(timeDifference < 1000 * 20){
                const secondsRemaining = Math.ceil((1000 * 20 - timeDifference) / 1000);
                return {
                    isApproved: false,
                    message: `Transaction declined! try after ${secondsRemaining} sec`
                };
            }
        } 
        
        const isAmountApproved = amount <= limit;
        const isApproved =  isAmountApproved;
    
        let message = 'Transaction approved';
        if (!isApproved) {
                message = 'Transaction not approved due to amount exceeding limit';
        }
        this.lastTime.set(new Date().getTime());
    
        return {
            isApproved,
            message
        };
    }
}
