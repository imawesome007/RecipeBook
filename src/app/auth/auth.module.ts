import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import {  AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent],

    imports: [
        FormsModule,
        CommonModule,
        AuthRoutingModule
    ]
})

export class AuthModule {

} 