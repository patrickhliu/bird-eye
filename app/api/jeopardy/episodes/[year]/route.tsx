import JeopardyQuestion from "../../dbModels/JeopardyQuestion";
import _ from 'lodash';
import { getFormattedDate, } from '@/lib/utils'
const { Sequelize, Op, DataTypes, Model } = require('sequelize');

export async function GET(request: Request, {
    params,
    }: {
        params: Promise<{ year: string; }>;
    }) {
    //await sequelize.sync(); // Sync the model with the database

    const routeArgs = await params;
    //console.log(routeArgs.year);

    /* let dbResults:any = await JeopardyQuestion.findAll({
        where: {
            air_year: routeArgs.year
        },
        order: [
            ['air_date', 'ASC']
        ],
    }); */

    let dbResults:any = await JeopardyQuestion.findAll({
        //limit:10,
        where: {
            air_year: routeArgs.year
        },
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('air_date')), 'air_date'],
            'show_no',
        ],
        order: [
            ['air_date', 'ASC']
        ],
    });

    let dbResultsFormatted:Object[] = [];

    _.forEach(dbResults, function(obj, key) {
        let d = new Date(obj.air_date);
        let f = new Date(d.setUTCHours(12));
        //console.log(f.toUTCString());

        let a = {
            show_no: obj.show_no,
            air_date: getFormattedDate(f)
        };

        dbResultsFormatted.push(a);
    });

    let output = {
        episodes: dbResultsFormatted,
    };

    return new Response(JSON.stringify(output), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}