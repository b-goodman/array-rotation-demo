import React, {FunctionComponent, useState} from "react";
import rotateArray from "@bgoodman/rotate-array";
import "./ArrayStyles.scss";

interface Props {};

const Rotate2DArray: FunctionComponent<Props> = () => {

    const [inputArray, setInputArray] = useState<string[][]>([ ["0", "1", "2"], ["0", "1", "2"], ["0", "1", "2"] ]);

    const addRow = () => {
        const rowLength = inputArray[0].length;
        const newRow = new Array<string>(rowLength).fill("0");
        newRow.forEach( (el_, index) => {
            newRow[index] = index.toString()
        });
        setInputArray([...inputArray, newRow]);
    };

    const deleteRow = () => {
        if (inputArray.length > 1) {
            setInputArray(inputArray.slice(0, -1));
        }
    };

    const addColumn = () => {
        const rowLength = inputArray[0].length;
        const newArray = inputArray.map( (row) => {
            return [...row, rowLength.toString()]
        });
        setInputArray(newArray);
    };

    const deleteColumn = () => {
        const newArray = inputArray.map( (row) => {
            return row.slice(0, -1)
        });
        setInputArray(newArray);
    };

    const rotateLeft = () => {
        setInputArray(rotateArray<string>(inputArray, -1) as string[][])
    };

    const rotateRight = () => {
        setInputArray(rotateArray<string>(inputArray, 1) as string[][])
    };

    const handleElemUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const [rowIndex, colIndex] = event.target.name.split("-");
        const newArray = inputArray.map( (row, thisIndex) => {
            if( parseInt(rowIndex) === thisIndex ) {
                row[parseInt(colIndex)] = event.target.value;
                return row
            } else {
               return row
            }
        });
        setInputArray(newArray);
    };

    return <div className="array-2d-wrapper">

        < div className="toolbar-wrapper">
            <div className="toolbar">
                <input type="button" value="Rotate Left" onClick={rotateLeft}/>
                <input type="button" value="Rotate Left" onClick={rotateRight}/>
            </div>
            <div className="toolbar">
                <input type="button" value="Add Row" onClick={addRow} />
                <input type="button" value="Delete Row" onClick={deleteRow} disabled={inputArray.length === 1} />
                <input type="button" value="Add Column" onClick={addColumn} />
                <input type="button" value="Delete Column" onClick={deleteColumn} disabled={inputArray[0].length === 1} />
            </div>
        </div>

        <div className="array-2d">
            {inputArray.map( (row, rowIndex) => {
                return <div className="array-1d" key={`row-${rowIndex}`}>
                    {row.map( (elem, index) => {
                        return <input type="text" className="array-element" onChange={handleElemUpdate} key={`${rowIndex}-${index}`} name={`${rowIndex}-${index}`} value={elem} />
                    })}
                </div>
            })}
        </div>

    </div>
};

export default Rotate2DArray;