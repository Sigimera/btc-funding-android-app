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

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-39343838-2', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');

});
