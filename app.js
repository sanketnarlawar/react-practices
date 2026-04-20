//write this type of the structure using the react
{/* <div>
    <div>
        <h1>i am an h1 tag</h1>
        <h2>i am an h2 tag</h2>
    </div>
    <div>
        <h1>i am an h1 tag</h1>
        <h2>i am an h2 tag</h2>
    </div>
</div> */}

import React from "react";
// reactElement(object) => HTML(Browser Undersands)

import react from "react"; 
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},[
         React.createElement("div",{id:"children1"},[ 
             React.createElement("h1",{}, "i am Sanket Narlawar 🚀"),
             React.createElement("h2",{}, "Hi all of you ")
   ] ), 
   React.createElement("div",{id:"children2"},[
        React.createElement("h1",{}, "i am an h1 tag"),
        React.createElement("h2",{}, "i am an h2 tag")
   ] ),
]);
// const heading = React.createElement("h1",{id : "heading",className:"heading"},"hello world to the react!");

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);

 console.log(parent);