let $ = require("jquery");
let _ = require("lodash");

$(function(){

    let phrase = "THIBAUT EST UN ELF ROUX ! ";

    $('#main').text(phrase);

    let array = _.words(phrase);

    for ( let word of array ){
        let element = $('<li>' + word + '</li>');

        $('#list').append(element);
    }
});

/* command watchify index->bundleindex : watchify index.js -o bundleindex.js */