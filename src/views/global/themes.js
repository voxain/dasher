$(() => {
    $('#theme_switcher').on('click', () => {
        if($('#dark_theme').attr('href') == '../global/style_dark.css') return $('#dark_theme').attr('href', '');
        $('#dark_theme').attr('href', '../global/style_dark.css');
    });
});