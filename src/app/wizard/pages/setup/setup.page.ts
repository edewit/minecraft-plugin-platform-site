import { Component, Input } from "@angular/core";
import { Gui } from "ngx-forge";

@Component({
  selector: "setup",
  templateUrl: "setup.page.html",
  styleUrls: ["setup.page.scss"]
})
export class SetupPage {
  @Input() gui: Gui;
  
}