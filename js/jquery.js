$(".newsContent").owlCarousel({
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

$(function () {
  $(".thumbnails .item").on("click", function () {
    $("video").attr({
      src: "video/" + $(this).data("video") + ".mp4",
      poster: "img/" + $(this).data("video") + ".jpg",
    });
  });

  $("#volumeVideo").on("mousemove", function () {
    $("video")[0].volume = $(this).val();
  });

  $("#btn-play-pause").on("click", function () {
    $(this).toggleClass("btn-sucess btn-danger");
    var video = $("video")[0];

    if ($(this).hasClass("btn-sucess")) {
      $(this).text("STOP");
      video.play();
    } else {
      $(this).text("PLAY");
      video.pause();
    }
  });
  $("#btn-bars .bi-list").on("click", function () {
    $("header").toggleClass("open-menu");
  });
  $("#close-menu-mobile  .bi-x").on("click", function () {
    $("header").removeClass("open-menu");
  });
  $("#btn-bars .bi-search").on("click", function () {
    $("#inputSearch").toggleClass("open-search");
  });
});
$(".produtoDestaque").slick({
  slidesToShow: 1,
  arrows: true,
  nextArrow: '<div><button type="button" id="btn-destaque-next"><i class="bi bi-chevron-right"></i></button></div>',
  prevArrow: '<div><button type="button" id="btn-destaque-prev"><i class="bi bi-chevron-left"></i></button></div>',
});
$(".stars").raty({
    starHalf : 'lib/raty-master/lib/images/star-half.png',
    starOff : 'lib/raty-master/lib/images/star-off.png',
    starOn : 'lib/raty-master/lib/images/star-on.png',
    score: 3,
});

