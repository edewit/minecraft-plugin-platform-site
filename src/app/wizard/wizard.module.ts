import {APP_INITIALIZER, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AsciidocIndex, Config, ForgeService, History, NgxForgeModule, TokenProvider} from "ngx-forge";

import {KeycloakService} from "../shared/keycloak.service";
import {KeycloakTokenProvider} from "../shared/keycloak-token.provider";
import {TokenService} from "../shared/token.service";

import {FormComponent} from "./wizard.component";
import {EnhancedForgeService} from "../shared/forge.enhance.service";
import {LaunchConfig} from "../shared/config.component";

import {IntroComponent} from "./pages/intro/intro.component";
import {GenericPage} from "./pages/generic/generic.page";
import {SetupPage} from "./pages/setup/setup.page";
import {DeployPage} from "./pages/deploy/deploy.page";
import {NextStepsPage} from "./pages/nextSteps/nextSteps.page";
import {LinkAccountsPage} from "./pages/linkAccounts/link-accounts.page";

import {StepComponent} from "./components/step/step.component";
import {ProjectNameInputModule} from "./components/project-name-input/project-name-input.component";
import {ButtonComponent} from "./components/button/button.component";
import {AuthenticationDirective} from "../shared/authentication.directive";
import {LaunchAdocIndex} from "../shared/asciidoc.index";

import {ModalModule} from "ngx-modal";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectNameInputModule,
    NgxForgeModule,
    ModalModule
  ],
  declarations: [
    FormComponent,
    IntroComponent,
    GenericPage,
    SetupPage,
    DeployPage,
    NextStepsPage,
    LinkAccountsPage,
    StepComponent,
    ButtonComponent,
    AuthenticationDirective
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: (keycloak: KeycloakService) => () => keycloak.init(),
      deps: [KeycloakService],
      multi: true
    },
    {
      provide: TokenProvider,
      useFactory: (keycloak: KeycloakService) => new KeycloakTokenProvider(keycloak),
      deps: [KeycloakService]
    },
    TokenService,
    History,
    {
      provide: AsciidocIndex,
      useClass: LaunchAdocIndex
    },
    LaunchConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: LaunchConfig) => () => config.load(),
      deps: [LaunchConfig],
      multi: true
    },
    {
      provide: Config,
      useClass: LaunchConfig
    },
    {
      provide: ForgeService,
      useClass: EnhancedForgeService
    }
  ]
})
export class WizardModule {
}