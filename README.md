## How to reproduce

1. Run `yarn install`
2. Run `yarn build`

It should copy `images` dir from `src` to dist. You can observe different results by adding/removing imagemin-webpack or adding/removing `/` before `[path]` in windows. 

Not sure if its related to `imagemin-webpack` or `copy-webpack-plugin`.

## Test Environment
1. Windows 10 64-bit pro (v1803 and v1809)
2. Node v10