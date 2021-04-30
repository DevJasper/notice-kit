# NoticeKit
![npm](https://img.shields.io/npm/v/@ouduidui/notice)[![GitHub stars](https://img.shields.io/github/stars/OUDUIDUI/notice-kit)](https://github.com/OUDUIDUI/notice-kit/stargazers)[![GitHub forks](https://img.shields.io/github/forks/OUDUIDUI/notice-kit)](https://github.com/OUDUIDUI/notice-kit/network)![GitHub release (latest by date)](https://img.shields.io/github/v/release/ouduidui/notice-kit)[![GitHub license](https://img.shields.io/github/license/OUDUIDUI/notice-kit)](https://github.com/OUDUIDUI/notice-kit/blob/master/LICENSE)

> A lightweight small notice widget with no dependencies, create notifications easily with this javascript plugin. See [demo](http://ouduidui.cn/NoticeKit/).

## Main
```
dist/
├── notice.min.js 
├── notice.min.css 
```

## Get Started

### install

download [releases](https://github.com/OUDUIDUI/notice-kit/releases) to your project.

```html
<link rel="stylesheet" href="./notice.min.css">

<script src="./notice.min.js"></script>
```

or npm install

```shell script
npm i @ouduidui/notice
```

```javascript
import Notice from "@ouduidui/notice";
import "@ouduidui/notice/style.css";
```

### Usage
#### Syntax
```javascript
const notice = new Notice();
```

## Methods
### showLoading()
Show loading animation.

```javascript
notice.showLoading(options);
```

#### options

- Type: `Object`
- Optional

The options for loading. Check out the available options.

|     option      |   type   | required |      default       |             Description              |                           options                            |
| :-------------: | :------: | :------: | :----------------: | :----------------------------------: | :----------------------------------------------------------: |
|      type       | `string` | `false`  |      `'line'`      | the style type of loading animation  | 'line'、'dots'、'dots_zoom'、'cube_flip'、'dots_spin'、'cube_zoom' |
|      color      | `string` | `false`  |    `'#ffffff'`     | color of loading animation and title |                              -                               |
| backgroundColor | `string` | `false`  | `'rgba(0,0,0,.6)'` |            color of mask             |                              -                               |
|      title      | `string` | `false`  |         -          |             loading text             |                              -                               |
|    fontSize     | `number` | `false`  |         16         |      font size of loading text       |                              -                               |

> Preview oher style types of loading animation by [demo](http://ouduidui.cn/NoticeKit/).

#### Examples:

```javascript
notice.showLoading({
  	type: 'dots',
    title: 'Loading',
    color: '#333',
    backgroundColor: 'rgba(255,255,255,.6)',
  	fontSize: 14
});
```

### hideLoading()

Close loading animation.

```javascript
notice.hideLoading()
```

### showToast()

show a pop-up to remind something.

```javascript
notice.showToast(options);
```

#### options

- Type: `Object`
- Optional

The options for showing toast. Check out the available options.

|  option   |   type   | required |   default   |                   Description                   |                     options                      |
| :-------: | :------: | :------: | :---------: | :---------------------------------------------: | :----------------------------------------------: |
|   Text    | `string` |  `true`  |      -      |                    tips text                    |                        -                         |
|   type    | `string` | `false`  | `'default'` | the style type of toast  ('default' -- no icon) | 'default'、'success'、'error'、'info'、'warning' |
| autoClose | `string` | `false`  |   `true`    |           auto close after 4 seconds            |                        -                         |
| showClose | `string` | `false`  |   `false`   |                Show close button                |                        -                         |


> Preview oher style types of loading animation by [demo](http://ouduidui.cn/NoticeKit/).

## License

[MIT](https://opensource.org/licenses/MIT) © [OUDUIDUI](https://ouduidui.cn/)