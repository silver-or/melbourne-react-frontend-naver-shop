import React from "react";
import Layout from "../containers/Layout";
export default function Calc () {
    return (<Layout>
    <h1>계산기</h1>
        <form>
            <div>
                <label><b>숫자1</b></label> <br />
                <input /> <br />
                <label><b>연산자</b></label> <br />
                <input /> <br />
                <label><b>숫자2</b></label> <br />
                <input />
            </div>
            <div>
                <button>계산하기</button>
                <button>취소</button>
            </div>
        </form>
    </Layout>)
}
