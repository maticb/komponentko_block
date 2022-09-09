$(document).ready(function(){
    $('div.content-main .EntityList-items li').each(function () {
        var $this = $(this);
        var $desc = $this.find('.entity-description-main');
        var desc = $desc.length > 0 ? $desc.html() : '';
        if (desc.indexOf('Ljubljana Moste Polje, Nove Jarše') > 0 || desc.indexOf('Ljubljana Moste Polje, Jarše') > 0) {
            $this.addClass('hidden');
        }
    });
});
