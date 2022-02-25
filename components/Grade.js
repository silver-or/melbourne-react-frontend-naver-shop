import React, {useState} from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";
export default function Grade () {
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;
    const [result, setResult] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const handleClick = (e) => {
       e.preventDefault()
       memberGrade({name, kor, eng, math}).then(res => setResult(res.data)).catch(err => console.log(`에러 발생 : ${err}`))
    }
    
    return (<Layout>
        <h1> 성적표</h1>
        <form>
            <div>
                <label><b>이름</b></label> <br/>
                <input name="name" onChange={handleChange}/> <br />
                <label><b>국어 성적</b></label> <br/>
                <input name="kor" onChange={handleChange}/> <br />
                <label><b>영어 성적</b></label> <br/>
                <input name="eng" onChange={handleChange}/> <br />
                <label><b>수학 성적</b></label> <br/>
                <input name="math" onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}>결과 확인하기</button> &nbsp;
                <button>취소</button>
            </div>
        </form>
        <div>{result}</div>
    </Layout>)
}
