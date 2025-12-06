'use client';
import axios from 'axios';

// bootstrap...
//import styles from './dropdown.module.scss';

interface Args {
   label: string,
   episodes: string[],
   sendToParent: (x:string) => void,
}

function getAnswers(date:string) {
    console.log(date);
}

const dropdown:React.FC<Args> = ({ label, episodes, sendToParent }) => {
//const dropdown: React.FC<args> = ({ label }) => {
  return (
    <>
    <div className="dropdown-center">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => sendToParent(label) }>{ label }</button>
        <ul className="dropdown-menu" style={{ height:"600px", overflowY:"scroll"}}>
            {
                episodes.map((e, index) => {
                    return (
                        <li key={ index }>
                            <a className="dropdown-item" href="#" onClick={ () => { getAnswers(e) }}><span>{ e }</span></a>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    </>
  )
}

export default dropdown;
