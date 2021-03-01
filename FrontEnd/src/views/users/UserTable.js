import React, { Component } from 'react';
import {
  Button,
  Spinner,
  CardBody,
  CardHeader,
  Table,
  ModalBody,
  ModalFooter,
  Modal,
  Col,
  Input,
  FormGroup
} from 'reactstrap';
import {FETCH_DATA, FETCH_COMPLETE, SAVE_DATA} from "../../reducer/Action";
import { connect } from 'react-redux'
import { getUsers, deleteUserById } from '../../services/UsersService';
import ModalUser from '../../component/ModalUser';
import { Link } from "react-router-dom";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      number: 0,
      msearch: '',
      tempUsers:[],
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const { fetchData, fetchComplete} = this.props;
    fetchData()
    getUsers()
      .then(response => {
        this.setState({tempUsers : response.data})
        fetchComplete(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDetail = (itemId) => {
    const { detailData } = this.props;
    detailData(itemId)
    this.toggleModal()
  }

  handleDelete = (itemId) => {
    deleteUserById(itemId).then(response => {
      if (response.message === "Success") {
        alert("Delete Success")
        this.getData()
      }else {
        alert("Delete failed!")
      }
    })
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  generateTableRows = () => {
    const { users, isLoading } = this.props;
    let newArr= this.state.msearch&& this.state.msearch.length>0 ?
      this.state.tempUsers.filter(user=>{
        if (user.name.toLowerCase().includes(this.state.msearch.toLowerCase())) return user
        else return false
      }): users;
    ;

    let rows = (
      <tr>
        <td colSpan="7" className="table-warning text-center"><strong><em>Data Still Empty</em></strong></td>
      </tr>
    );

    if (newArr.length > 0) {
      rows = <tr><td colSpan="6" className="table-warning text-center"><Spinner color={"danger"}></Spinner></td></tr>
      if (!isLoading) {
        rows = newArr.map((user, index) => {
          return (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.birth_date}</td>
              <td className="text-center">{user.identity_number}</td>
              <td className="text-center">{user.profession}</td>
              <td className="text-center">{user.education}</td>
              <td className="text-center">
                <Link to={{ pathname: "/userdetail", id: user.id }}><Button size='sm' color="secondary">Detail</Button></Link></td>
              <td className="text-center"><Button size='sm' color="danger" onClick={() => this.handleDelete(user.id)}>Delete</Button></td>
            </tr>
          )
        });
      };
    }
    return rows;
  }

  render() {
    const { saveData } = this.props;
    return (
      <div className="animated fadeIn">
        <CardHeader>
          <i className="icon-people"></i> Data User
          <div className="card-header-actions">
            <Button color="primary" onClick={this.toggleModal}>Add User</Button>
          </div>
        </CardHeader>
        <CardBody>
          <FormGroup row>
            <Col xs="12" md="12">
              <Input className="text-center" type="text" id="search-input" name="search-input" value={this.state.seacrh} onChange={(e)=> this.setState({msearch: e.target.value})} placeholder="Search Data"/>
            </Col>
          </FormGroup>
          <Table hover bordered striped responsive size="sm">
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th className="text-center">Name</th>
                <th className="text-center">Birth Date</th>
                <th className="text-center">Identity Number</th>
                <th className="text-center">Profession</th>
                <th className="text-center">Education</th>
                <th className="text-center" colSpan='2' className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.generateTableRows()}
            </tbody>
          </Table>
        </CardBody>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={'modal-info' + this.props.className}>
          <ModalBody>
            <ModalUser toggleModal={this.toggleModal} saveData={saveData}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: FETCH_DATA }),
    fetchComplete: (payload) => dispatch({ type: FETCH_COMPLETE, payload }),
    saveData: (payload) => dispatch({ type: SAVE_DATA, payload}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
