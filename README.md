# prxy
A simple, responsive web proxy. Beta.

## Deploying
Deploying prxy is easy. Here's what you need to do:
1) `git clone https://github.com/joebobbio/prxy`
2) `cd prxy`
3) `npm i`
4) `mkdir -p ssl && cd ssl && openssl req -nodes -new -x509 -keyout ssl.key -out ssl.cert && cd ..`
5) `node server.js`
6) Visit the URL `localhost:8080` in your web browser.

## Updating
Updating prxy is also easy. Just open the folder where you've installed prxy in a terminal and run `git pull`.

## Screenshots
Will be added when frontend design is done.

## Reporting issues
[Create an issue](https://github.com/joebobbio/prxy/issues/new/choose) or [email me](mailto:support@phene.dev).

## Credits
This site would not be possible without [Corrosion](https://github.com/titaniumnetwork-dev/Corrosion).

## Disclaimer
Any consequence you may face from your employer, government, etc is not the fault of prxy or any of its developers. By using this site, you agree that you are responsible for what you do.