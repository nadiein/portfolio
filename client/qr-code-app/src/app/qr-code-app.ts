export const symbolType = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','$','%','*','+','-','.','/',':']
class QrCodeGenerator {
    public dataToParse:string;

    constructor(data:string) {
        this.dataToParse = data;
        this.dataToPairs(data);
    }

    dataToPairs(data:string):string {
        let res:any[] = [];
        let arr = data.toUpperCase().match(/.{1,2}/g);
        
        for (let str of arr) {
            let el = str.split('');
            if (el) {
                let a = el[0];
                let b = el[1];
                let first = symbolType.findIndex(val => val == a)
                console.log
                let second = symbolType.findIndex(val => val == b)
                let sum = first * 45 + second;
                let bin = (sum >>> 0).toString(2)
                res.push(bin)
            }
        }
        
        return res.join('');
    }
}

let str = 'lorem ipsum $ goolge me'
new QrCodeGenerator(str)
