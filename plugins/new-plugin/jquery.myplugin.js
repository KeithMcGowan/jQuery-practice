// $.fn.getID = function () {
//   return this.attr("id");
// };

// $.fn.getElement = function () {
//   alert(`You clicked on ${this.prop("tagName").toLowerCase()} element.`);
// };

// $.fn.colorText = function (options) {
//     this.css({
//         color: options.color,
//         backgroundColor: options.background
//     })
// };

// Self-invoked function - (function() {})()
// Makes variables safe
// (function() {
//     $.fn.colorText = function (options) {
//         this.css({
//             color: options.color,
//             backgroundColor: options.background
//         })
//     };
// })();

// Protecting the $ alias - (function($){})(jQuery)
// Adding $ as a parameter and specifiying jQuery in the second () protects the $ variable from being confused with other libraries
// (function($) {
//     $.fn.colorText = function (options) {
//         this.css({
//             color: options.color,
//             backgroundColor: options.background
//         })
//     };
// })(jQuery);

// Chaining - adding "return" to your method allows for chaining
// (function ($) {
//   $.fn.getID = function () {
//     this.append(
//       `<p class="details">The id of this element is ${this.attr("id")}</p>`
//     );
//     $(".details").slideUp(5000);
//     return this;
//   };

//   $.fn.getElement = function () {
//     this.map(function () {
//       alert(`This is a/an ${$(this).prop("tagName").toLowerCase()} element.`);
//     });
//     return this;
//   };
// })(jQuery);

// (function ($) {
//   $.fn.colorText = function (options) {
//     return this.css({
//       color: options.color,
//       backgroundColor: options.background,
//     });
//   };
// })(jQuery);

// Targeting multiple elements - .each()
// (function ($) {
//   $.fn.getID = function () {
//     this.each(function () {
//       $(this).append(
//         `<p class="details">The id of this element is ${$(this).attr("id")}</p>`
//       );
//       $(".details").slideUp(5000);
//     });
//     return this;
//   };

//   $.fn.getElement = function () {
//     this.each(function () {
//       $(this).map(function () {
//         alert(`This is a/an ${$(this).prop("tagName").toLowerCase()} element.`);
//       });
//     });
//     return this;
//   };
// })(jQuery);

// (function ($) {
//   $.fn.colorText = function (options) {
//     return this.each(function () {
//       $(this).css({
//         color: options.color,
//         backgroundColor: options.background,
//       });
//     });
//   };
// })(jQuery);

// Configurable parameters
(function ($) {
  $.fn.colorText = function (options) {
    let settings = $.extend({
        color: "red",
        background: null
    }, options);

    return this.each(function () {
      $(this).css({
        color: settings.color,
        backgroundColor: settings.background,
      });
    });
  };
})(jQuery);

// Minimize methods in plugin
(function ($) {
    $.fn.getDetail = function(action) {
        if (action == "id") {
            this.each(function () {
              $(this).append(
                `<p class="details">The id of this element is ${$(this).attr("id")}</p>`
              );
              $(".details").slideUp(5000);
            });
            return this;
        } else if (action == "element") {
            this.each(function () {
              $(this).map(function () {
                alert(`This is a/an ${$(this).prop("tagName").toLowerCase()} element.`);
              });
            });
            return this;
        }
    }
  })(jQuery);
