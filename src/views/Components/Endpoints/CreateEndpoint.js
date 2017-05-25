import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Card, CardBlock, CardHeader, CardFooter } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import EndpointTable from './EndpointTable';
const _ = require('lodash');

const CreateEndpoint = ({action, handleSubmit,endpoint}) => (
    <Row>
        <Col md="12">
            <Card>
                <CardHeader>
                    <strong>{action}</strong> an Endpoint
                </CardHeader>
                <CardBlock>
                    <Form className="form-horizontal" onSubmit={handleSubmit}>
                        <Row>
                            <Col md="1" />
                            <Col md="10">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="text-input">Name</label>
                                    <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Name for the endpoint" value={endpoint.name}/>
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
                                                    <input type="text" id="prop-name" name="prop-name" className="form-control" placeholder="Name for the property"/>
                                                    <span className="help-block">Please enter a unique property name</span>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{textAlign: 'center'}}>
                                                <FormGroup>
                                                    <label className="form-control-label" htmlFor="prop-type">Type</label>
                                                    <select className="form-control" id="prop-type">
                                                        <option>String</option>
                                                        <option>Integer</option>
                                                        <option>Decimal</option>
                                                        <option>Date</option>
                                                    </select>
                                                    <span className="help-block">Please enter a unique endpoint name</span>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{textAlign: 'center'}}>
                                                <button type="button" className="btn btn-primary"><i className="fa fa-star"></i>&nbsp; Add</button>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <EndpointTable 
                                            headerColumns={['Name', 'Type']}
                                            rows={endpoint.properties.map(prop => ({_id: prop._id, columns: [prop.name, prop.type]}))} />
                                    </CardBlock>
                                </Card>
                            </Col>
                            <Col md="1" />
                        </Row>
                    </Form>
                </CardBlock>
                <CardFooter>
                    <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>&nbsp;
                    <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
                </CardFooter>
            </Card>
        </Col>
    </Row>
);

export default CreateEndpoint;