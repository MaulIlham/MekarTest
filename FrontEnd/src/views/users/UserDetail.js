import React, { Component } from 'react';
import {
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Card,
    CardHeader,
    CardBody,
    Button,
} from "reactstrap";
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { getUserById, updateUser } from '../../services/UsersService';

export default class UserDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.location.id,
            disabled: true,
            user: {},
        }
    }

    componentDidMount() {
      this.getUser()
    }

    getUser = () => {
      getUserById(this.state.id).then(response => {
        this.setState({ user : response.data})
      })
    }

    updateUser = () => {
      updateUser(this.state.user).then(response => {
        this.toggleUpdate()
        if (response.message==="Success"){
          return(
            alert("Update Success")
          )
        }
      }).catch(err => {
        console.log(err)
      })
    }

    buttonSave = () => {
      return(
        <FormGroup row>
          <Col md="3">
          </Col>
          <Col xs="12" md="9">
            <Button color="primary" onClick={this.updateUser}>Save</Button>
          </Col>
        </FormGroup>
      )
    }

    toggleUpdate = () => {
      this.setState( {disabled: !this.state.disabled} )
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Detail User
                                <div className="card-header-actions">
                                  <Button color="primary" onClick={this.toggleUpdate}>update</Button>
                                  <span>&nbsp;&nbsp;</span>
                                  <Link to="/user"><Button color="primary" >Back</Button></Link>
                                </div>
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
                                                   disabled = {(this.state.disabled)? "disabled" : ""}
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
                                        disabled = {(this.state.disabled)? "disabled" : ""}
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
                                                 disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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

                                  { !this.state.disabled ? this.buttonSave() : null }

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
