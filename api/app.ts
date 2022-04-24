import { Player } from './../src/app/registration/registration.component';
import { JoshTest, Registration, Players } from './lib/api-interfaces';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { TeamService } from './src/team.service';
import { RegistrationService } from './src/registration.service';
import cors from 'cors';
import mongoose from 'mongoose';
import {Schema, Model} from 'mongoose';


const app = express();
const PORT = process.env.PORT || 4000;

// mongoose instance connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://127.0.0.1:27017/lax');
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', () => {
  // console.log('Connection Successful!');
// });

// const PlayerSchema = new Schema<Player>({
//     headshotUrl: {type: String}, 
//     name: {type: String}, 
//     hometown: {type: String}, 
//     gradYear: {type: String}, 
//     position: {type: String}, 
//     number: {type: String}
// })
// //const PlayerSchema = new mongoose.Schema({headshotUrl: String, name: String, hometown: String, gradYear: String, position: String, number: String});
// const DBPlayer: Model<Player> = mongoose.model('players',PlayerSchema);
// const p: Array<Player> = DBPlayer.find({}).limit(1);


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Routes
const teamService  = new TeamService();
const registrationService = new RegistrationService();
app.get('/api/team/players',(req, res) => {
    const players = teamService.getPlayersList();
    res.send({
        msg: 'Found players',
        players,
    });
});

app.get('/api/team/staff',(req, res) => {
    const staff = teamService.getStaffList();
    res.send({
        msg: 'Found staff list',
        staff,
    });
});

app.post('/api/register',(req,res) => {

    // TODO: Error handle
    const registration: Registration = req.body();
    const response = registrationService.createRegistration(registration);
   
    res.send({
        msg: 'Registered'
    });
});

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:$('+PORT+')');
});
