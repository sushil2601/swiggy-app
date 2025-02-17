import React from "react"
import ReactDOM from "react-dom/client"

// const heading =  React.createElement("h1",{id:'heading'},"React is most Powerfull library.");

const heading = (<h1>React is most Powerfull library.</h1>)

const Title = () =>(
    <h1>Hello React friends</h1>
)

const HeadingComponent = () =>{
    return (
        <div>
            
            <h1>This is functional component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />)  //--> way to render component.



/* 

            {Title()}
            <Title />
            <Title>
            </Title>

These all three things are same thing .

*/