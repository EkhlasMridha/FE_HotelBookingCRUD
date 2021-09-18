import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './api-interceptor.service';

interface Providers {
  provide: any;
  useClass: any;
  multi: boolean;
}

export const interceptorProvider: Providers[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorService,
    multi: true,
  },
];
