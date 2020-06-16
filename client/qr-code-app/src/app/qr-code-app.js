var QrCodeGenerator = /** @class */ (function () {
    function QrCodeGenerator(data) {
        this.dataToParse = data;
        this.dataToPairs(data);
    }
    QrCodeGenerator.prototype.dataToPairs = function (data) {
        var res = [];
        var first, second;
        res = data.match(/.{1,2}/g);
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var i = res_1[_i];
            first = i[0];
            second = i[1];
        }
        console.log(first, second);
        return res;
    };
    return QrCodeGenerator;
}());
var str = 'lorem ipsum $#@ goolge me';
new QrCodeGenerator(str);
var SymbolType;
(function (SymbolType) {
    SymbolType[SymbolType["_0"] = 0] = "_0";
    SymbolType[SymbolType["_1"] = 1] = "_1";
    SymbolType[SymbolType["_2"] = 2] = "_2";
    SymbolType[SymbolType["_3"] = 3] = "_3";
    SymbolType[SymbolType["_4"] = 4] = "_4";
    SymbolType[SymbolType["_5"] = 5] = "_5";
    SymbolType[SymbolType["_6"] = 6] = "_6";
    SymbolType[SymbolType["_7"] = 7] = "_7";
    SymbolType[SymbolType["_8"] = 8] = "_8";
    SymbolType[SymbolType["_9"] = 9] = "_9";
    SymbolType[SymbolType["A"] = 10] = "A";
    SymbolType[SymbolType["B"] = 11] = "B";
    SymbolType[SymbolType["C"] = 12] = "C";
    SymbolType[SymbolType["D"] = 13] = "D";
    SymbolType[SymbolType["E"] = 14] = "E";
    SymbolType[SymbolType["F"] = 15] = "F";
    SymbolType[SymbolType["G"] = 16] = "G";
    SymbolType[SymbolType["H"] = 17] = "H";
    SymbolType[SymbolType["I"] = 18] = "I";
    SymbolType[SymbolType["J"] = 19] = "J";
    SymbolType[SymbolType["K"] = 20] = "K";
    SymbolType[SymbolType["L"] = 21] = "L";
    SymbolType[SymbolType["M"] = 22] = "M";
    SymbolType[SymbolType["N"] = 23] = "N";
    SymbolType[SymbolType["O"] = 24] = "O";
    SymbolType[SymbolType["P"] = 25] = "P";
    SymbolType[SymbolType["Q"] = 26] = "Q";
    SymbolType[SymbolType["R"] = 27] = "R";
    SymbolType[SymbolType["S"] = 28] = "S";
    SymbolType[SymbolType["T"] = 29] = "T";
    SymbolType[SymbolType["U"] = 30] = "U";
    SymbolType[SymbolType["V"] = 31] = "V";
    SymbolType[SymbolType["W"] = 32] = "W";
    SymbolType[SymbolType["X"] = 33] = "X";
    SymbolType[SymbolType["Y"] = 34] = "Y";
    SymbolType[SymbolType["Z"] = 35] = "Z";
    SymbolType[SymbolType["SPACE"] = 36] = "SPACE";
    SymbolType[SymbolType["$"] = 37] = "$";
    SymbolType[SymbolType["%"] = 38] = "%";
    SymbolType[SymbolType["*"] = 39] = "*";
    SymbolType[SymbolType["+"] = 40] = "+";
    SymbolType[SymbolType["-"] = 41] = "-";
    SymbolType[SymbolType["."] = 42] = ".";
    SymbolType[SymbolType["/"] = 43] = "/";
    SymbolType[SymbolType[":"] = 44] = ":";
})(SymbolType || (SymbolType = {}));
