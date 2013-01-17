(function ($) {
    // function to append to a certain node in html
    
    function populate_gallery(node, images) {
        $.each(images, function (idx, image) {
            //node.append('<li style="display: block;"><div><img src="' + image.url + '" /></div></li>');
            node.append('<div class="carousel-item"><div><a href="#" id="boxeffect"><img src="' + image.url + '" /></a></div></div>');
        });
    }
    // function to GetForms.
    function GetForms(jobs) {
        $.get('json/' + $('.basket-action').val() + 'form.html', function (data) {
            $('.basket-options-form').html(data);
        });
    }
    // function to ShowForms.
    function ShowForms() {
        $('.basket-action').change(function (ev) {
            var action = $(ev.target).val();
            $.get('json/' + action + 'form.html', function (data) {
                $('.basket-options-form').html(data);
            });
        });
    }

    function ShowMain() {
        $.get('json/jobsection.html', function (data) {
            var jobs = data;
            $('.orderbaskets').append(jobs);
        });
    }
     // on document ready load the functions
     $(document).ready(function() {
        GetForms();
        ShowForms();
        $('.thumbnails li').draggable();
        $('.droppable li', '#dropzone').droppable({
            drop: function(event, ui) {
                $(this).find('.placeholder').remove;
                $( '<li></li>').text( ui.draggable.text() ).appendTo( this );
            }
        });
        $('#joborder').click(function() {
            ShowMain();
        });
     });
})(jQuery);
