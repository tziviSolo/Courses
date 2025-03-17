import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CoursesManagementComponent } from './components/courses-management/courses-management.component';
import { allCoursesGuard } from './guards/all-courses.guard';
import { myCoursesGuard } from './guards/my-courses.guard';
import { coursesManagementGuard } from './guards/courses-management.guard';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent }
        ]
    },
    { path: "courses", component: CoursesComponent, canActivate: [allCoursesGuard] },
    { path: "myCourses", component: MyCoursesComponent, canActivate: [myCoursesGuard] },
    { path: "coursesManagement", component: CoursesManagementComponent, canActivate: [coursesManagementGuard] }
];
