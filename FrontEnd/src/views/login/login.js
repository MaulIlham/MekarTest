import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signIn } from '../../services/LoginService';

class Login extends Component {
    constructor(props){
      super(props)
      this.state={
        account: {
          username: ``,
          password: ``,
        },
      }
    }


    login=()=>{
        signIn(this.state.account)
        .then(data=>{
            localStorage.setItem('@token', data.token)
            this.props.history.push('/user')
        })
        .catch(err=>{
          console.log(err);
        })
    }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <Col className="text-center">
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      </Col>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.account.username}
                          placeholder="Username" autoComplete="username"
                          onChange={(e)=>this.setState({ account: {...this.state.account, username: e.target.value}}) }
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value={this.state.account.password}
                          placeholder="Password" autoComplete="current-password"
                               onChange={(e)=>this.setState({ account: {...this.state.account, password: e.target.value}}) }
                        />
                      </InputGroup>
                        <Col className="text-center">
                          <Button color="primary" onClick={()=>this.login()} className="px-4">Login</Button>
                        </Col>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
