var random_string = require('./random-string');

function wide_object() {
    var o = {};

    for (var i = 0; i < 10; ++i) {
        o[random_string()] = random_string();
    }

    return o;
}


if (require.main === module) {
    console.log(JSON.stringify(wide_object(), null, 4));
}
module.exports = wide_object;
