import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '@app/guards/auth.guard';
//import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { throwIfAlreadyLoaded } from '@app/guards/module-import.guard';

import { TokenInterceptor } from '@app/interceptors/http-token.interceptor';
import { HttpErrorInterceptor } from '@app/interceptors/http-error.interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthGuard,
    //NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
