
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule  } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//This is material design import and reactive forms
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SMEIntroPageComponent } from './smeintro-page/smeintro-page.component';
import { AssetInformationComponent } from './asset-information/asset-information.component';
import { SMEInfoFormComponent } from './smeinfo-form/smeinfo-form.component'; 
import { DynamicFormComponent } from './smeinfo-form/dynamicForm/dynamic-form.component';
import { DynamicFormQuestionComponent } from './smeinfo-form/dynamicForm/dynamic-form-question.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { CompanyAddressInformationComponent } from './company-address-information/company-address-information.component';
import { WorkInformationComponent } from './work-information/work-information.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { PasswordSettingComponent } from './password-setting/password-setting.component';
import { ActivationCodeComponentComponent } from './activation-code-component/activation-code-component.component';
import { OrgStructureEntry } from './organisation-structure/organisation-structure.entry';
import { OrganisationStructureComponent } from './organisation-structure/organisation-structure.component';
import { OrganisationStructureComponentIntro } from './organisation-structure/org-structure-intro';
import { OrganisationStructureComponentDirectors } from './organisation-structure/org-structure-directors';
import { OrganisationStructureComponentDepartments } from './organisation-structure/org-structure-departments';
import { OrganisationStructureComponentProducts } from './organisation-structure/org-structure-products';
import { AdDirective } from './organisation-structure/AdDirective';
import { AdStructure } from './organisation-structure/OrgansationStructureService';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InvestmentPageComponent } from './investment-page/investment-page.component';
import { PledgeComponent } from './pledge/pledge.component';

 
const appRoutes : Routes =[
{path: '',component:LandingPageComponent,pathMatch:'full'},
{path:'signUp',component:SignUpComponent},
{path:'login',component:LogInComponent},
{path:'passwordReset',component:PasswordResetComponent},
{path:'SMEIntroPageComponent',component:SMEIntroPageComponent},
{path:'UploadPageComponent',component:UploadPageComponent},
{path:'AssetInformationComponent',component:AssetInformationComponent},
{path:'CompanyAddressInformationComponent',component:CompanyAddressInformationComponent},
{path:'WorkInformationComponent',component:WorkInformationComponent},
{path:'ProductInformationComponent',component:ProductInformationComponent},
{path:'PasswordSettingComponent',component:PasswordSettingComponent},
{path:'ActivationCodeComponentComponent',component:ActivationCodeComponentComponent},
{path:'SMEInfoFormComponent',component:SMEInfoFormComponent},
{path:'OrganisationStructureComponent',component:OrgStructureEntry},
{path:'LandingPageComponent',component:LandingPageComponent},
{path:'InvestmentPageComponent',component:InvestmentPageComponent},
{path:'PledgeComponent',component:PledgeComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    PasswordResetComponent,
    SMEIntroPageComponent,
    AssetInformationComponent,
    SMEInfoFormComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    UploadPageComponent,
    CompanyAddressInformationComponent,
    WorkInformationComponent,
    ProductInformationComponent,
    PasswordSettingComponent,
    ActivationCodeComponentComponent,
    AdDirective,
    OrgStructureEntry,
    OrganisationStructureComponent,
    OrganisationStructureComponentIntro,
    OrganisationStructureComponentDirectors,
    OrganisationStructureComponentDepartments,
    OrganisationStructureComponentProducts,
    LandingPageComponent,
    InvestmentPageComponent,
    PledgeComponent
  ],
  entryComponents:[OrganisationStructureComponentIntro,OrganisationStructureComponentDirectors,
  OrganisationStructureComponentDepartments,OrganisationStructureComponentProducts],
  
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule //Http client module should be imported like this
  ],
  providers: [AdStructure],
  bootstrap: [AppComponent]
})

export class AppModule { }
