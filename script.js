$(document).ready(function () {
  console.log("ready!")

  $(".testimony-slider-container").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  })

  $(".menu-toggle").on("click", function () {
    $("body").toggleClass("menu-opened")
  })

  $(".course-details-big .details-item").on("click", function () {
    let desc = $(".course-details-big .description-container")
    let dataFor = $(this).attr("data-for")
    $(".details-item").removeClass("active")
    $(this).addClass("active")
    desc.addClass("hide")
    desc.each(function (i, item) {
      // console.log(item)
      // console.log($(this).attr("class"))
      if (dataFor == $(this).attr("data-about")) {
        $(this).removeClass("hide")
      }
    })
  })

  // // Hide Header on on scroll down
  // var didScroll
  // var lastScrollTop = 0
  // var delta = 25
  // var navbarHeight = $("header").outerHeight()

  // $(window).scroll(function (event) {
  //   didScroll = true
  // })

  // setInterval(function () {
  //   if (didScroll) {
  //     hasScrolled()
  //     didScroll = false
  //   }
  // }, 250)

  // function hasScrolled() {
  //   var st = $(this).scrollTop()

  //   // Make sure they scroll more than delta
  //   if (st < delta) {
  //     return
  //   }

  //   // If they scrolled down and are past the navbar, add class .nav-up.
  //   // This is necessary so you never see what is "behind" the navbar.
  //   if (st > lastScrollTop && st > navbarHeight) {
  //     // Scroll Down
  //     $("header").removeClass("nav-down")
  //   } else {
  //     // Scroll Up
  //     if (st + $(window).height() < $(document).height()) {
  //       $("header").addClass("nav-down")
  //     }
  //   }
  //   if (st < delta) {
  //     $("header").removeClass("nav-down")
  //     console.log($(this).scrollTop())
  //   }

  //   lastScrollTop = st
  // }
  // var lastScrollPos = 0
  // // $(window).on("scroll", function () {
  // //   lastScrollPos = $(this).scrollTop()
  // //   console.log(lastScrollPos)
  // // })

  // Hide Header on on scroll down
  var didScroll
  var lastScrollTop = 0
  var delta = 5
  var navbarHeight = $("header").outerHeight()

  $(window).scroll(function (event) {
    didScroll = true
  })

  setInterval(function () {
    if (didScroll) {
      hasScrolled()
      didScroll = false
    }
  }, 250)

  function hasScrolled() {
    var st = $(this).scrollTop()

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header").removeClass("nav-down").addClass("nav-up")
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("nav-up").addClass("nav-down")
      }
    }

    lastScrollTop = st
  }
})
