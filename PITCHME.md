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

---

---?code=index.js&lang=javascript
@[1-3](import modules)
@[5-15](handle incoming request)
@[17-19](listen for request)






