import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalEventDispatcherService, EventType } from './services/global.event.dispatcher.service';
import { Parallax, Foreground } from './common/parallax/parallax.component';
import { RouterEventsService } from './services/router.service';
import { Subscription, of, interval } from 'rxjs';
import { RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    parallax:Parallax;
    subscriptions:Subscription[] = [];

    constructor(private dispatcher:GlobalEventDispatcherService,
        public re:RouterEventsService) { }

    ngOnInit() { 
        this.subscriptions.push( this.dispatcher.dispatch().subscribe(e => {
            if (e.type === EventType.MOUSEDOWN) {
                this.re.routerEvent().subscribe((e:any) => {
                    if (e instanceof NavigationStart){
                        console.log('Navigation Start');
                        document.body.classList.add('js-preloading-active');
                    }
                    if (e instanceof NavigationEnd){
                        setTimeout(_ => {
                            console.log('Navigation End');
                            document.body.classList.remove('js-preloading-active');
                        }, 10000)
                    }
                } )
            }
        } ))
        // this.subscriptions.push( )

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

    ngOnDestroy() {
        while (this.subscriptions.length > 0) {
            this.subscriptions.shift().unsubscribe();
        }
    }
}
