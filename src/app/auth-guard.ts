import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const isLoggedIn = false;
  return isLoggedIn;
};
