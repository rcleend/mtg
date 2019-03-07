import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {tap, map, take} from 'rxjs/operators'

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
      tap(auth => !auth ? this.router.navigate(['/login']) : true)
    )
  }
}
