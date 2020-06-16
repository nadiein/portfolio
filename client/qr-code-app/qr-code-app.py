import re
from enum import Enum
import numpy as np

def QrCodeGenerator(str):
    symbolType = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','$','%','*','+','-','.','/',':']
    MULTIPLIER_CONST = 45

    def strToChunks(str):
        chunkSize = 2
        res = re.findall('.{1,2}', str)
        return [[i] for i in res]

    def charToSymbolTypeChunks(arr):
        res = []
        el = []
        x = np.array(symbolType)
        for a in arr:
            for b in a:
                y = np.array(b)
                index = np.argsort(y)
                sorted_y = y[index]
                sorted_index = np.searchsorted(sorted_y, y)

                yindex = np.take(index, sorted_index, mode="clip")
                mask = x[yindex] != y

                result = np.ma.array(yindex, mask=mask)
                print(result)
                


                # for c in b:
                    # if d == c:
                        # print(symbolType.index(d))
                            # result = any(elem in symbolType for elem in c)
                    # if (result):

                    #     print(result)
                        # print(d)
                        # if c.upper() == d:
                            #    el.append(d.index(c.upper()))
            # res.append(el)
                # if SymbolType.index(first):
                #     print(SymbolType.index(first))
                # if SymbolType.index(second):
                #     print(SymbolType.index(second))
                # else:
                #     print('didnt exist')
        # print(res)

    def resFromPairsToArr():
        return

    def toBinary(setOfNums):
        res = None

    def isEq(self, other):
        return self.Value == other.Value
    
    res = strToChunks(str)
    charToSymbolTypeChunks(res)
    # print(res)

str = 'lorem ipsum $ goolge me'
QrCodeGenerator(str)
