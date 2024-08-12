/**
 * Creation Date: 2024-05-15
 * Author: Guilherme Cesar
 * Developed by: Inatel Competence Center
 * Copyright © 2024 CAS Tecnologia
 * All rights are reserved. Reproduction in whole or part is prohibited without the written
 * consent of the copyright owner.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../store/auth-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authServiceStore: AuthStoreService,
    private route: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (route.routeConfig && route.routeConfig.path === 'login') {
      return true;
    }

    const token = this.authServiceStore.getToken();

    if (!token || this.isTokenExpired(token)) {
      this.route.navigate(['login']);
      return false;
    }

    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private isTokenExpired(token: string): boolean {
    //TODO
    return false;
  }
}
