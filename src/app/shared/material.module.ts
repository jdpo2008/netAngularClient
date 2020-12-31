import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class MaterialModule {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerProviderIcons();
  }

  registerProviderIcons() {
    this.iconRegistry
      .addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi/google.svg'))
      .addSvgIcon('apple', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi/apple.svg'))
      .addSvgIcon('google-colored', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/google.svg'))
      .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/facebook.svg'))
      .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi/twitter.svg'))
      .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi/github-circle.svg'))
      .addSvgIcon('microsoft', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi/microsoft.svg'))
      .addSvgIcon('yahoo', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/mdi/yahoo.svg'))
      .addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/phone.svg'));
  }
}
