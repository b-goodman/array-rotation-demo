import React, {FunctionComponent} from "react";
import Rotate1DArray from "./components/Rotate1DArray";
import Rotate2DArray from "./components/Rotate2DArray";


interface Props {};


const App: FunctionComponent<Props> = () => {

    return <div>
        <h1> Array Rotations</h1>
        <div>
            <h2>Rotate 1D Array</h2>
            <Rotate1DArray />

            <hr />
            <h2>Rotate 2D Array</h2>
            <Rotate2DArray />
        </div>
    </div>
}

export default App;