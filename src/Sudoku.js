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
//5524976106


function Celda(props){
  const [state,setState] = useState({
    isActive : false,
    valor : ''
  });
  const tecla = event => {
    setState({valor : event.key,isActive : state.isActive});
  };
  return (
    <div tabIndex={-1} onKeyDown = { tecla }  className={  `sudoku-cell ${ props.isActive ? 'selected' : '' }` }
      onClick={props.darclick}>
      <div className="sudoku-number">
        { state.valor }
      </div>
    </div>
  );
}


class Bloques extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    // const arreglo = [];
    // // js
    // for(let i = 1; i <= 9; i++){
    //   arreglo.push(<Celda />);
    // }
    return(
      <div className="sudoku-cell">
          <div className="sudoku-grid">
            {
              this.props.celdas.map((x,index)=>{
                return <Celda key={` cel_${index} `} row={this.props.row} cel={index} value={x} darclick={() => this.props.darclick(this.props.row,index)} />
              })
            }
          </div>
        </div>
    );
  }
}

class Malla extends React.Component{
constructor(props) {
  super(props);
  this.state = {
      arreglo: Array(9).fill({isActive:false,valor:''}).map(x => Array(9).fill({isActive:false,valor:''}))
    };
}
eventoClick(row,cel){
  let clon = this.state.arreglo.slice();
  clon[0][0]['isActive'] = true;
  // [row,cel].isA/ctive = true;
  this.setState({
    arreglo : clon
  });
  // this.state.arreglo[row][cel].isActive = true;
  console.log(clon);
  console.log(this.state.arreglo);
}
render(){
  // const arreglo = [];
  // // js
  // for(let i = 1; i <= 9; i++){
  //   arreglo.push(<Bloques />);
  // }
  return(
    <div className="sudoku-grid">
      {this.state.arreglo.map((x,index)=>{return <Bloques key={` row_${index} `} row={index} celdas={x} darclick={(row,cel)=> this.eventoClick(row,cel)} />})}
    </div>
  );
}
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
