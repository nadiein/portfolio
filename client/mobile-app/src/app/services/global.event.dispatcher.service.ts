import { Injectable } from '@angular/core';
import { Subject, fromEvent, Observable, merge, combineLatest } from 'rxjs';
import { catchError, tap, switchMap, map, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
    providedIn: 'any'
})
export class GlobalEventDispatcherService {

    private node:Subject<any> = new Subject();

    dispatch():Observable<any> {
        // let mousedown = fromEvent(document, EventType.MOUSEDOWN.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.MOUSEDOWN, el) ))
        // let mousup = fromEvent(document, EventType.MOUSEUP.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.MOUSEUP, el) ));
        // let mousemove = fromEvent(document, EventType.MOUSEMOVE.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.MOUSEMOVE, el) ));
        // let keydown = fromEvent(document, EventType.KEYDOWN.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.KEYDOWN, el) ));
        // let keyup = fromEvent(document, EventType.KEYUP.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.KEYUP, el) ));
        // let keypress = fromEvent(document, EventType.KEYPRESS.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.KEYPRESS, el) ));
        // let touchstart = fromEvent(document, EventType.TOUCHSTART.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.TOUCHSTART, el) ));
        // let touchend = fromEvent(document, EventType.TOUCHEND.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.TOUCHEND, el) ));
        // let touchcancel = fromEvent(document, EventType.TOUCHCANCEL.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.TOUCHCANCEL, el) ));
        // let touchmove = fromEvent(document, EventType.TOUCHMOVE.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.TOUCHMOVE, el) ));
        let scroll = fromEvent(document, EventType.SCROLL.toLowerCase()).pipe(map(el => new DispatchedEvent(EventType.SCROLL, el) ));
        return merge(
            scroll
            // keyup,
            // mousedown,
            // mousup,
            // mousemove,
            // keydown,
            // keypress,
            // touchstart,
            // touchend,
            // touchcancel,
            // touchmove
            );
    }

}

export class DispatchedEvent {
    constructor(
        private type:EventType,
        private event:any) { }
}

export enum EventType {
    MOUSEDOWN = 'MOUSEDOWN',
    MOUSEUP = 'MOUSEUP',
    MOUSEMOVE = 'MOUSEMOVE',
    KEYDOWN = 'KEYDOWN',
    KEYUP= 'KEYUP',
    KEYPRESS = 'KEYPRESS',
    TOUCHSTART = 'TOUCHSTART',
    TOUCHEND = 'TOUCHEND',
    TOUCHCANCEL = 'TOUCHCANCEL',
    TOUCHMOVE = 'TOUCHMOVE',
    SCROLL = 'SCROLL'
}
