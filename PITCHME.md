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
1. Node Version Manager

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
@[1-3](import modules)
@[5-15](handle incoming request)
@[17-19](listen for request)

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

## TL;DR require

1. core module  
1. node_modules |
1. local module |

---

## Exporting
---?code=./src/network-configuration&lang=javascript





