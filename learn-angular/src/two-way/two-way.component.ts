import { Component, EventEmitter, input, Input, Output, output } from "@angular/core";

@Component({
    selector: 'two-way',
    templateUrl: './two-way.component.html',
})
export class TwoWayComponent {
    @Input() count: number = 1;
    @Output() countChange = new EventEmitter<number>();
    updateCount(amount: number): void {
        this.count += amount;
        this.countChange.emit(this.count);
    }

} 