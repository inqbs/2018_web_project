$(function(){
    $('.review-list').infiniteslide({
        'speed': 50, //speed this is px/min
        'direction': 'right', //choose  up/down/left/right
        'pauseonhover': true, //if true,stop onmouseover
        'responsive': true, //width/height recalculation on window resize. child element's width/height define %/vw/vh,this set true.
        'clone': 1 //if child elements are too few (elements can't "infinite"), set 2 or over.
    });
});