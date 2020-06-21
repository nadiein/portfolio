import { Component, OnInit } from '@angular/core';
import { PreloaderModel } from 'src/app/models/preloader/preloader.model';

@Component({
    selector: 'preloading-screen',
    templateUrl: './preloading.screen.component.html',
    styleUrls: ['./preloading.screen.component.css']
})
export class PreloadingScreenComponent implements OnInit {
    preloader:PreloaderModel;

    constructor() { }

    ngOnInit() {
        this.preloader = new PreloaderModel();
        let itemsLength = 25;
        
        for (let i = 0; i < itemsLength; i++) {
            let item = new PreloaderModel();
            this.preloader.item.push(item)
        }
    }

}
