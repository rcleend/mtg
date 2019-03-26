import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  successCallback(){
    this.router.navigate(['./tabs/'])
  }

}
