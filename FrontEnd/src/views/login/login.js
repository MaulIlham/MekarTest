import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signIn } from '../../services/LoginService';

class Login extends Component {
    constructor(props){
      super(props)
      this.state={
        userName:'',
        password:'',
      }
    }


    login=()=>{
        const { userName, password } = this.state
        signIn({userName,password})
        .then(data=>{
          if(data.roles[0]==="ROLE_ADMIN"){
            localStorage.setItem('@token', data.token)
            localStorage.setItem('@userData', data)
            this.props.history.push('/dashboard')
            console.log(data.token);
          }
        })
        .catch(err=>{
          console.log(err);
        })
    }

  render() {
    const { userName, password } = this.state

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
                        <Input type="text" value={userName}
                          placeholder="Username" autoComplete="username"
                          onChange={(e)=>this.setState( {...this.state, userName:e.target.value} )}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value={password}
                          placeholder="Password" autoComplete="current-password"
                          onChange={(e)=>this.setState( {...this.state, password:e.target.value} )}
                        />
                      </InputGroup>
                        <Col className="text-center">
                          <Button color="primary" onClick={()=>this.login()} className="px-4">Login</Button>
                        </Col>
                        <Col className="text-center">
                          <Button color="link" className="px-0">Forgot password?</Button>
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
