import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

// Components here
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioProjectComponent } from './components/portfolio/project/project.component';
import { ParallaxComponent } from './components/home/parallax/parallax.component';
//Services here
import { GlobalEventDispatcherService } from './services/global.event.dispatcher.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        PortfolioProjectComponent,
        ParallaxComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),

    ],
    providers: [
        GlobalEventDispatcherService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
