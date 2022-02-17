import React from "react";
import Layout from "../containers/Layout";
export default function Grade () {
    return (<Layout>
        <h1> 성적표</h1>
        <div>
            <label><b>이름</b></label> <br />
            <input /> <br />
            <label><b>국어 성적</b></label> <br />
            <input /> <br />
            <label><b>영어 성적</b></label> <br />
            <input /> <br />
            <label><b>수학 성적</b></label> <br />
            <input />
        </div>
        <div>
            <button>결과 확인하기</button>
            <button>취소</button>
        </div>
    </Layout>)
}
