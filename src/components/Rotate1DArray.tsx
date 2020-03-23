import React, {FunctionComponent, useState} from 'react';
import rotateArray from "@bgoodman/rotate-array";
import "./ArrayStyles.scss";

interface Props {}

const Rotate1DArray: FunctionComponent<Props> = () => {

  const [inputArray, setInputArray] = useState<string[]>(["0", "1", "2", "3", "4", "5"]);

  const rotateArrayLeft = () => {
    setInputArray(rotateArray<string>(inputArray, -1) as string[])
  }

  const rotateArrayRight = () => {
    setInputArray(rotateArray<string>(inputArray, 1) as string[])
  };

  const addToArray = () => {
    const newArray = [...inputArray, inputArray.length.toString()];
    setInputArray(newArray);
  };

  const removeLastFromArray = () => {
   setInputArray(inputArray.slice(0, -1));
  };

  const handleElemUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newArray = inputArray.map( (elem, index) => {
      return parseInt(event.target.name) === index ? event.target.value : elem
    });
    setInputArray(newArray);
  };


  return <div className="array-1d-wrapper" >
      < div className="toolbar-wrapper">
          <div className="toolbar">
            <input type="button" value="Rotate Left" onClick={rotateArrayLeft}/>
            <input type="button" value="Rotate Right" onClick={rotateArrayRight}/>
          </div>
          <div className="toolbar">
            <input type="button" value="Remove Element" onClick={removeLastFromArray} disabled={inputArray.length === 1}/>
            <input type="button" value="Add Element" onClick={addToArray} />
          </div>
      </div>

      <div className="array-1d">
        {inputArray.map( (elem, index) => {
          return <input type="text" onChange={handleElemUpdate} key={index} className="array-element" name={index.toString()} value={elem} />
        })}
      </div>

  </div>
}



export default Rotate1DArray;
