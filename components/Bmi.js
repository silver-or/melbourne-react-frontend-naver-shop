import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi () {
    const [inputs, setInputs] = useState({}) // 세 개로 나뉜 것을 JSON({})으로 합침
    const {name, height, weight} = inputs; // Object Destructuring (구조 분해 할당) // 꺼내면서 객체에 이름 부여

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name] : value})   
    }

    const handleClick = (e) => {
        /*
        let username = document.getElementById('name').value
        console.log('username : ' + username)
        let height = document.getElementById('height').value
        console.log('height : ' + height)
        let weight = document.getElementById('weight').value
        console.log('weight : ' + weight)
        */
        e.preventDefault() // HTML이 default
        const bmiRequest = {name, height, weight}
        alert(`사용자 이름 : ${JSON.stringify(bmiRequest)}`)
        /*
        axios.get(`http://localhost:8080/member/bmi/홍길동/180.5/80.5`)
        .then((res) => {
            alert(`답장이 도착했습니다. [내용] ${JSON.stringify(res.data)}`)
        }) 
        */
    }
    
    return (<Layout>
        <form>
            <h1>Bmi</h1>
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
    </Layout>)
}
