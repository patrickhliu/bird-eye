import React from 'react';
import { singleQuestion, QuestionList } from '../../lib/interfaces';
import '../../styles/global.scss';

const grid: React.FC<QuestionList> = (props) => {
    console.log(props);

    const showQuestion = (o:singleQuestion) => {
        console.log(o);
    }

  return (
    <>
    <div className="row">
        {
            props.questions.map((o:singleQuestion, index:number) => {
                if(index > 5) return;

                return (
                    <div key={ index } className="col text-center jeopardy" onClick={ () => { showQuestion(o); } } style={{ border:"1px solid blue" }}>{ o.category }</div>
                );
            })
        }
    </div>
    <div className="row">
        {
            props.questions.map((o:singleQuestion, index:number) => {
                if(o.value != "$100") return;

                return (
                    <div key={ index } className="col text-center" onClick={ () => { showQuestion(o); } } style={{ border:"1px solid blue" }}>{ o.value }</div>
                );
            })
        }
    </div>
    <div className="row">
        {
            props.questions.map((o:singleQuestion, index:number) => {
                if(o.value != "$200") return;

                return (
                    <div key={ index } className="col text-center" onClick={ () => { showQuestion(o); } } style={{ border:"1px solid blue" }}>{ o.value }</div>
                );
            })
        }
    </div>
    <div className="row">
        {
            props.questions.map((o:singleQuestion, index:number) => {
                if(o.value != "$300") return;

                return (
                    <div key={ index } className="col text-center" onClick={ () => { showQuestion(o); } } style={{ border:"1px solid blue" }}>{ o.value }</div>
                );
            })
        }
    </div>
    <div className="row">
        {
            props.questions.map((o:singleQuestion, index:number) => {
                if(o.value != "$400") return;

                return (
                    <div key={ index } className="col text-center" onClick={ () => { showQuestion(o); } } style={{ border:"1px solid blue" }}>{ o.value }</div>
                );
            })
        }
    </div>
    <div className="row">
        {
            props.questions.map((o:singleQuestion, index:number) => {
                if(o.value != "$500") return;

                return (
                    <div key={ index } className="col text-center" onClick={ () => { showQuestion(o); } } style={{ border:"1px solid blue" }}>{ o.value }</div>
                );
            })
        }
    </div>
    </>
  )
}

export default grid;