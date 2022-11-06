import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { UiModule } from '@micro-frontends/ui';
import { AuthGuard, AuthModule } from '@micro-frontends/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'remote1',
          // canActivate: [AuthGuard],
          loadChildren: () =>
            import('remote1/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'remote2',
          // canActivate: [AuthGuard],
          loadChildren: () =>
            import('remote2/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'remote3',
          // canActivate: [AuthGuard],
          loadChildren: () =>
            import('remote3/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
