import React from "react";
import  ReactDOM  from "react-dom/client";
    //react element 

// const title = (
// <h1 id="title" key="h2">
//     Food Villa
//     </h1>
// );

const Title =()=>(
    <a href="/">
    <img className="logo"
    alt="image"
   src="data:image/png;base64,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"
    />
   </a>
);

// jsx
// use functional component 
// const HeaderComponent = ()=>{//functinal  component 
//     return<h1>Namsate react functional component </h1>;
// };
//use aa bracket ()
const Header= ()=>{
    return(
        <div className="header">
            <Title/>
       <div className="List-item">
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
         </ul>
       </div>
    </div>
    );
  };

  const AppLayout = ()=>{
    return(
       { /**
         * header 
         *  List-item(Right side )
         * cart
         * body
         * search bar 
         * -Resturant List 
         * -Resturant Card
         * - card has img ,rating ,cusines,name
         * footer
         * links
         * copyright
         */
    }
    )
  }
    //its not madotary tu writen a return becz arrow fuction neend not react
    //  that by we not use return but your wish you want to writen not any problem.

// const HeaderComponent2 = ()=>{
//     (
//     <h1>Namsate react functional component </h1>
//     );
// };


const root = ReactDOM.createRoot(document.getElementById('root'))
// passing root element the inside root
// async differ
root.render(<Header/>)