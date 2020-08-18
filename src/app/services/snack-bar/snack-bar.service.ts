import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef
} from '@angular/material';
import { ErrorSnackBarComponent } from 'src/app/components/error-snack-bar/error-snack-bar.component';
import { SuccessSnackBarComponent } from 'src/app/components/success-snack-bar/success-snack-bar.component';

@Injectable()
export class SnackBarService {
  snackBarRef: MatSnackBarRef<any>;

  constructor(private snackBar: MatSnackBar) { }

  error(message: string, options?: MatSnackBarConfig) {
    this.openSnackBar(ErrorSnackBarComponent, {
      ...options,
      data: { message }
    })
  }

  success(message: string, options?: MatSnackBarConfig) {
    this.openSnackBar(SuccessSnackBarComponent, {
      ...options,
      data: { message }
    })
  }

  private openSnackBar(component, options?: MatSnackBarConfig<{ message: string }>) {
    const config: MatSnackBarConfig = {
      panelClass: '',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
      ...options
    };

    this.snackBarRef = this.snackBar.openFromComponent(component, config);
}

}
