'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import logger from '../../config/winston';
import axios from 'axios';
import Dropdown from '../../components/custom/dropdown';
import Dropdown2 from '../../components/custom/dropdown2';

export default function page() {
    ///logger.info("123 kid...");
    const childRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [years, setYears] = useState([]);

    useEffect(() => {
        executeSearch();
    }, []);

    useEffect(() => {
        console.log('update ', years);
    }, [years]);

    async function executeSearch() {
        //console.log("execute search...", {query:query, currentPage:currentPage, filters:filters});
        setLoading(true);

        try {
            const response = await axios('/api/jeopardy');
            setYears(years.concat(response.data.years));

            //console.log(response.data.years);
            //console.log(years);

            setLoading(false);


        } catch (error) {
            console.error("Error fetching data:", error);
            //setHasMore(false);
        }
    }

    function clickHandler(x:string) {
        console.log(x);
    }

    return (
        <>
        <div className="grid grid-cols-15 gap-1">
            { years.map((y, i) => (
                <Dropdown2 key={ i } label={ y } sendToParent={(x:string) => clickHandler(x) }></Dropdown2>
            ))}
        </div>
        </>
    )
}