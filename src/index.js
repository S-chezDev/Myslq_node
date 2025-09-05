import app from './app.js'
import {PORT} from './config.js'

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));