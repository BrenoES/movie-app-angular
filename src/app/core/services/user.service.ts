import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get user() {
    const user = localStorage.getItem('user');
    return user ? (JSON.parse(user) as firebase.User) : null;
  }

  saveUser(user: firebase.User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
