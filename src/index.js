module.exports = function toReadable(number) {
    const zeroToNineteenArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tenArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'];

    if (number === 0) return zeroToNineteenArr[number];

    const resultArr = [];

    const fourDigit = ((number % 10000) - (number % 1000)) / 1000;
    if (fourDigit !== 0) {
        resultArr.push(zeroToNineteenArr[fourDigit] + ' thousand');
    }

    const thirdDigit = ((number % 1000) - (number % 100)) / 100;
    if (thirdDigit !== 0) {
        resultArr.push(zeroToNineteenArr[thirdDigit] + ' hundred');
    }


    const xx = number % 100;

    if (xx !== 0) {
        const firstDigit = (xx % 10);
        const secondDigit = (xx - firstDigit) / 10;

        if (xx <= 19) {
            resultArr.push(zeroToNineteenArr[xx]);
        } else if (firstDigit === 0) {
            resultArr.push(tenArr[secondDigit]);
        } else {
            resultArr.push(tenArr[secondDigit]);
            resultArr.push(zeroToNineteenArr[firstDigit]);
        }
    }

    return resultArr.join(' ');
}
