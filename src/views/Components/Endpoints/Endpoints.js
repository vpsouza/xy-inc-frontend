import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Card, CardBlock, CardHeader, CardFooter } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import CreateEndpoint from './CreateEndpoint';
import Api  from '../../../api';
import EndpointTable from './EndpointTable';

class Endpoints extends Component {
  constructor(props) {
    super(props);

    this.state = {
		showCreateEndpoint: false,
		endpoints: [],
		currentEndpoint: null,
		createEndpointAction: 'Create'
	};
	this.handleCreateNewEndpoint = this.handleCreateNewEndpoint.bind(this);
	this.handleEditEndpoint = this.handleEditEndpoint.bind(this);
	this.handleCreateEndpointSubmit = this.handleCreateEndpointSubmit.bind(this);
  }

  componentDidMount(){
	this.getAllEndpoints();
  }

  getAllEndpoints(){
	Api.getEndpoints().then(res => {
		let rows = res.map(endpoint => ({
			_id: endpoint._id,
			name: endpoint.name,
			properties: endpoint.properties,
			columns: [endpoint.name, '/' + endpoint.name]
		}) );
		this.setState(() => ({endpoints: rows}))
	});
  }

  handleCreateNewEndpoint() {
	  this.setState((prevState) => ({
		  	showCreateEndpoint: !prevState.showCreateEndpoint,
		  	createEndpointAction: 'Create',
			currentEndpoint: null
	  }));
  }

  handleCreateEndpointSubmit(event) {
	event.preventDefault();
	alert('handleCreateEndpointSubmit');
  }

	handleEditEndpoint(id) {
		this.setState((prevState) => ({
			showCreateEndpoint: true,
			createEndpointAction: 'Edit',
			currentEndpoint: prevState.endpoints.filter(elm => elm._id === id)[0]
		}));
  }

  render() {
    return (
      <div className="animated fadeIn">
		<Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Availble Endpoints
              </CardHeader>
              <CardBlock>
                <EndpointTable 
					headerColumns={['Name', 'Path']}
					onClickEdit={this.handleEditEndpoint}
					rows={this.state.endpoints} />
                <Row>
					<Col md="12" style={{textAlign: 'center'}}>
						<Button type="button" onClick={this.handleCreateNewEndpoint} color="primary"><i className="fa fa-star"></i>&nbsp; {!this.state.showCreateEndpoint ? 'Create a new endpoint' : 'Cancel the creation of a new endpoint'}</Button>
					</Col>
				</Row>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        {this.state.showCreateEndpoint && 
			<CreateEndpoint 
				action={this.state.createEndpointAction}
				endpoint={this.state.currentEndpoint}
				handleSubmit={this.handleCreateEndpointSubmit} />}
      </div>
    )
  }
}

export default Endpoints;
