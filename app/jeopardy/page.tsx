'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Dropdown from '../../components/custom/dropdown';
import Dropdown3 from '../../components/custom/dropdown3';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function page() {
    ///logger.info("123 kid...");
    const childRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [years, setYears] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        getYears();
    }, []);

    useEffect(() => {
        //console.log(years);
        //console.log(episodes);
    }, [years, episodes]);

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

    return (
        <>
        <div className="grid grid-cols-15 gap-1">
            { years.map((y, i) => (
                <Dropdown3 key={ i } label={ y } episodes={ episodes } sendToParent={(x:string) => getEpisodesByYear(x) }></Dropdown3>
            ))}
        </div>
        </>
    )
}