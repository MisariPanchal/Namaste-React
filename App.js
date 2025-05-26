import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//React.creatElement()
// const reactElement = React.createElement(
//   "h1",
//   {},
//   "This is react element is created using React.creatElement()."
// );

//jsx ELement
// const jsxElement = <h1 className="jsxClass" tabIndex="2">This react element is created using JSX.</h1>;
// console.log(jsxElement);

//multiline jsxElement
// const jsxElement = (
//   <div className="jsxClass" tabIndex="2">
//     <h1>This is a multiline JSX.</h1>
//   </div>
// );

/*
React Component :
  - Class Components - OLD
  - Functional Component - NEW
  Ways to write a functional component
*/
// const Heading1 = () => {
//   return <h1>This is heading 1.</h1>
// }
// const Heading2 = () => <h2>This is heading 2.</h2>
// const Heading3 = function(){
//   return <h3>This is heading 3.</h3>
// }

//Component inside Component
// const Title = () => <h1>This is Title Component.</h1>;
// const Heading = () => {
//   return (
//     <div>
//       <Title/>
//       <h2>This is Heading Component.</h2>
//     </div>
//   );
// }

//Injecting JS code & Element inside Component
// const number = 2227;
// const title = <h1>This is title Element.</h1>;
// const Heading = () => {
//   return (
//     <div>
//       {number}
//       {title}
//       <h2>This is Heading Component.</h2>
//     </div>
//   );
// }

//Element inside Element
// const title = <h1>This is title Element.</h1>;
// const heading = (
//   <div>
//     {title}
//     <h2>This is heading Element.</h2>
//   </div>
// );

//Component inside Element
// const Heading = () => {
//   return (
//     <div>
//       <h2>This is Heading Component.</h2>
//     </div>
//   );
// };
// const title = (
//   <div>
//     <Heading />
//     <h1>This is title Element.</h1>
//   </div>
// );

//Ways to call React Component
const Heading = () => {
  return (
    <div>
      <h2>This is Heading Component.</h2>
    </div>
  );
};
const title = (
  <div>
    {Heading()}
    <Heading />
    <Heading></Heading>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
