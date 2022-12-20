import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandchildComponent } from './counter/grandchild/grandchild.component';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PokedexComponent } from './modules/pokemon/components/pokemon-card/pokedex.component';
import { Providers } from './providers.module';
import { GetPokemonInfoEffect } from './store/pokemon/effects/get-pokemon-info.effect';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent,
    PokedexComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers,{
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([
      GetPokemonInfoEffect
    ])
  ],
  providers: [...Providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
