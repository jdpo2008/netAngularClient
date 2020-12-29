import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faUserCircle,
  faAsterisk,
} from '@fortawesome/free-solid-svg-icons';
import {
  faMediumM,
  faGithub,
  faFacebookF,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { MaterialModule } from './material.module';

//import { ControlMessagesComponent } from './component/control-messages/control-messages.component';
//import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //MaterialModule,
    //NgbModule,
    FontAwesomeModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    //NgbModule,
    FontAwesomeModule,
    //ControlMessagesComponent,
    //SpinnerComponent
  ],
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faGithub,
      faMediumM,
      faFacebookF,
      faTwitter,
      faGoogle,
      faYoutube,
      faInstagram,
      faLinkedin,
      faPlus,
      faEdit,
      faTrash,
      faTimes,
      faCaretUp,
      faCaretDown,
      faExclamationTriangle,
      faFilter,
      faTasks,
      faCheck,
      faSquare,
      faLanguage,
      faPaintBrush,
      faLightbulb,
      faWindowMaximize,
      faStream,
      faBook,
      faUserCircle,
      faAsterisk
    );
  }
}
