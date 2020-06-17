import { Component } from '@angular/core';
import { Parallax, Foreground } from './components/home/parallax/parallax.component';
import { GlobalEventDispatcherService } from './services/global.event.dispatcher.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    parallax:Parallax;

    constructor(private dispatcher:GlobalEventDispatcherService) { }

    ngOnInit() { 
        this.dispatcher.dispatch().subscribe(el => console.log(el))

        let screenOne = new Foreground('./../../assets/images/foreground1.png', 3);
        let screenTwo = new Foreground('./../../assets/images/foreground2.png', 3);
        let screenTree = new Foreground('./../../assets/images/foreground3.png', 3);
        this.parallax = new Parallax();
        this.parallax.width = window.screen.width;
        this.parallax.perspective = 8;
        this.parallax.background = './../../assets/images/background1.png';
        this.parallax.foreground = [
            // screenOne,
            // screenTwo,
            // screenTree
        ];
        console.log(this.parallax)
    }
}
