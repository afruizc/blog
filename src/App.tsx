import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetail from './components/BlogDetails';
import BlogHome from './components/BlogHome';

function App() {
    return (
        <>
            <Router basename="/">
                <Switch>
                    <Route path="/blogs/:blogName">
                        <BlogDetail />
                    </Route>
                    <Route path="/">
                        <BlogHome />
                    </Route>
                </Switch>
            </Router>
        </>
  );
}

export default App;
