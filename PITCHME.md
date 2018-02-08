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
@[6-10](custom scripts)
@[25-27](third party dependencies)

---

```bash
npm install
```
@[1](install all dependencies)
 
---

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
@[1](wrapper function)
@[2](our written code)

---

## Require

```javascript
const networkConfiguration = require('./src/network-configuration');
const http = require('http');
const chalk = require('chalk');
```
@[1](local module)
@[2](core module)
@[3](node_modules)

---?code=./src/network-configuration.js&lang=javascript
@[1](export object)

---?code=index.js&lang=javascript
@[9](handle incoming request)

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
@[9-12](all other verbs)

---?code=./src/get-product.js&lang=javascript
@[1](import product database)
@[4-5](product or products?)
@[9-12](GET product)
@[13-15](GET products)
@[17-18](response)

---
## Event Emitter

- listen for custom events|
- asynchronous callback |
- custom emitters |

---?code=./src/post-product.js&lang=javascript
@[4](buffer creation)
@[5-7](on data chunk; add to buffer)
@[7-12](on end; join buffer)

---?code=index.js&lang=javascript
@[10](listen for request)

---?code=./src/listener.js&lang=javascript
@[1](ES6 destructuring)
@[10](ES6 string interpolation)
@[10](application is ready)

---

```bash
node index.js
```
@[1](start in production)

---

```bash
nodemon *.js
```
@[1](start in development)

---

## Demonstration

---
## Deployment

- Local
- Cloud
- Container

---

## Frameworks

<table>
  <tr class="fragment">
    <td>Web Application</td>
    <td>Express, Hapi</td>
  </tr>
  <tr class="fragment">
    <td>Testing</td>
    <td>Jasmine, Mocha Chai</td>
  </tr>
  <tr class="fragment">
    <td>Security</td>
    <td>Helmet</td>
  </tr>
  <tr class="fragment">
    <td>Logging</td>
    <td>Winston, Bunyan</td>
  </tr>
</table>


