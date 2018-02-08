---?image=img/node-logo.png&size=contain
@title[Node.js]

<div class="profile">

Matt Thomas

</div>

---

## What is Node.js?

- Modern JavaScript runtime |
- high performance web applications |
- cross platform |
- open source with a technical steering committee |

---

RESTful web service to access an inventory

Note:
POST and GET
Single endpoint

---

## Install
- download LTS/Current |
- node version manager (NVM) |

Note:
Older applications and build servers

---?image=img/cardboard-box.png&size=contain

## What is in the box?
- Google V8 JS engine |
- core libraries |
- node package manager (npm) |

---

## Node Package Manager
- metadata |
- package repository |

---
@title[Create Metadata File]
```bash
npm init
```
@[1](create metadata file)

---?code=package.json&lang=json
@[6-10](custom batch scripts)
@[25-27](third party dependencies)

---
<div class="fragment">

@title[install packages]
```bash
npm install
```
@[1](install all dependencies)

</div>

<div class="fragment">

@title[install packages]
```bash
npm install chalk --save
```
@[1](install third party dependencies)

</div>


---?code=index.js&lang=javascript
@[1-4](modules)

---

## Module Creation
```javascript
(function(exports, require, module, __filename, __dirname) {
  /* ... */
});
```
@[1-3](wrapper function)
@[2](our written code)

---

## Require

```javascript
const {hostname,port} = require('./src/network-configuration');
const http = require('http');
const chalk = require('chalk');
```
@[1](local module)
@[2](core module)
@[3](npm package)

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
@[7-8](handle product request)
@[9-11](all other request)
@[11](always end the response)

---?code=./src/product-controller.js&lang=javascript
@[5-6](GET request)
@[7-8](POST request)

---?code=./src/get-product.js&lang=javascript
@[1]("product database")
@[4-5](product or products?)
@[9-12](GET product)
@[13-15](GET products)
@[17-18](response)

---
## Event Emitter

- calls all listeners |
- asynchronous callback |
- custom emitters |

---?code=./src/post-product.js&lang=javascript
@[4](buffer creation)
@[6](append next chunk to buffer)
@[8-9](join chunks and log)

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

## Quality Attributes

- Availability |
- Modifiability |
- Security |
- Testability |
- Error handling |

---

## Frameworks

- Complex Routes |
- Middleware |
- Testing |


