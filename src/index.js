// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    if (currency <= 0) return {};

    var config = [
        { lable: "H", value: 50 },
        { lable: "Q", value: 25 },
        { lable: "D", value: 10 },
        { lable: "N", value: 5 },
        { lable: "P", value: 1 },
    ];

    function exchange(val, by) {
        var remainder = val % by;
        var number = (val - remainder) / by;
        return { number: number, remainder: remainder };
    }

    var result = {};

    for (var i = 0; i < config.length; i++) {

        var tempResult = exchange(currency, config[i].value);

        if (tempResult.number > 0) {
            result[config[i].lable] = tempResult.number;
            currency = tempResult.remainder;
        }
    }

    return result;
}
