import React, { useState } from "react";
import Layout from "../containers/Layout";
export default function Sort() {
    let numbers = []
    let duplicate
    const [result, setResult] = useState('')

    const Random = () => {
        return Math.floor((Math.random() * 45) + 1)
    }

    const handleClick = (e) => {
        e.preventDefault()
        let num = 0
        for (let i = 0; i < 10; i++) {
            duplicate = true
            while (duplicate) {
                num = Random()
                duplicate = false
                for (let j = 0; j < i; j++) {
                    if (numbers[j] == num) {
                        duplicate = true
                        break
                    }
                }
            }
            numbers[i] = num
        }
    }
    
    return (<Layout>
        <h1>정렬</h1>
        <button onClick={handleClick}>정렬하기</button> <br/>
        <div>{result}</div>
    </Layout>)
}