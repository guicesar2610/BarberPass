/**
 * Creation Date: 2023-04-14
 * Author: Guilherme Cesar da Silva
 * Developed by: Inatel Competence Center
 * Copyright © 2023 CAS Tecnologia
 * All rights are reserved. Reproduction in whole or part is prohibited without the written
 * consent of the copyright owner.
 */

export interface IAuthResult {
  access_token: string;
  expires_in: number;
  token_type: string;
  is_admin: boolean;
}
