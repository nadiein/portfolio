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