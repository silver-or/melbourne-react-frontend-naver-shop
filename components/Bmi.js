import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi () {
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [result, setResult] = useState("")
    const getBmi = () => {
        let username = document.getElementById('username').value
        console.log('username : ' + username)
        let height = document.getElementById('height').value
        console.log('height : ' + height)
        let weight = document.getElementById('weight').value
        console.log('weight : ' + weight)
        setUsername(username)
        setHeight(Number(height))
        setWeight(Number(weight))
        setResult(username + "의 키 : " + height + ", 몸무게 : " + weight)
    }
    return (<Layout>
    <h1>Bmi</h1>
        <div>
            <label><b>이름</b></label> <br/>
            <input id="username"/> <br/>
            <label><b>키</b></label> <br/>
            <input id="height"/> <br/>
            <label><b>몸무게</b></label> <br/>
            <input id="weight"/>
        </div>
        <div>
            <button onClick={() => {getBmi()}}>Bmi 지수 계산하기</button>
            <div>{result}</div>
            <button>취소</button>
        </div>
    </Layout>)
}
