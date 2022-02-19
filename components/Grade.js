import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade () {
    const [name, setName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const [result, setResult] = useState("")
    const getGrade = () => {
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
            "수학 점수 : " + math + "," +
            "총점 : " + (Number(kor) + Number(eng) + Number(math)))
    }
    return (<Layout>
        <h1> 성적표</h1>
        <div>
            <label><b>이름</b></label> <br/>
            <input id="name"/> <br />
            <label><b>국어 성적</b></label> <br/>
            <input id="kor"/> <br />
            <label><b>영어 성적</b></label> <br/>
            <input id="eng"/> <br />
            <label><b>수학 성적</b></label> <br/>
            <input id="math"/>
        </div>
        <div>
            <button onClick={() => {getGrade()}}>결과 확인하기</button>
            <div>{result}</div>
            <button>취소</button>
        </div>
    </Layout>)
}
