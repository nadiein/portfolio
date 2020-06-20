import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, delay, tap, mergeMap, pluck, map, toArray, debounceTime, pairwise, throttleTime, timeInterval, switchMap, exhaustMap, skipUntil, concatAll, repeat } from 'rxjs/operators';
import { Observable, iif, of, interval, timer } from 'rxjs';

@Injectable({
    providedIn: 'any'
})
export class RouterEventsService {
    
    constructor(private router:Router) { }

    routerEvent():Observable<any> {
        return this.router.events.pipe( 
            filter((e: any): e is RouterEvent => e instanceof RouterEvent)
        );
    }
}