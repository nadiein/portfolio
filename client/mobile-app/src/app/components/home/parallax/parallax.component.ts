import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'parallax',
    templateUrl: './parallax.component.html',
    styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

    @Input() parallax:Parallax;
    @Input() width:number;

    constructor() { }

    get containerWidth():number { return this.parallax.foreground.length * this.parallax.width }
    get perspective():number { return this.parallax.perspective }

    ngOnInit() {}

    scaleFactor(perspective, distance):number {
        return (perspective - distance) / perspective;
    }

}

export  class Parallax {
    width:number;
    perspective:number;
    background:string;
    foreground:Foreground[];
}

export class Foreground {
    constructor(
        private src:string,
        private distance:number) { }
}
