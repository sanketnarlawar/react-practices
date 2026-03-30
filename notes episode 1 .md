# Notes Episode 1

## app.js theory

This file demonstrates how to create React elements directly with `React.createElement` instead of using JSX.

- `React.createElement(type, props, children)` creates a React element object.
- The first argument is the HTML tag name, such as `"div"`, `"h1"`, or `"h2"`.
- The second argument is an object of props, like `id` or `className`.
- The third argument can be a string, a single element, or an array of child elements.

In this example:
- A parent `div` element is created with `id: "parent"`.
- Inside it, there are two child `div` elements.
- Each child `div` contains an `h1` and an `h2` element.

The code also includes a commented-out example of creating a single heading element:
- `React.createElement("h1", { id: "heading", className: "heading" }, "hello world to the react!")`
- This shows how props and text content are passed to a React element.

The React element tree is then connected to the browser:
- `document.getElementById("root")` finds the DOM node with id `root`.
- `ReactDOM.createRoot(...)` creates a React root for that node.
- `root.render(parent)` renders the React element tree into the page.

Finally, `console.log(parent.props.children)` prints the children array of the parent element, which helps to inspect the React structure in the browser console.

## index.css theory

This stylesheet defines one CSS rule for an element with id `heading`.

- `#heading` targets a DOM element whose attribute is `id="heading"`.
- `color: rgba(0, 98, 255, 0.63)` sets the text color to a semi-transparent blue.
- `text-align: center` centers the text inside the element.

This style only applies when an element actually uses `id="heading"`.

## index.html theory

This HTML file sets up the basic page structure and imports React.

- `<!DOCTYPE html>` declares the document type as HTML5.
- `<html lang="en">` sets the page language to English.
- `<meta charset="UTF-8">` ensures the page uses UTF-8 character encoding.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` makes the page responsive on mobile devices.
- `<link rel="stylesheet" href="./index.css">` imports the stylesheet.

The body contains:
- `<div id="root"></div>` which is the mount point for the React app.
- The React and ReactDOM libraries loaded from the CDN.
- `<script src="./app.js"></script>` which runs the app code after the libraries are loaded.

- CDN - Content Delivery Network.
- CORS - Cross-origin Resource Sharing 
When the browser opens this page, React starts by rendering the element tree from `app.js` into the `root` div.
