$(document).ready(function ($) {
  navbarMenu($);
  stickyHeader($);
});

// Start Navbar Menu
function navbarMenu($) {
  //Open menu
  $("#menu-button").on("click", function (e) {
    e.preventDefault();
    $("#navbar-menu").addClass("active-menu");
    $(".overlay").addClass("active");
    $("body").addClass("overflow-body");
  });
  // Close menu
  $(".close-button, .overlay").on("click", function (e) {
    e.preventDefault();
    $("#navbar-menu").removeClass("active-menu");
    $(".overlay").removeClass("active");
    $("body").removeClass("overflow-body");
  });
}
// End navbar Menu

// Start Effect Writing
let i = 0;
function typeWriter() {
  let txt = "حلمك";
  let speed = 1500;
  if (!!document.getElementById("auto-text")) {
    if (i < txt.length) {
      document.getElementById("auto-text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}
typeWriter();
// End Effect Writing
var swiper = new Swiper(".swiper-company-partners", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 1000,
  },
});

// Start Fixed Header
function stickyHeader($) {
  let lastScroll = 0;
  const fixedHeaderElement = $(".fixed-header-wrapper");
  $(document).on("scroll", function () {
    let currentScroll = $(this).scrollTop();
    const isScrollingDown = function () {
      return currentScroll < lastScroll && currentScroll > 500;
    };
    const isScrollingUp = function () {
      return currentScroll > lastScroll && currentScroll > 500;
    };

    const fixedHeightToHeaderWrapper = function (fixedHeaderElement) {
      const fixedHeaderElementHeight = fixedHeaderElement.innerHeight();
      $(".main-header").css("height", fixedHeaderElementHeight);
    };

    fixedHeightToHeaderWrapper(fixedHeaderElement);

    if (isScrollingDown()) {
      fixedHeaderElement

        .addClass("active_menu__")
        .removeClass("not_active_menu__");
    } else if (isScrollingUp()) {
      fixedHeaderElement
        .removeClass("active_menu__")
        .addClass("not_active_menu__");
    } else {
      fixedHeaderElement.removeClass("active_menu__ not_active_menu__");
    }
    lastScroll = currentScroll;
  });
}

// End Fixed Header
