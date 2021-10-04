import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import English from '../English/English';
import French from '../French/French';
import German from '../German/German';
import Japanese from '../Japanese/Japanese';
import MiddleItems from '../MiddleItems/MiddleItems';
import TopItems from '../TopItems/TopItems';

const Home = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <TopItems></TopItems>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Router>
                        <MiddleItems></MiddleItems>
                        <Switch>
                            <Route path="/home/english">
                                <English></English>
                            </Route>
                            <Route path="/home/japanese">
                                <Japanese></Japanese>
                            </Route>
                            <Route path="/home/french">
                                <French></French>
                            </Route>
                            <Route path="/home/german">
                                <German></German>
                            </Route>
                        </Switch>
                    </Router>
                </Col>
            </Row>
        </div>
    );
};

export default Home;