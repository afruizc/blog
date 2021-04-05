import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetail from './components/BlogDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/blogs/:blogName">
                    <div className="blogWrapper">
                        <BlogDetail />
                    </div>
                </Route>
            </Switch>

        </Router>
  );
}

export default App;
