var ESC_KEYCODE = 27;

var serchBtn = $('.page-header__search'),
    searchInputWrap = $('.page-header__input-search-wrap'),
    collectionBtn= $('.page-header__collection'),
    collectionNav = $('.page-header__nav');
    

serchBtn.click(function(evt) {
  searchInputWrap.addClass('page-header__input--show');
});
$(document).click(function(evt) {
  if (evt.target != serchBtn[0] && !serchBtn.has(evt.target).length) {
    searchInputWrap.removeClass('page-header__input--show');
  }
});

collectionBtn.click(function(evt) {
  collectionNav.addClass('page-header__nav-show');
});
$(document).click(function(evt) {
  if (!collectionBtn.has(evt.target).length) {
    collectionNav.removeClass('page-header__nav-show');
  }
});
$(window).on('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (collectionNav.is('.page-header__nav-show')) {
      collectionNav.removeClass('page-header__nav-show');
    }
    else if (searchInputWrap.is('.page-header__input--show')) {
      searchInputWrap.removeClass('page-header__input--show');
    }
  }
});

// catalog
$('.main-catalog .general__item[rel!=fashion]').addClass('general__item--hidden');

$('.main-catalog__category').click(function() { 

  var thisItem = $(this).attr('rel');

  $('.main-catalog .general__item[rel!='+thisItem+']').addClass('general__item--hidden');
  $('.main-catalog .general__item[rel='+thisItem+']').removeClass('general__item--hidden');
})

