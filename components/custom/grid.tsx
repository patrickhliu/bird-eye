import React, { useState, useEffect, } from 'react';
import { singleQuestion, QuestionList } from '../../lib/interfaces';
import '../../styles/global.scss';

const grid: React.FC<QuestionList> = (props) => {
    //console.log(props);
    const [gridNumbers, setGridNumbers] = useState<number[]>([]);

    useEffect(() => {
        let randNumber = Math.floor(Math.random() * 25) + 1;
        if(gridNumbers.length < 0) gridNumbers.push(randNumber);
        console.log(gridNumbers);


    }, []);

    const pat = () => {
        console.log('a');
    }

    setTimeout(async () => {
        do {
            let rand = Math.floor(Math.random() * 25) + 1;

            if(!gridNumbers.includes(rand)) {
                gridNumbers.push(rand);
            }

            console.log(gridNumbers);
            await new Promise(r => setTimeout(r, 750));

        } while (gridNumbers.length < 25)
    }, 100);

    const showQuestion = (o:singleQuestion) => {
        //console.log(o);
        let randNumber = Math.floor(Math.random() * 25) + 1;

        if(gridNumbers.includes(randNumber)) {
            console.log(randNumber + ' already selected...');
            return;
        }

        console.log(randNumber);
        setGridNumbers(gridNumbers.concat([randNumber]));


    }

  return (
    <div className="container jeopardy col-md-10 offset-md-1" style={{ backgroundColor:"#111", }}>
        <div className="row g-2 line1">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if(index > 5) return;

                    return (
                        <div className="col" key={ index }>
                            <div className="text-center category" onClick={ () => { showQuestion(o); }}><b>{ o.category }</b></div>
                        </div>
                    );
                })
            }
        </div>
        <div className="row g-2 line2">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if(props.currentRound == 1 && o.value == 100) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { showQuestion(o); }}><b>${ o.value }</b></div>
                            </div>
                        );
                    }
                })
            }
        </div>
        <div className="row g-2">
            {
                props.questions.map((o:singleQuestion, index:number) => {
                    if(props.currentRound == 1 && o.value == 200) {
                        return (
                            <div className="col" key={ index }>
                                <div className="text-center question pointer" onClick={ () => { showQuestion(o); }}><b>${ o.value }</b></div>
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
                                <div className="text-center question pointer" onClick={ () => { showQuestion(o); }}><b>${ o.value }</b></div>
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
                                <div className="text-center question pointer" onClick={ () => { showQuestion(o); }}><b>${ o.value }</b></div>
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
                                <div className="text-center question pointer" onClick={ () => { showQuestion(o); }}><b>${ o.value }</b></div>
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