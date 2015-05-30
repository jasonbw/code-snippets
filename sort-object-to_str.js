// returns the object with keys sorted alphabetically (ignoring case) as a string
function sort_object_to_str(o) {
    var object_string = '';
    var keys = Object.keys(o).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    object_string += '{';
    for (var i = 0; i < keys.length - 1; ++i) {
        object_string += '"' + keys[i] + '":' + JSON.stringify(o[keys[i]]) + ',';
    }
    object_string += '"' + keys[keys.length - 1] + '":' + JSON.stringify(o[keys[keys.length - 1]]) + '}';

    return object_string;
}


function sort_json_file_to_str(path) {
    var fs = require('fs');
    return sort_object_to_str(JSON.parse(fs.readFileSync('unsorted.json')));
}


function _test(o) {
    var _ = require('underscore');
    var base = {
        "a": {
            "aa": "aa",
            "ab": "ab"
        },
        "c": {
            "cc": "cc"
        },
        "b": "b"
    };
    o = o || base;


    if (_.isEqual(o, JSON.parse(sort_object_to_str(o)))) {
        console.log('TEST PASSED');
    }
    else {
        console.log('TEST FAILED');
    }
}

// Paste your object in here
var base = {};

if (require.main === module) {
    console.log(sort_object_to_str(base));
    // console.log(sort_json_file_to_str('unsorted.json'));

    // _test();
}
module.exports = sort_object_to_str;
