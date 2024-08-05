import React from "react";
import { createRoot } from "react-dom/client";

// const para = React.createElement("p", {id: "para"}, "para Element");
const para = <p id="para"> 
<b>Bold text</b>
<span>This is span text</span>
</p>


// The XML like code written inside javascript  file is called as javascript  XML (JSX)
const root = createRoot(document.getElementById("app"))



root.render(para);

// this code will not be sent to the brower as we have written.

// the code inside is combined into bundle.js and then that file will besent to the browser
// During bundling the pre process called `bable ` is used to covert the XML like code into the respective react element  and then adds the complid element into bundle.js

// <p id="para"> Para Element</p> + Bable => React.createElement("p", {id: "para"}, "para Element");




