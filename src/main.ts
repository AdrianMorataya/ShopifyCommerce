import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/auth/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
}).catch(console.error);