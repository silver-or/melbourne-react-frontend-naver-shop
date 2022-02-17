import React from "react";
import Layout from "../containers/Layout";
export default function Bmi () {
    return (<Layout>
    <h1>Bmi</h1>
        <form>
            <div>
                <label><b>이름</b></label> <br />
                <input /> <br />
                <label><b>키</b></label> <br />
                <input /> <br />
                <label><b>몸무게</b></label> <br />
                <input />
            </div>
            <div>
                <button>Bmi 지수 계산하기</button>
                <button>취소</button>
            </div>
        </form>
    </Layout>)
}
