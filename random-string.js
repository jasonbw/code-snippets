function random_string(length) {
    length = length || 7;
    var text = '';
    var haystack = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < length; ++i) {
        text += haystack[Math.floor(Math.random() * haystack.length)];
    }

    return text;
}

if (require.main === module) {
    console.log(random_string());
}
module.exports = random_string;
