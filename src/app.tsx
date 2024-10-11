import { BrowserRouter as Router} from 'react-router-dom'
import { MyRoutes } from './routes'
export function App() {
  return (
    <Router>
  <MyRoutes />
    </Router>
  )
}

