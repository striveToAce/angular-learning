import { Component } from "@angular/core";
import { TwoWayComponent } from "../two-way/two-way.component";

@Component({
  selector: 'two-way-parent',
  imports:[TwoWayComponent],
  templateUrl: './two-way-parent.component.html',
})
export class TwoWayParentComponent {
    initialCount = 18
}