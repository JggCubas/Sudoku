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
function Celda(props){
  const tecla = event => {
    props.capturaTecla(event.key);
  };
  return (
    <div tabIndex={-1} onKeyDown = { tecla }  className={  `sudoku-cell ${ props.value.isActive ? 'selected' : '' } ` }
      onClick={props.darclick}>
      <div className={ `sudoku-number ${ props.value.erroneo ? 'erroneo' : '' } ` }>
        { props.value.valor }
      </div>
    </div>
  );
}
function Bloques(props){
    return(
      <div className="sudoku-cell">
          <div className="sudoku-grid">
            {
              props.celdas.map((x,index)=>{
                return <Celda key={` cel_${index} `} bloq={props.bloq} celda={index} value={x} capturaTecla={(valortecla) => props.capturaTecla(props.bloq,index,valortecla)} darclick={() => props.darclick(props.bloq,index)} />
              })
            }
          </div>
        </div>
    );
}
function Malla(){
  let sw = new Array(9);
  for(let x = 0 ; x < 9 ;x++){
    sw[x] = new Array(9);
    for(let y = 0 ; y < 9 ;y++){
      sw[x][y] = {isActive:false,valor:'',erroneo:false};
    }
  }
  const [state,setState] = useState({
    arreglo: sw
  });
  function eventoClick(bloq,cel){
    let clon = state.arreglo.slice();
    clon.map((x)=>{ x.map((y) => { y.isActive = false;}); });
    clon[bloq][cel]['isActive'] = true;
    setState({arreglo : clon});
  }
  function eventoTecla(bloq,cel,valortecla){
    if(isNaN(valortecla)) return;
    let clon = state.arreglo.slice();
    if(valortecla == 0) {valortecla = ''};
    clon[bloq][cel]['valor'] = valortecla;
    let erroneo = false;
    clon[bloq].map((x,index) => {
      if(x.valor == valortecla && index != cel){
        erroneo = true
      }
    });
    clon[bloq][cel]['erroneo'] = erroneo;
    setState({
       arreglo : clon
    });
  }
  return(
    <div className="sudoku-grid">
      {state.arreglo.map((x,index)=>{return <Bloques key={` bloq_${index} `} bloq={index} celdas={x} capturaTecla={(bloq,cel,valortecla) => eventoTecla(bloq,cel,valortecla) } darclick={ (bloq,cel) => eventoClick(bloq,cel) } />})}
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

// 
// function SudokuBackup(){
//
//     return (<div className="container">
//         <div className="sudoku" tabIndex="0">
//
//             <div className="sudoku-grid">
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//
//                 <div className="sudoku-cell">
//                     <div className="sudoku-grid">
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                         <div className="sudoku-cell"><div className="sudoku-number"></div></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>);
// }

export default Sudoku;
