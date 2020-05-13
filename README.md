# @tkrotoff/bootstrap-floating-label

[![npm version](https://badge.fury.io/js/%40tkrotoff%2Fbootstrap-floating-label.svg)](https://www.npmjs.com/package/@tkrotoff/bootstrap-floating-label)
[![Build status](https://travis-ci.org/tkrotoff/bootstrap-floating-label.svg?branch=master)](https://travis-ci.org/tkrotoff/bootstrap-floating-label)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Airbnb Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

Floating label for Bootstrap 4

![demo](doc/demo.gif)

Example: https://codesandbox.io/s/github/tkrotoff/bootstrap-floating-label/tree/codesandbox.io

- Small: less than 200 lines of [SCSS](src/bootstrap4-floating-label.scss)
- Works in latest Chrome/Chromium, Firefox and Safari
- Lower support in IE11 and Edge (see [`:placeholder-shown` not supported](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/12435951) and [Can I use placeholder-shown?](https://caniuse.com/#search=placeholder-shown))
- Works with any font family and size
- Uses [Bootstrap variables](https://getbootstrap.com/docs/4.5/getting-started/theming/#variable-defaults): nothing hardcoded

The Nielsen Norman Group talks about ["Placeholders and Floating Labels disadvantages"](https://www.nngroup.com/articles/form-design-placeholders/)

## Usage

`npm install @tkrotoff/bootstrap-floating-label`

Import [bootstrap4-floating-label.scss](src/bootstrap4-floating-label.scss) after bootstrap.scss:

```SCSS
@import '~bootstrap/scss/bootstrap';

@import '~@tkrotoff/bootstrap-floating-label/src/bootstrap4-floating-label';
```

Place `<label>` under `<input>` inside your [Bootstrap 4 code](https://getbootstrap.com/docs/4.1/components/forms/):

```HTML
<div class="floating-label">
  <input type="email" id="email" class="form-control" placeholder="name@example.com">
  <label for="email">Email</label>
</div>
```

## Limitations

There is no good way to [detect if the user entered text inside an input using CSS](https://stackoverflow.com/q/16952526).

With React, the CSS works in most cases because [React populates the `value` attribute](https://github.com/facebook/react/issues/11896).

If you are not using React, you should have a "space placeholder" (`<input placeholder=" ">`, see https://codepen.io/tkrotoff/pen/KjgyZj) otherwise the label will be above the input instead of inside.

You need a "space placeholder" with React and `<input type="number">`.
Because when the user enters something different than a number, the [`HTMLInputElement.value`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) property is empty (and [`ValidityState.badInput`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) is true), see https://codepen.io/tkrotoff/pen/RLQQqo.

You need a "space placeholder" with React and `<input type="date">`.
