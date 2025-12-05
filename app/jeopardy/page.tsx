'use client';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import logger from '../../config/winston';
import axios from 'axios';
import Dropdown from '../../components/custom/dropdown';

export default function page() {
    ///logger.info("123 kid...");
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

    return (
        <>
        <div className="grid grid-cols-15 gap-1">
            { years.map((y, i) => (
                <Dropdown></Dropdown>
            ))}
        </div>
        </>
    )
}