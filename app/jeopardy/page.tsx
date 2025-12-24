'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Dropdown from '../../components/jeopardy/dropdown';
import Dropdown3 from '../../components/jeopardy/dropdown3';
import Grid from '../../components/jeopardy/grid';
import QuestionModal from '../../components/jeopardy/questionModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { singleQuestion } from '../../lib/interfaces';
declare var bootstrap: any;

export default function page() {
    const childRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [years, setYears] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [questions1, setQuestions1] = useState(Array<singleQuestion>);
    const [questions2, setQuestions2] = useState(Array<singleQuestion>);
    const [questionsF, setQuestionsF] = useState(Array<singleQuestion>);
    const [questions, setQuestions] = useState(Array<singleQuestion>);
    const [gridArr, setGridArr] = useState<number[]>([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
    const [gridNumbers, setGridNumbers] = useState<number[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [showNo, setShowNo] = useState("");
    const [question, setQuestion] = useState<singleQuestion>({category:"", question:"", answer:"", value:0, round:"", map:""});

    useEffect(() => {
        getYears();
    }, []);

    useEffect(() => {
        if(loading) return;
        setLoading(true);

        setGridArr([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
        setGridNumbers([]);

        const fetchData = async () => {
          try {
                if(currentRound == 1 && showNo) {
                    const response = await axios('/api/jeopardy/episode/' + showNo);
                    setQuestions1(response.data.round_one);
                    setQuestions2(response.data.round_two);
                    setQuestionsF(response.data.final);
                    setQuestions(response.data.round_one);
                } else if(currentRound == 2) {
                    setQuestions(questions2);
                } else if(currentRound == 3) {
                    setQuestions(questionsF);
                }

                do {
                    let rand = Math.floor(Math.random() * 30);
                    let num = gridArr.splice(rand, 1);
                    if(num.length == 0) continue;

                    setGridNumbers(gridNumbers => gridNumbers.concat(num));
                    await new Promise(r => setTimeout(r, 100));
                } while (gridArr.length > 0)

                if(gridArr.length == 0) setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [showNo, currentRound]);

    async function getYears() {
        setLoading(true);

        try {
            const response = await axios('/api/jeopardy/years');
            setYears(years.concat(response.data.years));
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function getEpisodesByYear(x:string) {
        setLoading(true);

        try {
            const response = await axios('/api/jeopardy/episodes/' + x);
            setEpisodes(response.data.episodes);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const openModal = (q:any) => {
        setIsOpen(true);
        setQuestion(q);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const changeShowNo = (no:string) => {
        if(loading) return;
        setShowNo(no);
    }

    const changeRound = (num:number) => {
        if(loading) return;
        setCurrentRound(num);
    }

    return (
        <>
            <QuestionModal isOpen={isOpen} question={ question } closeModal={ closeModal }></QuestionModal>
            <div className="text-center my-4">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className={ currentRound == 1 ? "btn btn-warning" : "btn btn-primary" } onClick={ () => { changeRound(1); }}>Jeopardy!</button>
                    <button type="button" className={ currentRound == 2 ? "btn btn-warning" : "btn btn-primary" } onClick={ () => { changeRound(2); }}>Double Jeopardy!</button>
                    <button type="button" className={ currentRound == 3 ? "btn btn-warning" : "btn btn-primary" } onClick={ () => { changeRound(3); }}>Final Jeopardy!</button>
                </div>
            </div>
            <div className="grid grid-cols-15 gap-1">
                { years.map((y, i) => (
                    <Dropdown3 key={ i } label={ y } episodes={ episodes } sendToParent={ (x:string) => getEpisodesByYear(x) } sendShowNo={ (x:string) => changeShowNo(x) }></Dropdown3>
                ))}
            </div>
            <div className="row mt-5">
                {
                    <Grid questions={ questions } currentRound={ currentRound } gridArr={ gridArr } gridNumbers={ gridNumbers } showQuestion={ (q:any) => openModal(q) }></Grid>
                }
            </div>
        </>
    )
}