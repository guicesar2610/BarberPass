/**
 * Creation Date: 2024-05-15
 * Author: Guilherme Cesar da Silva
 * Developed by: Inatel Competence Center
 * Copyright © 2024 CAS Tecnologia
 * All rights are reserved. Reproduction in whole or part is prohibited without the written
 * consent of the copyright owner.
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAuthResult } from '../interfaces/iauth-result.interface';

@Injectable()
export class AuthStoreService {
  private userData = new BehaviorSubject<IAuthResult | null>({
    access_token: '',
    expires_in: 0,
    token_type: '',
    is_admin: false,
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    /* TODO document why this constructor is empty */
  }

  setAuthResult(authPayload: IAuthResult, isAdm?: boolean): void {
    if (isAdm != null) {
      localStorage.setItem('is_admin', JSON.stringify(isAdm));
    } else {
      localStorage.setItem('is_admin', JSON.stringify(authPayload.is_admin));
    }
    localStorage.setItem('token', JSON.stringify(authPayload.access_token));

    this.userData.next(authPayload);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token ? token.replace(/^"(.*)"$/, '$1') : null;
  }

  getIsAdmin(): boolean {
    const isAdmin = localStorage.getItem('is_admin');
    return isAdmin === 'true';
  }

  clearAuthResult(): void {
    localStorage.clear();
    this.userData.next(null);
  }
}
