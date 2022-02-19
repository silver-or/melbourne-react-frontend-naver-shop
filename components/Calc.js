import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Calc () {
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState("")
    const calculate = () => {
        let num1 = document.getElementById('num1').value // num1의 상태값 가져오기
        let opcode = document.getElementById('opcode').value
        let num2 = document.getElementById('num2').value
        setNum1(num1)
        setOpcode(opcode)
        setNum2(num2) 
        switch (opcode) {
            case '+' : setResult(num1 + opcode + num2 + " = " + (Number(num1) + Number(num2))); break;
            case '-' : setResult(num1 + opcode + num2 + " = " + (Number(num1) - Number(num2))); break;
            case '*' : setResult(num1 + opcode + num2 + " = " + (Number(num1) * Number(num2))); break;
            case '/' : setResult(num1 + opcode + num2 + " = " + (Number(num1) / Number(num2))); break;
            case '%' : setResult(num1 + opcode + num2 + " = " + (Number(num1) % Number(num2))); break;
            default : setResult("올바른 연산자가 아닙니다."); break;
        }
    }
    return (<Layout>
    <h1>계산기</h1>
    <form>
        <label><b>num1</b></label> <br/>
        <input id="num1"/> <br />
        <label><b>연산자</b></label> <br/>
        <select name="" id="opcode">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select> <br />
        <label><b>num2</b></label> <br/>
        <input id="num2"/> <br/>
        <button onClick={() => {calculate()}}>계산하기</button>
    </form>
    <div>결과 : {result} </div>
    </Layout>)
}
