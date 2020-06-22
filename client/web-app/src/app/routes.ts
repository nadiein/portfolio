import { Routes } from '@angular/router';
import { MainContainerComponent } from './components/home/main.container.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioProjectComponent } from './components/portfolio/project/project.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

export const AppRoutes: Routes = [
    { path: '/', component: MainContainerComponent },
    { path: 'about', component: AboutComponent },
    { path: 'roadmap', component: RoadmapComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'portfolio/:id', component: PortfolioProjectComponent },
    { path: '',   redirectTo: '/', pathMatch: 'full' }
];