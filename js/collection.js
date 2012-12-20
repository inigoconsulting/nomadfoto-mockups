        (function($) {
            var basket_count = 0;

            var TEMPLATES = {
        
            'basket': $(
                '<div class="basket">'+ //<div class="dropzone well">' +
                '<div class="basket-form">' + 
                '<div class="form">' +
                '<div class="control-group">' +
                '<label class="control-label" for="basket-action">Action</label>' + 
                '<div class="controls">' + 
                '<select class="basket-action">' +
                '<option value="print">Print</option><option value="edit">Edit</option>' +
                '</select>' + 
                '</div></div></div>' + 
                '<div class="basket-options-form"></div></div></div><br />'
            )
            }
                var populate_gallery = function (node, images) {
                var gallerylen = 0;
                $.each(images, function (idx, image) {
                    node.append('<div class="item"><a href="#" id="boxeffect"><img src="' + image.url + '" /></a></div>');
                })
            }
            $(document).ready(function() {
                $.getJSON('json/images.json', {}, function (data) {
                    populate_gallery($('.thumbnails'), data)
                    $('.thumbnails').sortable().disableSelection();
                    $('div.item:first').addClass('active');
                });
                var actionvar = $('.basket-action').val();
                $.get('json/' + actionvar + 'form.html', function (data) {
                    $('.basket-options-form').html(data);
                });
                $('.basket-action').change(function (ev) {
                    var action = $(ev.target).val();
                    $.get('json/' + action + 'form.html', function (data) {
                        $('.basket-options-form').html(data);
                    });
                });
                $('#joborder').click(function (ev) {
                    ev.preventDefault();
                    var basket = TEMPLATES['basket'].clone();
                    basket.attr('id', 'basket-' + basket_count);
                    basket_count += 1;
                    $('#baskets-container').append(basket);
                    
                });
            });
        })(jQuery);
