import React, { Component } from 'react';
import { Card, Col, Row } from 'reactstrap';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import UserReducer from "../../reducer/UserReducer";
import UserTable from "./UserTable";

export default class extends Component{
  render() {
    const userStore=createStore(UserReducer);
    return (
      <div className="animated fadeIn">
        <Provider store={userStore}>
          <Row>
            <Col>
              <Card>
                <UserTable/>
              </Card>
            </Col>
          </Row>
        </Provider>
      </div>
    );
  }
}
