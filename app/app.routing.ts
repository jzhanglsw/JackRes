import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './sidebarComponents/skillsComponent';
import { HomeComponent } from './sidebarComponents/homeComponent';
import { PageNotFoundComponent } from './sidebarComponents/pageNotFoundComponent';

const routes: Routes = [
	{ path: '',  redirectTo: '/home', pathMatch: 'full'},
	{ path: 'skills', component: SkillsComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [SkillsComponent, HomeComponent, PageNotFoundComponent];