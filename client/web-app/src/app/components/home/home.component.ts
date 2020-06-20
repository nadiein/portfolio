import { Component, OnInit } from '@angular/core';
import { GlobalEventDispatcherService } from 'src/app/services/global.event.dispatcher.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private dispatcher:GlobalEventDispatcherService) { }

    ngOnInit() { }

}
