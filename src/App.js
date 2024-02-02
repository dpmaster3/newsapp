import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'top-loading-bar/dist';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component {
  state = {
    progress: 0,
  };
  pageSize = 12;
  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              strict
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  category="general"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
            <Route
              exact
              strict
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  category="sports"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
            <Route
              exact
              strict
              path="/business"
              element={
                <News  
                  setProgress={this.setProgress}
                  key="business"
                  category="business"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
            <Route
              exact
              strict
              path="/health"
              element={
                <News 
                  setProgress={this.setProgress}
                  key="health"
                  category="health"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
            <Route
              exact
              strict
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  category="science"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
            <Route
              exact
              strict
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  category="technology"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
            <Route
              exact
              strict
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  category="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
