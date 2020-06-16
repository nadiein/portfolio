import { Component, OnInit } from '@angular/core';
import { GlobalEventDispatcherService } from 'src/app/services/global.event.dispatcher.service';
import { Parallax, Foreground } from './parallax/parallax.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        this.parallax.foreground = [];
        console.log(this.parallax)
    }

}
