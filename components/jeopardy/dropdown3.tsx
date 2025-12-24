'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';

interface Episode {
  show_no: string,
  air_date: string,
}

interface Args {
   label: string,
   episodes: Episode[],
   sendToParent: (x:string) => void,
   sendShowNo: (x:string) => void,
}

const dropdown:React.FC<Args> = ({ label, episodes, sendToParent, sendShowNo, }) => {
  return (
    <>
    <div className="container">
        <div className="dropdown-center">
            <button className="btn btn-primary dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={ () => sendToParent(label) }>{ label }</button>
            <ul className="dropdown-menu" style={{ height:"600px", overflowY:"scroll"}}>
                {
                    episodes.map((e, index) => {
                        return (
                            <li key={ index }>
                                <a className="dropdown-item" href="#" onClick={ () => { sendShowNo(e.show_no) }}><span>{ e.air_date }</span></a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </div>
    </>
  )
}

export default dropdown;
