/******************************************************
*                                                     *
*   Logo | Image | Hover - Particle for Gantry        *
*                                                     *
*   Purpose: This project adds a powerful image /     *
*            logo presentation particle to the        *
*            Gantry templating framework. The         *
*            component supports rollover and many     *
*            CSS3 hover and transition effects.       *
*                                                     *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   *
*   Repository: https://git.io/fA9XW                  *
*   Homepage: https://gantryprojects.com              *
*                                                     *
******************************************************/

jQuery(document).ready(function($) {
    var lih = new LogoImageHover();
    lih.addMouseOverEvent($);
    lih.addMouseOutEvent($);
});

function LogoImageHover(){
    this.addMouseOverEvent = function($){
        $(".g-logo-image-hover img").mouseover(function(){
            var hoverImg = $(this).attr("data-logo-over");
            if(typeof hoverImg !== 'undefined' && hoverImg.length > 0)
               this.src = hoverImg;
        });  
    };
    
    this.addMouseOutEvent = function($) {
        $(".g-logo-image-hover img").mouseout(function(){
            var defaultImg = $(this).attr("data-logo-out");
            if(typeof defaultImg !== 'undefined' && defaultImg.length > 0)
               this.src = defaultImg;
        });
    }   
}
