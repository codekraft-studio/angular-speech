# angular-speech
A simple angular component to deal with browser SpeechRecognition

[DEMO](https://codekraft-studio.github.io/angular-speech/)

## Getting started
Install the module via git, npm or bower.
```
npm install angular-speech
bower install angular-speech
git clone codekraft-studio/angular-speech
```
Than add the script and the style to your project:
```html
<link rel="stylesheet" href="dist/angular-speech.css">
<script type="text/javascript" src="dist/angular-speech.js"></script>
```
At the end add the module to your angular application:
```js
angular.module('app', ['angular-speech'])
```
Now you can use the __angular-speech__ component everywhere in your application.

```html
<angular-speech lang="en-US"></angular-speech>
```

## Development
Clone the project repository, than install the dependencies and run:
```
npm run start
```
this will fire up the grunt development environment with a http server and actions on file changes, than when you have done your editing you can run:
```
npm run build
```
to package the project to be ready for production.

---

## License
The __angular-speech__ is released under the MIT License by [codekraft-studio](https://codekraft-studio.github.io/).

## Contributing

1. Fork it ( https://github.com/codekraft-studio/angular-speech/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
3. Write and run the tests (`npm run test`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
