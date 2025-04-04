import express,{Router} from 'express'
import routes from './routes.js';


const App = express();

App.use(express.json())

App.use(routes)







export default App