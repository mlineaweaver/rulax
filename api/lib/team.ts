import { Person, Players, Staff } from "./api-interfaces";
import { idify } from "../utils/idify"

export const PLAYERS_LIST: Players[] = [
    {
        name: 'Gabby Rothermund',
        hometown: 'Dublin, Ohio',
        gradYear: '2023',
        position: 'Attack',
        number: '7',
    },
    {
        name: 'Lex Parker',
        hometown: 'Saint Paul, Minnesota',
        gradYear: '2022',
        position: 'Attack',
        number: '33',
    },
   
];

export const STAFF_LIST: Staff[] =[
    {
       name: 'Sarah Kellner',
       hometown: 'Syracuse, New York',
       title: 'Head Coach',
        college: 'Cornell',
        bio: `Sarah Kellner begins her 16th season as Regis University head women's lacrosse head coach in 2021-22. Kellner is a four-time Rocky Mountain Athletic Conference (RMAC) Coach of the Year recipient (2014, 2017, 2019 and 2021). She was also named the 2019 Intercollegiate Women's Lacrosse Coaches Association (IWLCA) Midwest Region Coach of the Year.`,
    },
    {
        name: 'Alexis Petrarca',
        hometown: 'Centennial, Colorado',
        title: 'Assistant Coach',
        college: 'Seton Hill',
        bio: `Petrarca was named the Assistant Women's Lacrosse Coach in the Summer of 2020 after spending the previous two seasons as the graduate assistant.`,
    },
    {
        name: 'Melissa Hastie',
        hometown: 'Los Alamitos, California',
        title: 'Graduate Assistant Coach',
        college: 'Regis University',
        bio: `Melissa Hastie begins her third season as a member of the coaching staff in 2021-22. Hastie was a four-year letterwinner for the Rangers from 2012-16. She played in 68 total games ranking second in minutes played (3,751) and third in games started (64). Over the course of her playing career, she netted 54 career goals and tallied 24 assists for 78 points.`
    },
]