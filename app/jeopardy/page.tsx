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
    ///logger.info("123 kid...");

    const childRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [years, setYears] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [questions, setQuestions] = useState(Array<singleQuestion>);
    const [gridArr, setGridArr] = useState<number[]>([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
    const [gridNumbers, setGridNumbers] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState(null);


    useEffect(() => {
        getYears();
    }, []);

    useEffect(() => {
        //console.log(years);
        //console.log(episodes);
        console.log(showModal);
        console.log(question);
    }, [years, episodes, showModal, question]);

    async function getYears() {
        //console.log("execute search...", {query:query, currentPage:currentPage, filters:filters});
        setLoading(true);

        try {
            const response = await axios('/api/jeopardy/years');
            setYears(years.concat(response.data.years));

            //console.log(response.data.years);
            //console.log(years);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            //setHasMore(false);
        }
    }

    async function getEpisodesByYear(x:string) {
        try {
            const response = await axios('/api/jeopardy/episodes/' + x);
            //console.log(response.data.episodes);
            setEpisodes(response.data.episodes);

            //console.log(response.data.years);
            //console.log(years);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            //setHasMore(false);
        }
    }

    async function createBoardGrid(date:string) {
        setGridArr([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
        setGridNumbers([]);
        setQuestions([]);

        try {
            const response = await axios('/api/jeopardy/episode/' + date);
            //console.log(response.data);
            if(currentRound == 1) setQuestions(response.data.round_one);

            do {
                let rand = Math.floor(Math.random() * 30);
                let num = gridArr.splice(rand, 1);
                if(num.length == 0) continue;

                //setGridNumbers(gridNumbers.concat(num));
                setGridNumbers(gridNumbers => gridNumbers.concat(num));
                await new Promise(r => setTimeout(r, 100));
            } while (gridArr.length > 0)
        } catch (error) {
            console.error("Error fetching data:", error);
            //setHasMore(false);
        }
    }

    const showQuestion = (q:any) => {
        setShowModal(true);
        setQuestion(q);
    }

    return (
        <>
            <QuestionModal></QuestionModal>
            <div className="row my-2">
                <p className="text-center">
                    { currentRound == 1 && <span>Jeopardy!</span> }
                </p>
            </div>
            <div className="grid grid-cols-15 gap-1">
                { years.map((y, i) => (
                    <Dropdown3 key={ i } label={ y } episodes={ episodes } sendToParent={ (x:string) => getEpisodesByYear(x) } sendShowNo={ (x:string) => createBoardGrid(x) }></Dropdown3>
                ))}
            </div>
            <div className="row mt-5">
                { currentRound == 1 &&
                    <Grid questions={ questions } currentRound={ currentRound } gridArr={ gridArr } gridNumbers={ gridNumbers } showQuestion={ (q:any) => showQuestion(q) }></Grid>
                }
            </div>
        </>
    )
}