// Reverse the string

var str = 'I love javascript';

function FirstReverse(str) { 

    var arr = str.split('');
    arr.reverse();
    return arr.join('');
}

FirstReverse(str);