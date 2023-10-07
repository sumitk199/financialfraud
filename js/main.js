// AOS
AOS.init({
  duration: 1000,
});

// number counter
$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-countto");
  countDuration = parseInt($this.attr("data-duration"));
  $({ counter: $this.text() }).animate(
    {
      counter: countTo,
    },
    {
      duration: countDuration,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.counter));
      },
      complete: function () {
        $this.text(this.counter);
      },
    }
  );
});

// queries
$(document).ready(function () {
  $("#query-1").click(function () {
    $(".que-details-1").slideToggle();
  });
  $("#query-2").click(function () {
    $(".que-details-2").slideToggle();
  });
  $("#query-3").click(function () {
    $(".que-details-3").slideToggle();
  });
  $("#query-4").click(function () {
    $(".que-details-4").slideToggle();
  });

  //active class
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });

  // mobile menu
  $(".menu-btn").click(function () {
    $(".mobile-menu, .overlay, .close").show("slide, right, 500");
  });
  $(".overlay, .close").click(function () {
    $(".mobile-menu, .overlay, .close").hide("slide, right, 500");
  });
});

//inspect none
// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
// };

// pre-loader
// $(document).ready(function () {
//   $("#loader-wrapper").fadeOut(5000);
// });

// $(document).ready(function () {
//   setTimeout(function () {
//     $("#container").addClass("loaded");
//     // Once the container has finished, the scroll appears
//     if ($("#container").hasClass("loaded")) {
//       // It is so that once the container is gone, the entire preloader section is deleted
//       $("#preloader")
//         .delay(9000)
//         .queue(function () {
//           $(this).remove();
//         });
//     }
//   }, 3000);
// });

// pre-loader
