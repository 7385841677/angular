import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureEmitter = new EventEmitter<string>();
 
  loggedInStatus: String;

  onSelect(feature: string) {
    this.featureEmitter.emit(feature);
  }

  constructor(private authService: AuthService){
    this.loggedInStatus= authService.loggedIn ? "user logged in": "User Logged Out"
  }

}
