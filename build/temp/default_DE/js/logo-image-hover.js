/*******************************************************
*                                                     *
*   Logo | Image | Hover - Particle for Gantry 5      *
*                                                     *
*   Purpose: This project adds a powerful image /     *
*            logo presentation particle to the        *
*            Gantry templating framework. The         *
*            component supports rollover and many     *
*            CSS3 hover and transition effects.       *
*                                                     *
*   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   *
*                                                     *
******************************************************/

jQuery(document).ready(function($) {
    $(".g-logo-image-hover img").mouseover(function(){
        var hoverImg = $(this).attr("data-logo-over");
        if(typeof hoverImg !== 'undefined' && hoverImg.length > 0)
           this.src = hoverImg;
    });
    $(".g-logo-image-hover img").mouseout(function(){
        var defaultImg = $(this).attr("data-logo-out");
        if(typeof defaultImg !== 'undefined' && defaultImg.length > 0)
           this.src = defaultImg;
    });
});