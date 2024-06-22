import express from 'express';
import userRoutes from './routes/userRouter.js';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser';
const app = express();
const port = process.env.PORT || 3000;

//carpeta publica
app.use(express.static('public'));

//motor de plantillas
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use('/', userRoutes);


app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));