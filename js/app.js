$('.a-scroll').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top,
      menuHeight = $('#navbar').innerHeight();
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
})

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.divisoes'),
      costa_descobrimento = 'anime-azul-claro',
			conheca_verbena = 'anime-azul-escuro',
      empreendimentos = 'anime-laranja',
      contato = 'anime-transparente',
			offset = $('#navbar').innerHeight() + 10;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
        if($(this).attr('id') == 'costa-descobrimento') {
  				$('#navbar').removeClass('transparent');
          $('#navbar').addClass(costa_descobrimento);
        } else if($(this).attr('id') == 'conheca-verbena') {
          $('#navbar').addClass(conheca_verbena);
        } else if($(this).attr('id') == 'empreendimentos') {
          $('#navbar').addClass(empreendimentos);
        } else if($(this).attr('id') == 'contato') {
          $('#navbar').addClass(contato);
        }
			} else if (documentTop < itemTop - offset) {
        if($(this).attr('id') == 'costa-descobrimento') {
  				$('#navbar').addClass('transparent');
          $('#navbar').removeClass(costa_descobrimento);
        } else if($(this).attr('id') == 'conheca-verbena') {
          $('#navbar').removeClass(conheca_verbena);
        } else if($(this).attr('id') == 'empreendimentos') {
          $('#navbar').removeClass(empreendimentos);
        } else if($(this).attr('id') == 'contato') {
          $('#navbar').removeClass(contato);
        }
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 100));
})();
