import JeopardyQuestion from "../../dbModels/JeopardyQuestion";
import _ from 'lodash';

const { Sequelize, Op, DataTypes, Model } = require('sequelize');

export async function GET(request: Request) {
    //await sequelize.sync(); // Sync the model with the database

    let dbResults:any = await JeopardyQuestion.findAll({
        //limit:10,
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('air_year')), 'air_year']
        ],
        order: [
            ['air_year', 'DESC']
        ],
    });

    const years = _.map(dbResults, 'air_year');

    /* console.log(years);

    for(let y of years) {
        console.log(y);

        dbResults = await JeopardyQuestion.findAll({
            where: {
                air_year: y
            },
            order: [
                ['air_date', 'ASC']
            ],
        });

        console.log(dbResults);
    } */

    let output = {
        years: years
    };


    return new Response(JSON.stringify(output), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}