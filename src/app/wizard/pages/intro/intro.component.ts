import { Component } from "@angular/core";
import { Router } from "@angular/router";

const json = require('./defaults.json');

@Component({
  selector: "intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent {
  constructor(private router: Router) {}

  launch() {
    this.router.navigate(["/wizard", "launchpad-new-project", 5, encodeURI(btoa(JSON.stringify(json)))]);
  }
}