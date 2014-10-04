$(document).ready(function () {
    $(".screenshot-link").click(function () {
        var name = $(this).data('screenshot');

        if ($('.screenshot:visible').length == 0) {
            $('.screenshot[data-name="' + name + '"]').fadeIn('slow');
        } else {
            var current = $('.screenshot:visible');
            var next = $('.screenshot[data-name="' + name + '"]');

            if (name == current.data('name')) {
                return;
            }

            next.css('z-index', 12);
            current.css('z-index', 11);

            next.fadeIn('slow', function () {
                current.hide();
                current.css('z-index', 10);
            });
        }
    });

    $('.content-link').click(function () {
        var name = $(this).data('content');

        if (name == $('.content:visible').data('name')) {
            return;
        }

        $('.content-link').removeClass('active');
        $('.content-link[data-content="' + name + '"]').addClass('active');

        $('.content:visible').fadeOut('fast', function () {
            $('.content[data-name="' + name + '"]').fadeIn('fast');
        });
    });
});
