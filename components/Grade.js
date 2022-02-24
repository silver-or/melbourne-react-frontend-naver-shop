import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade () {
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const handleClick = (e) => {
        /*
        let name = document.getElementById('name').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setName(name)
        setKor(Number(kor))
        setEng(Number(eng))
        setMath(Number(math))
        setResult("이름 : " + name + ", " + 
            "국어 점수 : " + kor + ", " +
            "영어 점수 : " + eng + ", " +
            "수학 점수 : " + math + ", " +
            "총점 : " + (Number(kor) + Number(eng) + Number(math)) + ", " +
            "평균 : " + (Number(kor) + Number(eng) + Number(math)) / 3)
        */
       e.preventDefault()
       const gradeRequest = {name, kor, eng, math}
       alert(`${JSON.stringify(gradeRequest)}`)
    }
    
    return (<Layout>
        <h1> 성적표</h1>
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
            <button onClick={handleClick}>결과 확인하기</button>
            <button>취소</button>
        </div>
    </Layout>)
}
