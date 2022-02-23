import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { TeamService } from './src/team.service';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Routes
const teamService  = new TeamService();
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

    // const response = registrationService.Register(req);
    res.send({
        msg: 'Registered'
    });
});

app.listen(PORT, () => {
    console.log('Server is running at http://localhost:$('+PORT+')');
});