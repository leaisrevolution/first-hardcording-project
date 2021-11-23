import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/mainNav';

export default function Test4(props){
    const { history } = props;
    const [answer, setAnswer] = useState({});
    const [check,setCheck] = useState({
        ans_1 : "",
        ans_2: "",
        ans_3: "",
        ans_4: "",
        ans_5: ""
    });
    const handleChange = e => {
        setCheck({
            ...check,
            [e.target.name] : e.target.value
        })
    }
    const questionList = async() =>{
            const res = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=73587f95ef371322626bf3a537e9eb3b&q=6')
            setAnswer({
                question: res.data.RESULT[0].question,
                answer151: res.data.RESULT[15].answer01,
                answer152: res.data.RESULT[15].answer02,
                answer153: res.data.RESULT[15].answer03,
                answer154: res.data.RESULT[15].answer04,
                answer161: res.data.RESULT[16].answer01,
                answer162: res.data.RESULT[16].answer02,
                answer163: res.data.RESULT[15].answer03,
                answer164: res.data.RESULT[15].answer04,
                answer171: res.data.RESULT[17].answer01,
                answer172: res.data.RESULT[17].answer02,
                answer173: res.data.RESULT[15].answer03,
                answer174: res.data.RESULT[15].answer04,
                answer181: res.data.RESULT[18].answer01,
                answer182: res.data.RESULT[18].answer02,
                answer183: res.data.RESULT[15].answer03,
                answer184: res.data.RESULT[15].answer04,
                answer191: res.data.RESULT[19].answer01,
                answer192: res.data.RESULT[19].answer02,
                answer193: res.data.RESULT[15].answer03,
                answer194: res.data.RESULT[15].answer04

            })
    }
    useEffect(()=>{
        questionList()
    }, [] )
        //렌더링 시에 한 번만 questionList를 실행한다.

    function handleSubmit(e){
        e.preventDefault();
        if(check.ans_1 ==='' || check.ans_2 ==='' || check.ans_3 ==='' || check.ans_4 ==='' || check.ans_5 ===''){
            alert('모든 항목을 체크해주세요.')
        }
        else{
            window.location.href ='/test2'
        }
    }
    return(
        <div>

        <MainNav />
            <div className="container">

                <div1>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q16.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_1"
                                        value={answer.answer151}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                    >{answer.answer151}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_1"
                                    value={answer.answer152}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer152} </button>

                                </div>
                        </div>

                        <div1>
                            <p className="explanation">
                            > {answer.answer151} : {answer.answer153}
                            <br />
                            > {answer.answer152} : {answer.answer154}  </p>
                        </div1>

                    </div>


                </div1>

                <hr className="foo3" />

                <div2>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q17.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_2"
                                        value={answer.answer161}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer161}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_2"
                                    value={answer.answer162}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer162} </button>

                                </div>

                        </div>

                        <div2>
                                <p className="explanation">
                                > {answer.answer161} : {answer.answer163}
                                <br />
                                > {answer.answer162} : {answer.answer164}  </p>
                        </div2>

                    </div>

                </div2>

                <hr className="foo3" />

                <div3>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q18.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_3"
                                        value={answer.answer171}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer171}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_3"
                                    value={answer.answer172}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer172} </button>

                                </div>

                            <hr className="foo2" />
                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer.answer171} : {answer.answer173}
                                <br />
                                > {answer.answer172} : {answer.answer174}  </p>
                        </div3>

                    </div>


                </div3>

                <hr className="foo3" />

                <div4>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q19.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_4"
                                        value={answer.answer181}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer181}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_4"
                                    value={answer.answer182}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer182} </button>

                                </div>

                            <hr className="foo2" />
                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer.answer181} : {answer.answer183}
                                <br />
                                > {answer.answer182} : {answer.answer184}  </p>
                        </div3>

                    </div>


                </div4>

                <hr className="foo3" />

                <div5>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q20.
                        </h4>

                        <h5 className="qustionText">{answer.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                                <div>
                                    <button className= "answerBtn"
                                        type="radio"
                                        name="ans_5"
                                        value={answer.answer191}
                                        onClick={handleChange}
                                        onChange={
                                            (event) => {
                                                setAnswer(event.target.value);
                                            }
                                        }
                                        // onClick={}
                                    >{answer.answer191}</button>
                                </div>

                                <div>
                                <button className="answerBtn2"
                                    type="radio"
                                    name="ans_5"
                                    value={answer.answer192}
                                    onClick={handleChange}
                                    onChange={
                                        (event) => {
                                            setAnswer(event.target.value);
                                        }
                                    }
                                > {answer.answer192} </button>

                                </div>
                            <hr className="foo2" />

                        </div>

                        <div3>
                                <p className="explanation">
                                > {answer.answer191} : {answer.answer193}
                                <br />
                                > {answer.answer192} : {answer.answer194}  </p>
                        </div3>

                    </div>
                </div5>

                <hr className="foo3" />

                {/* <Link to='/guide'><button type="submit">이전</button></Link>
                <button type="submit" onClick={handleSubmit}>다음</button> */}


            <div Id="btn">

                <button
                    type="submit"
                    className="back"
                    onClick={() => {history.push("/guide");}}> 뒤로가기</button>

                <button

                    type="submit"
                    className="start"
                    onClick={() => {
                        history.push("/test2")
                        // if (valid)
                        // history.push("/test1");
                        // else
                        // setError("예시 항목을 선택해주세요.")
                    }}
                    > 다음으로

                </button>

                {/* { (answer01 === '1') || (answer02 === '2') ?
                    <Link to="/test1">
                        <button
                            type="submit"
                            className="start"
                            onClick={() =>
                            {history.push("/test1");}}> 검사시작
                        </button>
                    </Link>
                    :
                        <button
                            type="submit"
                            className="start"
                            disabled ="false">
                            검사시작
                        </button>
                } */}

            </div>

            </div>




    </div>

    )
}
