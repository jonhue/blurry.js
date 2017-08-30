/**!
 * @fileOverview Welcomer.js - Slick welcome bars for your pages
 * @version 1.2.3
 * @license
 * MIT License
 *
 * Copyright (c) 2017 Slooob
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
$.fn.extend({
    welcomer: function(options) {
        var content = $(this).data('welcomer-content') || 'Say hello to Welcomer.js',
            mobileContent = $(this).data('welcomer-mobile-content'),
            link = $(this).data('welcomer-link'),
            mobileLink = $(this).data('welcomer-mobile-link'),
            href = $(this).data('welcomer-href');
        var defaults = {
            newTab: false,
            close: true,
            autoclose: false,
            delay: 1000
        };

        options = $.extend(defaults, options);

        var closer = '<div class="welcomer-closer"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g transform="translate(0, 0)"><polygon fill="#fff" points="10.1,4.5 8,6.6 5.9,4.5 4.5,5.9 6.6,8 4.5,10.1 5.9,11.5 8,9.4 10.1,11.5 11.5,10.1 9.4,8 11.5,5.9 "></polygon></g></svg></div>';

        if ( mobileContent && $(document).width() <= 750 ) {
            var content = mobileContent;
        };
        if ( mobileLink && $(document).width() <= 750 ) {
            var link = mobileLink;
        };

        $(this).prepend('<div class="welcomer welcomer-hidden"><p>' + content + '</p>' + ((link && href) ? '<a href="' + href + '"' + (options.newTab ? ' target="_blank"' : '') + '>' + link + '</a>' : '') + (options.close ? closer : '') + '</div>');

        welcomerInit($(this).find('.welcomer:first-child'), options.autoclose, options.delay);
    }
});


function welcomerInit(welcomer, autoclose, delay) {
    setTimeout(function() {
        welcomerAppear(welcomer);
    }, delay);

    welcomer.find('.welcomer-closer, a').click(function() {
        welcomerDisappear(welcomer, autoclose);
    })
    if (autoclose) {
        welcomerAutoclose(welcomer, autoclose);
    };
};


function welcomerAutoclose(welcomer, autoclose) {
    setTimeout(function() {
        welcomerDisappear(welcomer, autoclose);
    }, autoclose);
};


function welcomerAppear(welcomer) {
    welcomer.removeClass('welcomer-hidden');
};

function welcomerDisappear(welcomer, autoclose) {
    if ( welcomer.parent().find('.welcomer:hover').length != 0 && autoclose != false ) {
        welcomerAutoclose(welcomer, autoclose);
    } else {
        welcomer.addClass('welcomer-hidden');
    };
};
