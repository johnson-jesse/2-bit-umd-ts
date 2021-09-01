# @2-bit/umd
A simple rollup bundler configuration for simple JavaScript projects intended for publishing as umd. This package demonstrates the end result of cloning this template and building your own package for publishing.

### Setup
`yarn`

`yarn build`

### Development & Testing
* From this project run `yarn link`
* From a separate, external project, run `yarn link @2-bit/umd
* You can now import this package and use the `greet()` function.

```tsx
import greet from '@2-bit/umd';
...
    <p>{greet()}</p>
```