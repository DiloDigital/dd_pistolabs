$('ul ul.listado li p').click(function() {
var textoFiltro = $(this).text().toLowerCase().replace( /\s+/g, '-' ).substring(0,4);
if(textoFiltro == 'todo')
{
    $('div.productos__cont div.hidden').fadeIn('slow').removeClass('hidden');
}
else
{
    $('.productos__cont .productos__item').each(function()
    {
        if(!$(this).hasClass(textoFiltro))
        {
            $(this).fadeOut('normal').addClass('hidden');
        }
        else
        {
            $(this).fadeIn('slow').removeClass('hidden');
        }
    });
}
return false;
});