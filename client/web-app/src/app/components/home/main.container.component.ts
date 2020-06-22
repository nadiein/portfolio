import { Component, OnInit } from '@angular/core';
import { GlobalEventDispatcherService } from 'src/app/services/global.event.dispatcher.service';

@Component({
    selector: 'main-container',
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.css']
})
export class MainContainerComponent implements OnInit {

    constructor(private dispatcher:GlobalEventDispatcherService) { }

    ngOnInit() { }

}
