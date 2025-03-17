import { CanActivateFn } from '@angular/router';

export const allCoursesGuard: CanActivateFn = (route, state) => {
  const userDetails = JSON.parse(sessionStorage.getItem('user') ?? "");
  return userDetails.role == "student";
};
