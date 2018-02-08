/**!
 * @fileOverview Blurry.js - Blurred image loading with StackBlur
 * @version 2.0.0
 * @license
 * MIT License
 *
 * Copyright (c) 2017 Jonas Hübotter
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
window.StackBlur = require('stackblur-canvas');

export function init(options) {

    // Default options
    let defaults = {
        blur: 100,
        delay: 1000
    };

    // Merge options with defaults
    options = extend( {}, defaults, options );
    function extend() {
        for ( let i=1; i<arguments.length; i++ )
            for ( let key in arguments[i] )
                if ( arguments[i].hasOwnProperty(key) )
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    };

    if ( typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ) {
        let _typeof = (obj) => return typeof obj;
    } else {
        if ( obj && typeof Symbol === 'function' && obj.constructor === Symbol ) {
            let _typeof = (obj) => return 'symbol';
        } else {
            let _typeof = (obj) => return typeof obj;
        };
    };

    // Variable definitions
    let blurRadius = options['blur'],
        initialDelay = options['delay'],
        component = document.querySelector('.blurry-media--wrapper'),
        image = document.querySelector('.blurry-media--image'),
        canvas = document.querySelector('.blurry-media--canvas'),
        thumbnail = document.querySelector('.blurry-media--thumbnail'),
        context = canvas.getContext('2d');

    // Setting aspect-ratio-fill padding
    let aspectRatioFill = document.querySelector('.aspect-ratio-fill');
    let percentage = thumbnail.naturalHeight / thumbnail.naturalWidth * 100;
    aspectRatioFill.style.paddingBottom = percentage + '%';

    // Draw the thumbnail onto the canvas, then blur it
    drawThumbnail(blurRadius);

    // Load the image in. Once it's loaded, add a class to the component wrapper that fades in the image and fades out the canvas element.
    image.src = image.dataset.src;
    image.addEventListener( 'load', function onImageLoaded() {
        image.removeEventListener( 'load', onImageLoaded );

        // This delay is only set so the we can see the blur effect more clearly on page load
        setTimeout( () => component.classList.add('blurry-media--loaded'), initialDelay );
    });

    // Draws the thumbnail into the canvas and blurs it
    function drawThumbnail(blur) {
        context.drawImage( thumbnail, 0, 0, thumbnail.naturalWidth, thumbnail.naturalHeight, 0, 0, canvas.width, canvas.height );
        StackBlur.canvasRGBA( canvas, 0, 0, canvas.width, canvas.height, blur );
    };

};
