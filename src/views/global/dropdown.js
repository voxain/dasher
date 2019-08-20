$(document).ready(() => {
    $('.header-dropdown').on('click', e => {
        $('#drop-machines').toggleClass('visible');
    });

    function modal(options){
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(`
        
        `, 'text/xml');
    }
});