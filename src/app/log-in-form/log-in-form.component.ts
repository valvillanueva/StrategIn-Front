import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  submit() {
    if (this.form.valid) {
      this.authService.register(this.form.value).subscribe(
        (response) => {
          console.log('Login successful');
          console.log(response);
        },
        (error) => {
          console.log('Login failed');
          this.error = error.error.message;
        }
      );
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();
}
