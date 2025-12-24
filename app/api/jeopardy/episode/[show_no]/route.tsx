import JeopardyQuestion from "../../dbModels/JeopardyQuestion";
import _ from 'lodash';
import { getFormattedDate, } from '@/lib/utils';
const { Sequelize, Op, DataTypes, Model } = require('sequelize');

export async function GET(request: Request, {
    params,
    }: {
        params: Promise<{ show_no: string; }>;
    }) {
    //await sequelize.sync(); // Sync the model with the database

    const routeArgs = await params;
    //console.log(routeArgs);

    let dbResults:any = await JeopardyQuestion.findAll({
        //limit:10,
        attributes: ['category', 'value', 'question', 'answer', 'round'],
        where: {
            show_no: routeArgs.show_no,
            round: 'Jeopardy!',
        },
        order: [
            ['category', 'ASC'], ['value', 'ASC']
        ],
    });

    let dbResults2:any = await JeopardyQuestion.findAll({
        //limit:10,
        attributes: ['category', 'value', 'question', 'answer', 'round'],
        where: {
            show_no: routeArgs.show_no,
            round: 'Double Jeopardy!',
        },
        order: [
            ['category', 'ASC'], ['value', 'ASC']
        ],
    });

    let dbResults3:any = await JeopardyQuestion.findAll({
        //limit:10,
        attributes: ['category', 'value', 'question', 'answer', 'round', 'show_no', 'air_date'],
        where: {
            show_no: routeArgs.show_no,
            round: 'Final Jeopardy!',
        },
        order: [
            ['value', 'ASC']
        ],
    });

    //let airDate:string = '';
    //let d = new Date(dbResults3[0].air_date);
    //let f = new Date(d.setUTCHours(12));
    //console.log(f.toUTCString());

    let output = {
        //air_date: getFormattedDate(f),
        show_no: dbResults3[0].show_no,
        round_one: dbResults,
        round_two: dbResults2,
        final: dbResults3,
    };

    return new Response(JSON.stringify(output), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}