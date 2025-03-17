import { CanActivateFn } from '@angular/router';

export const myCoursesGuard: CanActivateFn = (route, state) => {
  const userDetails = JSON.parse(sessionStorage.getItem('user') ?? "{}");
  return userDetails.role == "student" || userDetails.role == "admin";
};
