import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'about',             component: AboutComponent },
  { path: 'contact',             component: ContactComponent },
  { path: 'portfolio',             component: PortfolioComponent },
  { path: 'resume',             component: ResumeComponent },
  // { path: 'about',             component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
