# Blurry.js - Blurred image loading with [StackBlur](https://github.com/flozz/StackBlur)

![NPM Version](https://img.shields.io/npm/v/blurry.svg)
<img src="https://travis-ci.org/jonhue/blurry.js.svg?branch=master" />

---

## Table of Contents

* [Information](#information)
* [Usage](#usage)
    * [Options](#options)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic Versioning](#semantic-versioning)
* [License](#license)

---

## Information

**Size:** Blurry.js takes < 1kb gzipped.

**Dependencies:** [StackBlur](https://github.com/flozz/StackBlur)

---

## Usage

Blurry.js is simple to use:

```javascript
import * as blurry from 'blurry.js';
window.onload = () => blurry.init();
```

```sass
@import "blurry.js/src/blurry"
```

```html
<div class="blurry-media">
    <div class="aspect-ratio-fill"></div>
    <div class="blurry-media--wrapper">
        <img class="blurry-media--thumbnail" src="image.jpeg?quality=20">
        <canvas class="blurry-media--canvas"></canvas>
        <img class="blurry-media--image" src="image.jpeg">
    </div>
</div>
```

### Options

You have some configuration options:

* `blur`: Blur radius as defined by [StackBlur](https://github.com/flozz/StackBlur). Accepts an a float value. Defaults to `100`. To find a value you like check out the [StackBlur demo](http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html).
* `delay`: Milliseconds to wait before removing the blur effect. Accepts an integer. Defaults to `1000`.

---

## To Do

[Here](https://github.com/jonhue/blurry.js/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/blurry.js/issues/new).

---

## Contributing

We hope that you will consider contributing to Blurry.js. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/jonhue/blurry.js/graphs/contributors

### Semantic Versioning

Blurry.js follows Semantic Versioning 2.0 as defined at http://semver.org.

## License

MIT License

Copyright (c) 2017 Jonas Hübotter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
