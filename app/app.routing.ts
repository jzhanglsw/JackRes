import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sidebarComponents/homeComponent';
import { SkillsComponent } from './sidebarComponents/skillsComponent';
import { ContactComponent } from './sidebarComponents/contactComponent';
import { PageNotFoundComponent } from './sidebarComponents/pageNotFoundComponent';


const routes: Routes = [
	{ path: '',  redirectTo: '/home', pathMatch: 'full'},
	{ path: 'skills', component: SkillsComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [SkillsComponent, HomeComponent, PageNotFoundComponent, ContactComponent];