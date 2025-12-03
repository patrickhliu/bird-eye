import axios from "axios";
import sequelize from '../../../config/sequelize'; // Import the singleton instance
import JeopardyQuestion from "../../dbModels/JeopardyQuestion";

export async function GET(request: Request) {
    //await sequelize.sync(); // Sync the model with the database

    let dbResults = await JeopardyQuestion.findAll({ limit: 10 });


    return new Response(JSON.stringify(dbResults), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}