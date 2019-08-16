import { h, render } from 'preact';
import Header from './components/header'
import Home from './routes/home'
import './style/index.scss'

const App = () => (
  <div className="wrapper">
    <Header />
    <Home />
  </div>
)

render(<App /> , document.getElementById('app'))