import './App.css';

import React , {Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component{
  // Inside the Class based Component ( which is inheriting the Component Class of react) , we should add a render function which should return the JSX
  apiKey = process.env.REACT_APP_NEWS_API_X;
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    
    return (
      <React.StrictMode>
        <Router>
          <div>
            <Navbar/>
            <LoadingBar
              color='#1cf518'
              progress={this.state.progress}
              height={3}
            />
            <Routes>
              <Route exact path="/" element={<News key={'general'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='general'/>}/>
              <Route exact path="/business" element={<News key={'business'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='business'/>}/>
              <Route exact path="/entertainment" element={<News key={'entertainment'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='entertainment'/>}/>
              <Route exact path="/health" element={<News key={'health'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='health'/>}/>
              <Route exact path="/science" element={<News key={'science'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='science'/>}/>
              <Route exact path="/sports" element={<News key={'sports'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='sports'/>}/>
              <Route exact path="/technology" element={<News key={'technology'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='technology'/>}/>
              <Route exact path="/general" element={<News key={'genera'} apiKey={this.apiKey} changeProgress={this.setProgress} pagesize={12} country={'in'} category='general'/>}/>
            </Routes>
          </div>
        </Router>
      </React.StrictMode>
    )
    
  }
}

export default App;

// Api : 00315c7a8f784914966c1f94e8673053