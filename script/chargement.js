
 $("#mute-video").click( function (){
    if( $("video").prop('muted') ) {
          $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
    window.setTimeout("location=('../pages/article.html');",5500);
    $(".texte").css("display","block");
  });

  