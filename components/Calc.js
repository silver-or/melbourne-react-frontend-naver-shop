import React, { useState } from "react";
import { memberCalc } from "../api";
import Layout from "../containers/Layout";
export default function Calc () {
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, opcode, num2} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target; // name : 키 값
        setInputs({...inputs, [name] : value})
    }

    const handleClick = (e) => {
       e.preventDefault()
       memberCalc({num1, opcode, num2}).then(res => setResult(res.data)).catch(err => console.log(`에러 발생 : ${err}`))
    }
    
    return (<Layout>
        <h1>계산기</h1>
        <form>
            <label><b>num1</b></label> <br/>
            <input name="num1" onChange={handleChange}/> <br/>
            <label><b>연산자</b></label> <br/>
            <select name="opcode" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select> <br/>
            <label><b>num2</b></label> <br/>
            <input name="num2" onChange={handleChange}/> <br/>
            <div>
                <button onClick={handleClick}>계산하기</button> &nbsp;
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </Layout>)
}
