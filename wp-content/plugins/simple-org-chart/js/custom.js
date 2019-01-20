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
        dragAndDrop  : true
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

    /* WP Media Uploader */
    var _shr_media = true;
    var _orig_send_attachment = wp.media.editor.send.attachment;

    jQuery( '.shr-image' ).click( function() {

        var button = jQuery( this ),
            textbox_id = jQuery( this ).attr( 'data-id' ),
            image_id = jQuery( this ).attr( 'data-src' ),
            _shr_media = true;

        wp.media.editor.send.attachment = function( props, attachment ) {

            if ( _shr_media && ( attachment.type === 'image' ) ) {
                if ( image_id.indexOf( "," ) !== -1 ) {
                    image_id = image_id.split( "," );
                    $image_ids = '';
                    jQuery.each( image_id, function( key, value ) {
                        if ( $image_ids )
                            $image_ids = $image_ids + ',#' + value;
                        else
                            $image_ids = '#' + value;
                    } );

                    var current_element = jQuery( $image_ids );
                } else {
                    var current_element = jQuery( '#' + image_id );
                }

                jQuery( '#' + textbox_id ).val( attachment.id );
                console.log(textbox_id)
                current_element.attr( 'src', attachment.url ).show();
            } else {
                alert( 'Please select a valid image file' );
                return false;
            }
        }

        wp.media.editor.open( button );
        return false;
    } );


    var $links = jQuery( '.jOrgChart' ).find( 'a' );

    $links.on( 'click', function ( e ) {
        e.preventDefault();

        var group = jQuery( this ).attr( 'href' ).replace( '#', '' );

        jQuery( '.overlay1' ).hide();
        jQuery( '.overlay1[data-id="' + group + '"]' ).show();
        jQuery( '.overlay1[data-id="' + group + '"]' ).css('visibility','visible');
        jQuery( '.overlay1[data-id="' + group + '"]' ).css('opacity',1);
    });


    jQuery("#btnAddOrg").click(function () {
        var name = jQuery("#comboBox option:selected").text();
        var val = jQuery("#comboBox option:selected").val();
        if(val != '') {
            var name_actived = '';

            var val_f = 'org';

            jQuery("ul#org > li > ul").append('<li id="' + val + '">' +
                '<a class="rmv-nd close" href="javascript:void(0);">Remove</a>' +
                '<br style="clear:both"/><span id="' + val + '" class="name_c">' + name + '</span></li>');

            jQuery(".jOrgChart").remove();

            jQuery("#org").jOrgChart({chartElement: '#chart', dragAndDrop: true});

            if (jQuery('#comboBox option:enabled').length === 0) {
                jQuery("#btnAddOrg").attr('disabled', true);
            }
        }
    });

    /*If not is removing, is conflict in jQuery.jOrgChart.js, line 227 --> Prevent trees collapsing if a link inside a node is clicked */
    jQuery(".rmv-nd").live('click', function () {



        var id = jQuery(this).parent().find('.name_c').attr('id');



        jQuery('#org #' + id).remove();
        jQuery(".jOrgChart").remove();
        jQuery("#org").jOrgChart({chartElement: '#chart', dragAndDrop  : true});
    });

    jQuery(".node-cell .node").live('click', function () {
        jQuery(".node-cell .node").removeClass('actived');
        jQuery(this).addClass('actived');
    });


});


function makeArrays()
{
    var hierarchy = [];

    jQuery("#org li").each(function(){
        var uid = jQuery(this).attr("id");
        var name = jQuery(this).clone().children().remove().end().text();
        var hidSTR = "";
        var hid = jQuery(this).parents("li");
        if(hid.length == 0) //If this object is the root user, substitute id with "orgName" so the DB knows it's the name of organization and not a user
        {

            hidSTR = "";
            var user = new Object();
            user[uid] = hidSTR;
            hierarchy.push(user);
        }else{

            for(var i=hid.length-1; i>=0; i--)
            {
                if(i != hid.length-1)
                {
                    hidSTR = hid[i].id;
                }else{
                    hidSTR = hid[i].id;
                }
            }



            var user = new Object();
            user[uid] = hidSTR;
            hierarchy.push(user);
        }
    });

    saveArray(hierarchy);

    console.log(hierarchy);
}

function saveArray(hierarchy){
    var jsonString = JSON.stringify(hierarchy);
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',

        data: { 'action':'org_chart', 'tree' : hierarchy },

        success: function(data){
            jQuery(".chart_saved").fadeIn();
            setTimeout(function(){ jQuery(".chart_saved").fadeOut(); } , 2000);

        }
    });

}

