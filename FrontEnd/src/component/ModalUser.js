import React, { Component } from 'react';
import {
  Button,
  Card, CardBody, CardHeader,
  Col, Form, FormGroup, Input, Label,
  Row,
} from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {saveUser} from "../services/UsersService";

export default class ModalUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        birth_date:'',
        identity_number:'',
        profession:'',
        education:'',
      },
      valid: true,
    }
  }

  handleValidation = () => {
    if (this.state.user.name === ''){
      alert("Field Name still empty!")
    }else if ( this.state.user.identity_number === '') {
      alert("field identity Number still empty!")
    }else if (this.state.user.identity_number.length < 15){
      alert("Identity Number must not be less than 16!")
    }else {
      console.log(this.state.user.identity_number.length)
      this.handleSave()
    }
  }

  handleSave = () => {
    const {toggleModal, saveData} = this.props
      saveUser(this.state.user).then(response => {
          alert("Insert Data Success")
          saveData(response.data)
      }).catch(err => {
          alert("Insert Data Failed")
      })
      toggleModal()
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> New User
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="name-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name-input" name="name-input"
                             value={this.state.user.name}
                             onChange={value => this.setState({ user: {...this.state.user, name: value.target.value}}) }
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="birtdate-input">Birth Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        value={`${this.state.user.birth_date}`}
                        onChange={value => this.setState({ user: {...this.state.user, birth_date: value.target.value}})}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="identity-input">Identity Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="identity-input" name="identity-input"
                             value={this.state.user.identity_number}
                             onChange={value => this.setState({ user: {...this.state.user, identity_number: value.target.value}})}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="profession-input">Profession</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Select
                        labelId="select-education"
                        id="select-education"
                        value={`${this.state.user.profession}`}
                        onChange={value => this.setState({ user: {...this.state.user, profession: value.target.value}})}
                        style={{width: 200}}
                      >
                        <MenuItem value="">Please select</MenuItem>
                        <MenuItem value="PNS">PNS</MenuItem>
                        <MenuItem value="Wirausaha">Wirausaha</MenuItem>
                        <MenuItem value="Wiraswasta">Wiraswasta</MenuItem>
                      </Select>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="education-input">Education</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Select
                        labelId="select-education"
                        id="select-education"
                        value={`${this.state.user.education}`}
                        onChange={value => this.setState({ user: {...this.state.user, education: value.target.value}})}
                        style={{width: 200}}
                      >
                        <MenuItem value="">Please select</MenuItem>
                        <MenuItem value="SD">SD</MenuItem>
                        <MenuItem value="SMP">SMP</MenuItem>
                        <MenuItem value="SMA">SMA</MenuItem>
                        <MenuItem value="Diploma">Diploma</MenuItem>
                        <MenuItem value="Sarjana">Sarjana</MenuItem>
                        <MenuItem value="Magister">Magister</MenuItem>
                        <MenuItem value="Doktor">Doktor</MenuItem>
                      </Select>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                    </Col>
                    <Col xs="12" md="9">
                      <Button color="primary" onClick={this.handleValidation}>Save</Button>
                    </Col>
                  </FormGroup>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
