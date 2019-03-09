import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {tap, map, take} from 'rxjs/operators'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map(authState => !!authState),
      tap(auth => !auth ? this.router.navigate(['/signin']) : true)
    )
  }
}
