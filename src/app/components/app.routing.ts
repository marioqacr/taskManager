import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TaskDetailComponent } from './task-detail.component';
import { TaskAddComponent }     from './task-add.component';
import { TaskEditComponent }    from './task-edit.component';


const appRoutes: Routes = [
	{ path:"", component: TaskListComponent},
	{ path: 'taskList', component: TaskListComponent},	
	{ path: 'taskdetail/:id', component: TaskDetailComponent},	
	{ path: 'taskadd', component: TaskAddComponent},
	{ path: 'taskedit/:id', component: TaskEditComponent},		
	{ path: 'home', component: HomeComponent},
	{ path: 'contact', component: ContactComponent},	
	{ path: 'contact/:page', component: ContactComponent},	
	{ path:'**', component: TaskAddComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
