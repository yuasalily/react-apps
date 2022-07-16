import React, {useState} from 'react';

import './App.css';

function getRandomOperator() {
    const operators = "+-*";
    return operators[Math.floor(Math.random() * operators.length)]
}

function calculate(eq: string) {
    return eval(eq);
}

type VerdictProps = {
    leftValue: Number
    rightValue: Number
}

function VerdictEquation(props: VerdictProps) {
    if (props.leftValue === props.rightValue) {
        return (
            <h1>Solved!</h1>
        )
    }
    return <h1>Not Solved</h1>

}

function Operand(props: any) {
    return (
        <input type="text" value={props.operand} onChange={(e) => {props.setValue(e.target.value)}}/>
    )
}

function Operator(props: any) {
    return (
        <div>{props.operator}</div>
    )
}

function Equation() {
    const [ operand1, setOperand1] = useState(0);
    const [ operator1, setOperator1] = useState(getRandomOperator());
    const [ operand2, setOperand2] = useState(0);
    const [ operator2, setOperator2] = useState(getRandomOperator());
    const [ operand3, setOperand3] = useState(0);
    const [ operator3, setOperator3] = useState(getRandomOperator());
    const [ operand4, setOperand4] = useState(0);
    const eq = "=";
    const rightValue = 10;
    return (
        <div>
            <Operand operand={operand1} setValue={setOperand1}/>
            <Operator operator={operator1}/>
            <Operand operand={operand2} setValue={setOperand2}/>
            <Operator operator={operator2}/>
            <Operand operand={operand3} setValue={setOperand3}/>
            <Operator operator={operator3}/>
            <Operand operand={operand4} setValue={setOperand4}/>
            <Operator operator={eq}/>
            <Operand operand={rightValue}/>
            <VerdictEquation leftValue={calculate(operand1+operator1+operand2+operator2+operand3+operator3+operand4)} rightValue={rightValue}/>
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
