import app from './app.js'
import {PORT} from './config.js'

const router = express.Router();

app.use(router);

app.listen(PORT);
console.log('server running on port', PORT);
