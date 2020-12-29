import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  title = 'netAngularClient';

  ngOnInit(): void {
    this.authService
      .AuthenticateAsync({
        Email: 'jdpo2008@gmail.com',
        Password: '123Pa$$word!',
      })
      .subscribe((resp) => console.log(resp));
  }
}
