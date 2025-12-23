import React, { useState, useEffect, } from 'react';
import { singleQuestion, QuestionList } from '../../lib/interfaces';
import '../../styles/global.scss';
import QuestionModal from './questionModal';

const grid: React.FC<QuestionList> = (props) => {
    //console.log(props);
    //const [props.gridArr, setprops.gridArr] = useState<number[]>(props.props.gridArr);
    //const [props.gridNumbers, setprops.gridNumbers] = useState<number[]>(props.props.gridNumbers);

    /* const props.showQuestion = (o:singleQuestion) => {
        const myModalElement = document.getElementById('question-modal');
        console.log(myModalElement);
        var myModal = new bootstrap.Modal(myModalElement);
        myModal.show();
        console.log(o);
    } */

  return (
    <div className="container jeopardy col-md-10 offset-md-1">
        <div className="row g-2">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if(index > 5) return;

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
                    if(props.currentRound == 1 && o.value == 100) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && <b>${ o.value }</b>}
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
                    if(props.currentRound == 1 && o.value == 200) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && <b>${ o.value }</b>}
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
                    if(props.currentRound == 1 && o.value == 300) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && <b>${ o.value }</b>}
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
                    if(props.currentRound == 1 && o.value == 400) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && <b>${ o.value }</b>}
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
                    if(props.currentRound == 1 && o.value == 500) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { props.showQuestion(o); }}>
                                    { props.gridNumbers.indexOf(index) !== -1 && <b>${ o.value }</b>}
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