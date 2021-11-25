import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';
import Foo from '../components/foo';



export default function Test1(props){
    const { history } = props;
    let Numbers = [...Array(50)].map((v, i) => i);
    const [answer, setAnswer] = useState([]);
    console.log(answer);
    const [answerlist, setAnswerList] = useState([]);
    const location = useLocation();
    const [check,setCheck] = useState({
        ans_1: "",
        ans_2: "",
        ans_3: "",
    });

    const handleChange = e => {
        setCheck({
            ...check,
            [e.target.name] : e.target.value
        })
    }


    async function asyncCall() {
        try {
            const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=73587f95ef371322626bf3a537e9eb3b&q=6')
            const res = response.data.RESULT;
            setAnswer(res.splice(16, 29)) //28번까지

            return res;
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.localStorage.setItem("check", JSON.stringify(check));
    }, asyncCall(), [check])


    function handleSubmit(e){
        if(check.ans_1 ==='' || check.ans_2 ==='' || check.ans_3 ===''){
            alert('전부 선택 안하면 저 플젝 제출 못해요. 빠짐 없이 선택하셈.')
        }
        else{
            history.push({
            pathname: '/completed',
            state: {...location.state, ...check}
            })
            window.location.href ='/completed' // 이동할 다음 페이지
        }
    }

    return(

        // div 협곡에 오신걸 환영합니다.

        <div>

        <MainNav />
            <div className="container">

                <div1>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q{Numbers[26]}.
                        </h4>

                        <h5 className="qustionText">{answer[0]?.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                        <div>
                            <button className=
                                            {answerlist == answer[0]?.answer01
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                name="ans_1"
                                value={answer[0]?.answer01}
                                onClick={(event) => {
                                    setAnswerList(event.target.value);
                                }}
                                onChange={handleChange}
                                
                            >{answer[0]?.answer01}</button>
                        </div>

                        <div>
                            <button className=
                                            {answerlist == answer[0]?.answer02
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                name="ans_1"
                                value={answer[0]?.answer02}
                                onClick={(event) => {
                                    setAnswerList(event.target.value);
                                    console.log(event.target.className)
                                }}
                                onChange={handleChange}
                            >{answer[0]?.answer02}</button>
                        </div>


                        </div>

                            <div1>
                            <span className="explanation">
                            > {answer[0]?.answer01} : {answer[0]?.answer03}
                            <br />
                            > {answer[0]?.answer02} : {answer[0]?.answer04}  </span>
                            </div1>

                        </div>


                </div1>

                <Foo />

                <div2>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q{Numbers[27]}.
                        </h4>

                        <h5 className="qustionText">{answer[0]?.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className=
                                            {answerlist == answer[1]?.answer01
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                        name="ans_2"
                                        value={answer[1]?.answer01}
                                        onClick={(event) => {
                                            setAnswerList(event.target.value);
                                        }}
                                        onChange={handleChange}

                                    >{answer[1]?.answer01}</button>
                                </div>

                                <div>
                                <button className=
                                            {answerlist == answer[1]?.answer02
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                    name="ans_2"
                                    value={answer[1]?.answer02}
                                    onClick={(event) => {
                                        setAnswerList(event.target.value);
                                    }}
                                    onChange={handleChange}

                                > {answer[1]?.answer02} </button>

                                </div>

                        </div>

                        <div2>
                                <p className="explanation">
                                > {answer[1]?.answer01} : {answer[1]?.answer03}
                                <br />
                                > {answer[1]?.answer02} : {answer[1]?.answer04}  </p>
                        </div2>

                    </div>

                </div2>

                <Foo />


                <div3>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q{Numbers[28]}.
                        </h4>

                        <h5 className="qustionText">{answer[0]?.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className=
                                            {answerlist == answer[2]?.answer01
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                        name="ans_3"
                                        value={answer[2]?.answer01}
                                        onClick={(event) => {
                                            setAnswerList(event.target.value);
                                        }}
                                        onChange={handleChange}
                                    >{answer[2]?.answer01}</button>
                                </div>

                                <div>
                                <button className=
                                            {answerlist == answer[2]?.answer02
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                    name="ans_3"
                                    value={answer[2]?.answer02}
                                    onClick={(event) => {
                                        setAnswerList(event.target.value);
                                    }}
                                    onChange={handleChange}

                                > {answer[2]?.answer02} </button>

                                </div>

                            <Foo />
                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer[2]?.answer01} : {answer[2]?.answer03}
                                <br />
                                > {answer[2]?.answer02} : {answer[2]?.answer04}  </p>
                        </div3>

                    </div>


                </div3>

                <Foo />



                <div Id="btn">
                    <Link to='/test5'>
                        <button type="submit"
                                className="back"
                                >뒤로가기</button></Link>

                        <button type="submit"
                                className="start"
                                onClick={handleSubmit}>
                                    결과보기</button>
                </div>

            </div>


    </div>
    )
 }