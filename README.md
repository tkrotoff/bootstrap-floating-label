# @tkrotoff/bootstrap-floating-label

[![Build Status](https://travis-ci.org/tkrotoff/bootstrap-floating-label.svg?branch=master)](https://travis-ci.org/tkrotoff/bootstrap-floating-label)

Floating label for Bootstrap 4

![demo](doc/demo.gif)

Example: https://codesandbox.io/s/github/tkrotoff/bootstrap-floating-label/tree/codesandbox.io

- Small: less than 100 lines of [SCSS](src/bootstrap4-floating-label.scss)
- Works in latest Chrome, Firefox and Safari
- Lower support in IE11 and Edge ([`:placeholder-shown` not supported](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/12435951))
- Works with any font family and size
- Uses [Bootstrap variables](https://getbootstrap.com/docs/4.3/getting-started/theming/#variable-defaults): nothing hardcoded

## Usage

`yarn add @tkrotoff/bootstrap-floating-label` or `npm install @tkrotoff/bootstrap-floating-label`

Import [bootstrap4-floating-label.scss](src/bootstrap4-floating-label.scss)

```SCSS
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

When using React, the CSS works because [React populates the `value` attribute](https://github.com/facebook/react/issues/11896).
Without React, there is no good way to [detect if the user entered text inside an input using CSS](https://stackoverflow.com/q/16952526).

If you are not using React, you should have at least an empty placeholder (`<input placeholder="">`) otherwise the label will be above the input instead of inside.
