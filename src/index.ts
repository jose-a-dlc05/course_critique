import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './lib/env';
import colleges from './routes/colleges';
import courses from './routes/courses';

// This is the point of entry
const app: express.Express = express();
app.use(express.json());
app.use(cors());

// Dev logging middleware
if ((process.env.NODE_ENV = 'development')) {
	app.use(morgan('dev'));
}

app.use('/api/v1/colleges', colleges);
app.use('/api/v1/courses', courses);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
	);
});

export default app;
