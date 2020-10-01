import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";


import { User } from '../../models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {

    confirmEmailUrl = "http://localhost:4200/confirm-email/";
    changePasswordUrl = "http://localhost:4200/change-password/";

    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    decodedToken: any;
    currentUser: User;
    helper = new JwtHelperService();

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(model: any) {
        return this.http.post<User>(`${environment.apiUrl}/api/login`, model)
            .pipe(map((response: any) => {
                const user = response;
                if (user.result.succeeded) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('user', JSON.stringify(user.userToReturn));
                    this.userSubject.next(user);
                    this.decodedToken = this.helper.decodeToken(user.token);
                    this.currentUser = user.userToReturn;  
                }
            }));
    }

    register(user: User) {
        let headers = new HttpHeaders({
            confirmEmailUrl: this.confirmEmailUrl
        });
        let options = { headers: headers };
        return this.http.post(`${environment.apiUrl}/api/signup`, user, options);
    }

    resetPassword(model: any) {
        let headers = new HttpHeaders({
            changePasswordUrl: this.changePasswordUrl
        });
        let options = { headers: headers };
        return this.http.post(`${environment.apiUrl}/api/reset-password`, model, options);
    }

    confirmEmail(model: any) {
        return this.http.post(`${environment.apiUrl}/api/confirm-email`, model);
    }

    changePassword(model: any) {
        return this.http.post(`${environment.apiUrl}/api/change-password`, model);
    }


    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/api/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/api/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/api/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                   // this.logout();
                }
                return x;
            }));
    }

    loggedIn() {
        const token = localStorage.getItem("token");
        return !this.helper.isTokenExpired(token);
    }
}