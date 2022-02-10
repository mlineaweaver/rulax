import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Routes


app.listen(PORT, () => {
    console.log('Server is running at http://localhost:$('+PORT+')');
});