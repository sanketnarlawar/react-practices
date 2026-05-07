import react from "react";
import reactDOM from "react-dom/client";

// react.createElement => object => HTML Element render

//React/JSXS Element
const element =<h1>This Is Element By JSX </h1>

//React Component
const JsxHeading = () => (
    <h1 className="head" tabIndex="5">
    This Is component By React !
    </h1>
);


// React Component \

// Class Based Component - old way of writing component
const HeadingComponent = ()=> (
    <div id="container">
    {element}
    <JsxHeading />
        <h1 id="heading"> This Is The Heading By Function Based Component </h1>
    </div>
);
// Function Based Component- new way of writing component


const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
