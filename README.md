ShortCrypt
====================

ShortCrypt is a very simple encryption library, which aims to encrypt any data into something random at first glance.
Even if these data are similar, the ciphers are still pretty different.
The most important thing is that a cipher is only **4 bits** larger than its plaintext so that it is suitable for data used in an URL or a QR Code. Besides these, it is also an ideal candidate for serial number generation.

## Components

* [long.js](https://github.com/dcodeIO/long.js/)
* [hi-base32](https://github.com/emn178/hi-base32)
* [hi-base64](https://github.com/emn178/hi-base64)

## License

[MIT](LICENSE)