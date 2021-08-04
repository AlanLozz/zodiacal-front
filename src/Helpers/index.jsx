export const isNumber = char => {
    let reg = /^[0-9]+$/
    return reg.test(char);
};

export const convertToList = data => {
    let list = "";
    let temp = data.replace(/\]\n/g, '],');
    let iterator = temp.split(' ');
    for (var i = 0; i < iterator.length; i++) {
        let substring = '';
        if(iterator[i].length > 1) {
            substring = iterator[i]
            for (var o = 0; o < substring.length ; o++) {
                if (o == 0 && isNumber(substring[0]) && isNumber(iterator[i-1][iterator[i-1].length-1])) {
                    list += ','
                }
                if(substring[o] === '[') {
                    list += substring[o];
                } else if(substring[o] === ']') {
                    list += substring[o];
                } else if(substring[o] === ',') {
                    list += substring[o];
                } else if(isNumber(substring[o])) {
                    list += substring[o];
                } else if(substring[o] === '.') {
                    if(isNumber(substring[o+1])){
                        list += substring[o]
                    }
                }
            }
        } else if(iterator[i].length === 0) {
            if(isNumber(iterator[i+1][0])) {
                list += ','
            }
        } else {
            if(iterator[i] === '[') {
                list += iterator[i];
            } else if(iterator[i] === ']') {
                list += iterator[i];
            } else if(iterator[i] === ',') {
                list += iterator[i];
            } else if(isNumber(iterator[o])) {
                list += iterator[o];
            } else if(iterator[i] === '.') {
                if(isNumber(iterator[i+1])){
                    list += iterator[i]
                }
            }
        }
    }
    for (let i = 0; i < 12; i++) {
        list = list.replace('[[', '[{');
        list = list.replace('],[', '},{');
        list = list.replace('],\n[', '},{');
        list = list.replace(']]', '}]');
    }
    return list;
};