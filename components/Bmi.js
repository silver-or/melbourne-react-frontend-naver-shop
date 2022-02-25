import React, {useState} from "react";
import Layout from "../containers/Layout";
import {memberBmi} from '../api/index'
export default function Bmi () {
    const [inputs, setInputs] = useState({}) // 세 개로 나뉜 것을 JSON({})으로 합침
    const {name, height, weight} = inputs; // Object Destructuring (구조 분해 할당) // 꺼내면서 객체에 이름 부여
    const [result, setResult] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})   
    }

    const handleClick = (e) => {
        e.preventDefault() // HTML이 default
        memberBmi({name, height, weight})
        .then(res => {
            setResult(res.data)
        })
        .catch(err => console.log(`에러 발생 : ${err}`))
    }
    
    return (<Layout>
        <h1>Bmi</h1>
        <form>
            <div>
                <label><b>이름</b></label> <br/>
                <input type="text" name="name" onChange={handleChange}/> <br/>
                <label><b>키</b></label> <br/>
                <input type="text" name="height" onChange={handleChange}/> <br/>
                <label><b>몸무게</b></label> <br/>
                <input type="text" name="weight" onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}>BMI 지수 체크</button> <br/>
                <div></div>
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </Layout>)
}
