import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent }
        ]
    },
    { path: "courses", component: CoursesComponent }
];