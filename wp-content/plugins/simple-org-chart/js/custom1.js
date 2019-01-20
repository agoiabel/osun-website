jQuery(document).ready(function() {


    jQuery("#oreset").click(function(e){

        var vs = confirm("This will reset chart with selected user on top. Ok?");

        if (vs == true) {

        } else {
            return false;
        }

    });



    jQuery("#org").jOrgChart({
        chartElement : '#chart',
        dragAndDrop  : false
    });


    jQuery("#sc").click(function(e){

        jQuery.post(
            ajaxurl,
            {
                'action': 'add_foobar',
                'data':   'foobarid'
            },
            function(response){
                alert('The server responded: ' + response);
            }
        );

    });

    /* Custom jQuery for the example */
    jQuery("#show-list").click(function(e){
        e.preventDefault();

        jQuery('#list-html').toggle('fast', function(){
            if($(this).is(':visible')){
                $('#show-list').text('Hide underlying list.');
                $(".topbar").fadeTo('fast',0.9);
            }else{
                $('#show-list').text('Show underlying list.');
                $(".topbar").fadeTo('fast',1);
            }
        });
    });

    jQuery('#list-html').text(jQuery('#org').html());

    jQuery("#org").bind("DOMSubtreeModified", function() {
        jQuery('#list-html').text('');

        jQuery('#list-html').text(jQuery('#org').html());


    });

    var $links = jQuery( '.jOrgChart' ).find( 'a' );

    $links.on( 'click', function ( e ) {
        e.preventDefault();

        var group = jQuery( this ).attr( 'href' ).replace( '#', '' );

        jQuery( '.overlay1' ).hide();
        jQuery( '.overlay1[data-id="' + group + '"]' ).show();
        jQuery( '.overlay1[data-id="' + group + '"]' ).css('visibility','visible');
        jQuery( '.overlay1[data-id="' + group + '"]' ).css('opacity',1);
    });


});

