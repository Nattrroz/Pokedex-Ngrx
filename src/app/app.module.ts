import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandchildComponent } from './counter/grandchild/grandchild.component';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers,{
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
