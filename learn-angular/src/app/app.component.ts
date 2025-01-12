import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from '../user/user-profile.component';
import { TwoWayParentComponent } from '../two-way-parent/two-way-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, TwoWayParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
}
