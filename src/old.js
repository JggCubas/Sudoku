import React, { useState } from 'react';
import './Sudoku.css';

/*
=================== PART 1
INSTRUCTIONS:

Design and create functional components
that can best fit an abstract implementation of this Sudoku grid.

* A back-end developer team is working on an API that can save cells and it's required values,
  But you don't have the API specifications yet.

* You don't need to make the components do anything but display the Sudoku Grid




=================== PART 2
INSTRUCTIONS:

Bring to life your Sudoku.

* The user must be able to click on a cell to selected it.
    * use the "selected" CSS class name

* When a cell is selected the user can press a key to modify the cell's value
    - a Backspace must erase the cell's value

=================== PART 3
(...)

*/

function Celda(){
  const [state,setState] = useState({
    isActive : false,
    valor : ''
  });

  return (
    <div onKeyDown = {(e) => { setState({valor : '2' }); }}  className={ `sudoku-cell ${ state.isActive ? 'selected' : '' }` }   onClick={()=> { setState({isActive : true}); }}>
      <div className="sudoku-number">
        { state.valor }
      </div>
    </div>
  );
}


function Bloques(){

  const arreglo = [];
  // js
  for(let i = 1; i <= 9; i++){
    arreglo.push(<Celda />);
  }
  return(
    <div className="sudoku-cell">
        <div className="sudoku-grid">
          {arreglo}
        </div>
      </div>
  );
}

function Malla(){
  // js

  const arreglo = [];
  // js
  for(let i = 1; i <= 9; i++){
    arreglo.push(<Bloques />);
  }
  return(
    <div className="sudoku-grid">
      {arreglo}
    </div>
  );
}

function Sudoku(){

    return (<div className="container">
        <div className="sudoku" tabIndex="0">
            <Malla />
        </div>
    </div>);
}

function SudokuBackup(){

    return (<div className="container">
        <div className="sudoku" tabIndex="0">

            <div className="sudoku-grid">
                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>

                <div className="sudoku-cell">
                    <div className="sudoku-grid">
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                        <div className="sudoku-cell"><div className="sudoku-number"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Sudoku;
 
