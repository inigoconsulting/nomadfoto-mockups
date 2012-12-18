        (function($) {
                var populate_gallery = function (node, images) {
                var gallerylen = 0;
                $.each(images, function (idx, image) {
                    node.append('<div class="item"><a href="' + image.url + '" class="boxeffect"><img src="' + image.url + '" /></a></div>');
                })
            }
            $(document).ready(function() {
                $.getJSON('json/images.json', {}, function (data) {
                    populate_gallery($('.thumbnails'), data)
                    $('.thumbnails').sortable().disableSelection();
                    $('div.item:first').addClass('active');
                });
                //$(".boxeffect").:wq
                // $('.thumbnails div').draggable();
            });
        })(jQuery);
