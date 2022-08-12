let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];


let celcius =
    fahrenheit.map(
        (item) => {
            console.log('The celcius of : ' + item + ' is = ' + ((item - 32) / 1.8));
            return ((item - 32) / 1.8);
        }
    );
console.log('------------------------------------');
console.log('celcius array = ' + celcius);