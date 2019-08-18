## ModularizeHTMLWithoutFramework

**Aim**: To use modularize HTML code without any framework.

#### Problem:
Suppose I have a very long.... index HTML file. Everytime I need to edit or debug something I need to scroll down in that long HTML code. 
Like once I was working on an electron application and it has various user actions and each user action corresponds to a modal in it for further interactions. These modals are displayed only when required but take code lines on main index file while increasing the code lines, making it difficult to debug the other main UI code elements. Also it make difficult for other developers working with me to interpret or understand application code.

#### Solutions:
First of all when I started to search for any options, I just came across options like use any framework like Angular, etc. But I don't wanted to use any framework which will increase my project code size for just small feature. Eventually I came across these two solutions,

1. **Loading HTML module dynamically using jQuery**
One solution is to use jQuery's load function to load a HTML code from one file to another, like this
```js
$(function () {
    $('#modalDiv').load('modal.inc.html');
});
```
But I faced some drawbacks with this method. This solution is fully effective when your web app is running on browser. But when I tried running the web app on electron, jQuery behaves differently and events bound on `document.ready()` didn't worked out.

2. **Importing HTML doc using link tag**
So I found another solution which worked well. It worked the way like #include works in C++. I imported the HTML doc using link tag, similar to inclusion of stylesheets.
```js
<link rel="import" href="modal.inc.html" onload="handleLoad(event)" onerror="handleError(event)">
```
We can even define functions for events like `onload` and `onerror` to handle import load success and error.
```js
function handleLoad(e) {
    console.log('Loaded import: ' + e.target.href);
}

function handleError(e) {
    console.log('Error loading import: ' + e.target.href);
}
```

#### Dependencies:
- jQuery
- Bootstrap 3
- Electron

**_References:_**
- https://stackoverflow.com/questions/34577569/how-i-can-modularize-static-html-file
- https://www.html5rocks.com/en/tutorials/webcomponents/imports/