// (function ($) {
//   "use strict";

// 		$(document).ready(function() {


        


//     });



// })(jQuery);

function showList(e) {
        var $gridCont = $('.grid-container');
        console.log(hi);
        e.preventDefault();
        $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
      }
      function gridList(e) {
        var $gridCont = $('.grid-container')
        e.preventDefault();
        $gridCont.removeClass('list-view');
      }

document
        .querySelector(".btn-grid")
        .addEventListener("click", function (e) {
        var gridCont = document.querySelector(".grid-container");
        e.preventDefault();
        gridCont.classList.remove('list-view');
      });
      

      document
        .querySelector(".btn-list")
        .addEventListener("click", function (e) {
        var gridCont = document.querySelector(".grid-container");
        e.preventDefault();
        gridCont.classList.contains("list-view") ? gridCont.classList.remove('list-view') : gridCont.classList.add('list-view');        
      });
