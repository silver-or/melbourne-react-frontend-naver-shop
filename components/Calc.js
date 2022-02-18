import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Calc () {
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value // num1의 상태값 가져오기
        let num2 = document.getElementById('num2').value
        setNum1(num1)
        setNum2(num2) 
        setResult(Number(num1) + Number(num2))
    }
    return (<Layout>
    <h1>계산기</h1>
    <form>
        <label><b>숫자1</b></label> <br/>
        <input id="num1"/> <br />
        <label><b>연산자</b></label> <br/>
        <select name="" id="">
            <option value="">+</option>
            <option value="">-</option>
            <option value="">*</option>
            <option value="">/</option>
            <option value="">%</option>
        </select> <br />
        <label><b>숫자2</b></label> <br/>
        <input id="num2"/> <br/>
        <button onClick={() => {sum()}}>계산하기</button>
    </form>
    <div>결과 : {num1} + {num2} = {result} </div>
    </Layout>)
}
