$(document).ready(function() {

    var $menu = $("#menu").mmenu({
               "slidingSubmenus": false,
               "extensions": [
                  "fx-panels-zoom",
                  "pagedim-black",
                  "position-right",
                  "theme-dark"
               ],
               "iconPanels": true,
               navbars: [
                  {
                     "position": "top",
                     title: 'new'
                  }
               ]
            });

    var $icon = $("#mmenu-icon");

    var API = $menu.data( "mmenu" ); 


    $icon.on( "click", function() {

        API.open();

    });


   API.bind( "closed", function() {

      setTimeout(function() {

         $icon.removeClass( "is-active" );

      }, 200);

      $icon.on( "click", function() {

         API.open();

      });

   });
});
