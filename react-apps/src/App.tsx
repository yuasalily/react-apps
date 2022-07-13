import React, {useState} from 'react';

import './App.css';



function Operand(props) {
    return (
        <input type="text" value={props.operand}/>
    )
}

function Operator(props) {
    return (
        <div>{props.operator}</div>
    )
}

function Equation() {
    const [ operand1, setOperand1] = useState(0);
    const [ operator1, setOperator1] = useState("+");
    const [ operand2, setOperand2] = useState(0);
    const [ operator2, setOperator2] = useState("+");
    const [ operand3, setOperand3] = useState(0);
    const [ operator3, setOperator3] = useState("+");
    const [ operand4, setOperand4] = useState(0);
    const eq = "=";
    const rightValue = 10;
    return (
        <div>
            <Operand operand={operand1}/>
            <Operator operator={operator1}/>
            <Operand operand={operand2}/>
            <Operator operator={operator2}/>
            <Operand operand={operand3}/>
            <Operator operator={operator3}/>
            <Operand operand={operand4}/>
            <Operator operator={eq}/>
            <Operand operand={rightValue}/>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <Equation/>
    </div>
  );
}

export default App;
