import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Calc () {
    const [inputs, setInputs] = useState({})
    const {num1, opcode, num2} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target; // name : 키 값
        setInputs({ ...inputs, [name] : value})
    }

    const handleClick = (e) => {
        /*
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
        */
       e.preventDefault()
       const calcRequest = {num1, opcode, num2}
       alert(`${JSON.stringify(calcRequest)}`)
    }
    
    return (<Layout>
    <h1>계산기</h1>
    <form>
        <label><b>num1</b></label> <br/>
        <input name="num1" onChange={handleChange}/> <br />
        <label><b>연산자</b></label> <br/>
        <select name="opcode" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select> <br />
        <label><b>num2</b></label> <br/>
        <input name="num2" onChange={handleChange}/> <br/>
        <button onClick={handleClick}>계산하기</button>
    </form>
    </Layout>)
}
