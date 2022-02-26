import React, { useState } from "react";
import { memberLotto } from "../api";
import Layout from "../containers/Layout";
export default function Lotto() {
    const [result, setResult] = useState('')
    let duplicate = true
    let numbers = []
    const Random = () => {
        return Math.floor((Math.random() * 45) + 1)
    }
    const handleClick = (e) => {
        e.preventDefault()
        let num = 0;
        for (let i = 0; i < 6; i++) {
            duplicate = true
            while (duplicate) {
                num = Random()
                duplicate = false
                for (let j = 0; j < i; j++) {
                    if(numbers[j] == num) {
                        duplicate = true
                        break;
                    }
                }
            }
            numbers[i] = num;
        }
        memberLotto({numbers}).then(res => setResult(res.data)).catch(err => console.log(`에러 발생 : ${err}`))
    }
    return (<Layout>
        <h1>로또 추첨</h1>
        <div><button onClick={handleClick}>결과 확인하기</button></div> <br/>
        <div>{result}</div>
    </Layout>)
}