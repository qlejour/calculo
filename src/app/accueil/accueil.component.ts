import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { CalculService } from '../calcul.service';
import { UserServiceService } from '../user-service.service';
import { User } from 'firebase';
import { UserAuthentifie } from '../loggedUserNameSpace';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit, OnDestroy {

  choixOperations = [];
  loggedUser: User = null;
  difficulte: number;

  constructor(
    public calculService: CalculService,
    public userService: UserServiceService
  ) { }

  ngOnInit() {
    this.checkIfUserAuthenticated();
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    $('.my_tooltip').tooltip({ html: true });
  }

  checkIfUserAuthenticated(): void {
    console.log('namespace' + UserAuthentifie.userLogged.name);
    this.loggedUser = this.loggedUser;
  }

  loggedUserIsTrue(): Boolean {
    return UserAuthentifie.userLogged.name !== 'ERREUR';
  }

  addOperation(operation: string) {
    if (this.choixOperations.includes(operation)) {
      this.choixOperations.splice(this.choixOperations.indexOf(operation), 1);
    } else {
      this.choixOperations.push(operation);
    }
  }

  setDifficulty(difficulteChosen: number) {
    this.difficulte = difficulteChosen;
  }

  ngOnDestroy() {
    this.calculService.choixOperations = this.choixOperations;
  }
}


