import { CanActivateFn } from '@angular/router';

export const coursesManagementGuard: CanActivateFn = (route, state) => {
  const userDetails = JSON.parse(sessionStorage.getItem('user') ?? "");
  return userDetails.role == "teacher" || userDetails.role == "admin";
};
