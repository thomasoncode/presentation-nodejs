@title[Node.js]
# Node.js

---

## What is Node.js?

- Javascript runtime
- Single threaded
- Event-driven
- Non-blocking IO
- Lightweight and efficient

---

## Advantages

- Server side JavaScript
- Single Threaded
- Easy to implement

---

## Disadvantages

* JavaScript
* Queues
* Analysis paralysis

---

## Install
1. Download LTS/Current
1. Node Version Manager |

---

## What is in the Node box?
- node engine |
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
**create metadata file**

---?code=package.json&lang=json
@title[Pacakge.json]

**metadata file or package.json**

---
@title[install packages]
```bash
npm install chalk --save
```
**install packages**

---

RESTful web service to access an inventory

---?code=index.js&lang=javascript
@[1-4](import modules)
@[7](handle incoming request)
@[8](listen for request)

---

## TL;DR require

- if './*' then local module else
- core module else |
- node_module |

---

## Module Creation
```javascript
(function(exports, require, module, __filename, __dirname) {
  /* ... */
});
```
@[1](node injected objects)
@[2](our written code)

---?code=./src/network-configuration.js&lang=javascript

---

## Callbacks

- single thread
- non-blocking i/o |


---?code=./src/handle-request.js&lang=javascript
@[4](HTTP headers)
@[7-9](handle product request)
@[9-11](all other request)
@[12](always end the response)

---?code=./src/product-controller.js&lang=javascript
@[5](GET request)
@[8](POST request)

---?code=./src/get-product.js&lang=javascript
@[4-5](product or products?)
@[8-12](GET product)
@[13-15](GET products)
@[17-18](response)

---?code=./src/get-product.js&lang=javascript
@[3-5](append chunk to buffer)
@[5-10](join chunks and log)

---
## Event Emitter

- asynchronous
- calls all listeners |
- custom emitters |








