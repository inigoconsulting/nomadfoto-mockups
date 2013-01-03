(function ($) {
    // function to append to a certain node in html
    
    function populate_gallery(node, images) {
        $.each(images, function (idx, image) {
            //node.append('<li style="display: block;"><div><img src="' + image.url + '" /></div></li>');
            node.append('<div id="items" class="step"><a href="#" id="boxeffect"><img src="' + image.url + '" /></a></div>');
        });
    };
    // function to GetForms.
    function GetForms(jobs) {
        $.get('json/' + $('.basket-action').val() + 'form.html', function (data) {
            $('.basket-options-form').html(data);
        });
    };
    // function to ShowForms.
    function ShowForms() {
        $('.basket-action').change(function (ev) {
            var action = $(ev.target).val();
            $.get('json/' + action + 'form.html', function (data) {
                $('.basket-options-form').html(data);
            });
        });
    }

    function ShowMain(count) {
        $.get('json/jobsection.html', function (data) {
            var jobs = data;
            $('.JobSection').append(jobs);
            $('.slide').attr('id', 'jobs-' + count);
            count += 1;
            $('#joborder').click(function() {
                ShowMain(count);
            });
            GetForms();
            ShowForms();
            $.getJSON('json/images.json', {}, function (data) {
                populate_gallery($('.thumbnails'), data);
            });
        });
    }
     // on document ready load the functions
     $(document).ready(function() {
        var count = 0;
        ShowMain(count);
        $('#prev').click(function (e) {
                impress().prev();
                e.preventDefault();
        });
        $('#next').click(function (e) {
                impress().next();
                e.preventDefault();
        });
     });
})(jQuery);
