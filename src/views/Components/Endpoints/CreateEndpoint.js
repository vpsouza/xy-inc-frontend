import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Card, CardBlock, CardHeader, CardFooter } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import EndpointTable from './EndpointTable';
const _ = require('lodash');

class CreateEndpoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
        actionProperty: 'Add',
        endpoint: props.endpoint || {
            name: '',
            properties: []
        },
		currentProperty: {
            _id: '',
            name: '',
            type: 'date'
        }
	};

    this.handleCurrentPropertyInputChange = this.handleCurrentPropertyInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditProperty = this.handleEditProperty.bind(this);
    this.saveProperty = this.saveProperty.bind(this);
	this.handleEndpointNameChange = this.handleEndpointNameChange.bind(this);
	this.resetProperty = this.resetProperty.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState(() => ({
        endpoint: nextProps.endpoint || {
            name: '',
            properties: []
        },
        currentProperty: {
            _id: '',
            name: '',
            type: 'date'
        }
    }))
  }

  handleEndpointNameChange(event) {
	this.setState(() => ({
		endpoint: {
			name: event.target.value
		}
	}));
  }

  handleCurrentPropertyInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(() => ({
        currentProperty: {
            [name]: value
         }
    }));
  }

  handleSubmit(event){
      event.preventDefault();
      this.props.handleSubmit(this.state.newProperty);
  }

  handleEditProperty(id){
    this.setState((prevState) => ({
		actionProperty: 'Save',
        currentProperty: prevState.endpoint.properties.filter(prop => prop._id === id)[0]
    }));
  }

  resetProperty() {
	this.setState(() => ({
		currentProperty: {
            _id: '',
            name: '',
            type: 'date'
        },
		actionProperty: 'Add'
	}))
  }

  saveProperty(){
    if(this.state.currentProperty._id){
        this.setState((prevState) => ({
            endpoint: {
                properties: [prevState.currentProperty, ...prevState.endpoint.properties.filter(prop => prop.name !== prevState.currentProperty.name)],
                name: prevState.endpoint.name
            }
        }));
    } else {
        this.setState((prevState) => ({
            endpoint: {
                properties: [prevState.currentProperty, ...prevState.endpoint.properties],
                name: prevState.endpoint.name
            }
        }));
    }
  }

  render() {
    return (
      <Row>
        <Col md="12">
            <Card>
                <CardHeader>
                    <strong>{this.props.action}</strong> an Endpoint
                </CardHeader>
                <CardBlock>
                    <Form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md="1" />
                            <Col md="10">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="text-input">Name</label>
                                    <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Name for the endpoint" value={this.state.endpoint.name} onChange={this.handleEndpointNameChange}/>
                                    <span className="help-block">Please enter a unique endpoint name</span>
                                </FormGroup>
                            </Col>
                            <Col md="1" />
                        </Row>
                        <Row>
                            <Col md="1" />
                            <Col md="10">
                                <Card>
                                    <CardHeader>
                                        <i className="fa fa-align-justify"></i> Properties
                                    </CardHeader>
                                    <CardBlock>
                                        <Row>
                                            <Col md="12" style={{textAlign: 'center'}}>
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="prop-name">Property Name</label>
                                                    <input type="text" id="prop-name" name="name" className="form-control" onChange={this.handleCurrentPropertyInputChange} placeholder="Name for the property" value={this.state.currentProperty.name}/>
                                                    <span className="help-block">Please enter a unique property name</span>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{textAlign: 'center'}}>
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="prop-type">Type</label>
                                                    <select className="form-control" id="prop-type" name="type" onChange={this.handleCurrentPropertyInputChange} value={this.state.currentProperty.type}>
                                                        <option value='string'>String</option>
                                                        <option value='int'>Integer</option>
                                                        <option value='decimal'>Decimal</option>
                                                        <option value='date'>Date</option>
                                                    </select>
                                                    <span className="help-block">Please enter a unique endpoint name</span>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{textAlign: 'center'}}>
                                                <Button onClick={this.saveProperty} color="primary"><i className="fa fa-star"></i>&nbsp; {this.state.actionProperty} Property</Button>
												<Button onClick={this.resetProperty} color="primary"><i className="fa fa-star"></i>&nbsp; Reset Property</Button>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <EndpointTable 
                                            headerColumns={['Name', 'Type']}
                                            onClickEdit={this.handleEditProperty}
                                            rows={this.state.endpoint.properties.map(prop => ({_id: prop._id, columns: [prop.name, prop.type]}))} />
                                    </CardBlock>
                                    <CardFooter>
                                        <button disabled={!this.state.endpoint.name || this.state.endpoint.properties.length == 0 ? 'disabled' : ''} type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Save</button>&nbsp;
                                        <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="1" />
                        </Row>
                    </Form>
                </CardBlock>
            </Card>
        </Col>
    </Row>
    )
  }
}

export default CreateEndpoint;