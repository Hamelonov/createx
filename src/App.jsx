import './app.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from "@/components/molecules/ScrollToTop";
import routes from './router/routes.jsx'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map(({path, element}) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
