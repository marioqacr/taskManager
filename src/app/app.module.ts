import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './components/app.routing';
import { HttpModule } from '@angular/http';
import { TaskListComponent }   from './components/task-list.component';
import { TaskDetailComponent } from './components/task-detail.component';
import { TaskAddComponent }    from './components/task-add.component';
import { TaskEditComponent }   from './components/task-edit.component';
import { TaskService } from './service/task.service';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskAddComponent,
    TaskEditComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing, 
    HttpModule
  ],
  providers: [
    TaskService,
    appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
