import React, { useState, useEffect, } from 'react';
import { singleQuestion, QuestionList } from '../../lib/interfaces';
import '../../styles/global.scss';

const grid: React.FC<QuestionList> = (props) => {
    const [colorGridNumbers, setColorGridNumbers] = useState<number[]>([]);

    const handleClick = (index:number) => {
        setColorGridNumbers(colorGridNumbers.concat([index]));
    }

  return (
    <div className={ props.currentRound != 3 ? "container jeopardy col-md-10 offset-md-1" : "container jeopardy col-md-2 offset-md-5" }>
        <div className="row g-2">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if(index % 5 != 0) return;

                    return (
                        <div className="col" key={ index }>
                            <div className="text-center category"><b>{ o.category }</b></div>
                        </div>
                    );
                })
            }
        </div>
        <div className="row g-2 line1">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if((props.currentRound == 1 && o.round == "Jeopardy!" && o.value == 100) || (props.currentRound == 2 && o.round == "Double Jeopardy!" && o.value == 200)) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); handleClick(index); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) === -1 && <b>${ o.value }</b>}
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) !== -1 && <b style={{ color:"grey" }}>${ o.value }</b>}
                                </div>
                            </div>
                        );
                    } else if (props.currentRound == 3 && o.round == "Final Jeopardy!") {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); handleClick(index); }}>
                                    { colorGridNumbers.indexOf(index) === -1 && <b>${ o.value }</b>}
                                    { colorGridNumbers.indexOf(index) !== -1 && <b style={{ color:"grey" }}>${ o.value }</b>}
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
        <div className="row g-2 line2">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if((props.currentRound == 1 && o.round == "Jeopardy!" && o.value == 200) || (props.currentRound == 2 && o.round == "Double Jeopardy!" && o.value == 400)) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); handleClick(index); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) === -1 && <b>${ o.value }</b>}
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) !== -1 && <b style={{ color:"grey" }}>${ o.value }</b>}
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
        <div className="row g-2 line3">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if((props.currentRound == 1 && o.round == "Jeopardy!" && o.value == 300) || (props.currentRound == 2 && o.round == "Double Jeopardy!" && o.value == 600)) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); handleClick(index); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) === -1 && <b>${ o.value }</b>}
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) !== -1 && <b style={{ color:"grey" }}>${ o.value }</b>}
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
        <div className="row g-2 line4">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if((props.currentRound == 1 && o.round == "Jeopardy!" && o.value == 400) || (props.currentRound == 2 && o.round == "Double Jeopardy!" && o.value == 800)) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); handleClick(index); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) === -1 && <b>${ o.value }</b>}
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) !== -1 && <b style={{ color:"grey" }}>${ o.value }</b>}
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
        <div className="row g-2 line5">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if((props.currentRound == 1 && o.round == "Jeopardy!" && o.value == 500) || (props.currentRound == 2 && o.round == "Double Jeopardy!" && o.value == 1000)) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); handleClick(index); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) === -1 && <b>${ o.value }</b>}
                                    { props.gridNumbers.indexOf(index) !== -1 && colorGridNumbers.indexOf(index) !== -1 && <b style={{ color:"grey" }}>${ o.value }</b>}
                                </div>
                            </div>
                        );
                    }
                })
            }
        </div>
    </div>
  )
}

export default grid;