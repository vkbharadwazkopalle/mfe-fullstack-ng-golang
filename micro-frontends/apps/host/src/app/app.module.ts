import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'remote1',
          loadChildren: () =>
            import('remote1/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'remote2',
          loadChildren: () =>
            import('remote2/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'remote3',
          loadChildren: () =>
            import('remote3/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
