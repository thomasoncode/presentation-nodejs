@title[Node.js]
# Node.js

---

## What is Node.js?

- JavaScript runtime
- server-side and x-platform
- high performance web applications
- 

---

RESTful web service to access an inventory

---

## Install
- Download LTS/Current
- Node Version Manager |

Note:
Older versions on the build server

---?image=img/cardboard-box.png&size=contain

## What is in the Node box?
- node engine (Google V8) |
- core libraries |
- node package manager (npm) |

---

## Node Package Manager
- Metadata
- Package Repository

---
@title[Create Metadata File]
```bash
npm init
```
@[1](create metadata file)

---?code=package.json&lang=json
@[6](npm run test)
@[23](third party dependencies)

---
@title[install packages]
```bash
npm install chalk --save
```
@[1](install third party dependencies)

---?code=index.js&lang=javascript
@[1-4](modules)

---

## Module Creation
```javascript
(function(exports, require, module, __filename, __dirname) {
  /* ... */
});
```
@[1](node injected objects)
@[2](our written code)

---

## Require

```javascript
const http = require('http');
const chalk = require('chalk');
const {hostname,port} = require('./src/network-configuration');
```
@[1](core module)
@[2](npm package)
@[3](local module)

---?code=./src/network-configuration.js&lang=javascript
@[1](export object)

---?code=index.js&lang=javascript
@[7](handle incoming request)

---

## Asynchronous Callbacks

+++
<!-- .slide: data-transition="none" -->
- single threaded |
- utilize background threads |
- when done; notify main thread |
+++?image=img/superman.png&size=contain
<!-- .slide: data-transition="none" -->
+++?image=img/train-wreck.jpg&size=contain
<!-- .slide: data-transition="none" -->
 
Note:
Makes node lightweight and efficient
Long running callbacks can cause bottlenecks

---?code=./src/handle-request.js&lang=javascript
@[4](HTTP headers)
@[6](url)
@[7-9](handle product request)
@[9-11](all other request)
@[11](always end the response)

---?code=./src/product-controller.js&lang=javascript
@[5](GET request)
@[6](POST request)

---?code=./src/get-product.js&lang=javascript
@[1]("product database")
@[4-5](product or products?)
@[8-12](GET product)
@[13-15](GET products)
@[17-18](response)

---
## Event Emitter

- calls all listeners |
- asynchronous callback
- custom emitters |

---?code=./src/post-product.js&lang=javascript
@[3-5](append chunk to buffer)
@[5-10](join chunks and log)

---?code=index.js&lang=javascript
@[8](listen for request)

---?code=./src/listener.js&lang=javascript
@[4](up and running)

---

```bash
node index.js
```
@[1](start our endpoint)

---

## Demonstration

---
## Deployment

- Local
- <p class="fragment highlight-green">Cloud</p>
- Container

---

## What about?

- Complex routes |
- Security |
- Logging |
- Error handling |

---

## Frameworks

- Complex Routes |
- Middleware |
- Less startup cost |


