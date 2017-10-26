import { AuthGuard } from './auth.guard';
import { ProtectedComponent } from './protected/protected.component';
import { SigninComponent } from './unprotected/signin.component';
import { SignupComponent } from './unprotected/signup.component';
import { Routes, RouterModule } from "@angular/router";


const APP_ROUTES : Routes = [
    {path : 'signup' , component : SignupComponent},
    {path : 'signin' , component : SigninComponent},
    {path : 'protected' , component : ProtectedComponent,canActivate : [AuthGuard]},
    {path : '**' , redirectTo : '/signup', pathMatch : 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);