import React, {Component} from 'react';
import {
		Button,
		ButtonDropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
		Row,
		Col,
		Card,
		CardBlock,
		CardHeader,
		CardFooter
} from 'reactstrap';
import {Form, FormGroup} from 'reactstrap';
import CreateEndpoint from './CreateEndpoint';
import Api from '../../../api';
import EndpointTable from './EndpointTable';
import AlertNotification from '../AlertNotification/AlertNotification'

class Endpoints extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
			errorMessage: '',
			showCreateEndpoint: false,
			endpoints: [],
			currentEndpoint: {
					name: '',
					properties: []
			},
			createEndpointAction: 'Create'
		};
		this.handleCreateNewEndpoint = this
			.handleCreateNewEndpoint
			.bind(this);
		this.handleEditEndpoint = this
			.handleEditEndpoint
			.bind(this);
		this.handleDeleteEndpoint = this
			.handleDeleteEndpoint
			.bind(this);			
		this.handleCreateEndpointSubmit = this
			.handleCreateEndpointSubmit
			.bind(this);
		this.handleAlertNotificationClosed = this
			.handleAlertNotificationClosed
			.bind(this);
	}

	componentDidMount() {
		this.getAllEndpoints();
	}

	getAllEndpoints() {
		Api
			.getEndpoints()
			.then(res => {
				let rows = res.map(endpoint => ({
					_id: endpoint._id,
					name: endpoint.name,
					properties: endpoint.properties,
					columns: [
						endpoint.name, '/' + endpoint.name
					]
				}));
				this.setState(() => ({endpoints: rows}))
			})
			.catch(err => this.setState((prevState) => ({hasError: !prevState.hasError, errorMessage: err})));
	}

	handleCreateNewEndpoint() {
		this.setState((prevState) => ({
			showCreateEndpoint: !prevState.showCreateEndpoint,
			createEndpointAction: 'Create',
			currentEndpoint: null
		}));
	}

	handleCreateEndpointSubmit(endpoint) {
		let service = endpoint._id ? Api.updateEndpoint : Api.saveEndpoint;
		service(endpoint).then(newEndpoint => {
			this.handleCreateNewEndpoint();
			this.getAllEndpoints();
		})
		.catch(res => {
			this.setState((prevState) => ({hasError: !prevState.hasError, errorMessage: res.response.data.message}));
		}); 
	}

	handleEditEndpoint(id) {
		this.setState((prevState) => ({
			showCreateEndpoint: true,
			createEndpointAction: 'Edit',
			currentEndpoint: prevState
				.endpoints
				.filter(elm => elm._id === id)[0]
		}));
	}

	handleDeleteEndpoint(endpoint) {
		Api.deleteEndpoint(endpoint._id.toString()).then(res => {
			this.setState((prevState) => ({
				showCreateEndpoint: false,
				createEndpointAction: 'Create',
				currentEndpoint: null
			}));
			this.getAllEndpoints();
		}).catch(res => {
			this.setState((prevState) => ({hasError: !prevState.hasError, errorMessage: res.response.data.message}));
		}); 
	}

	handleAlertNotificationClosed() {
		this.setState((prevState) => ({hasError: !prevState.hasError, errorMessage: ''}));
	}

	render() {
		return (
			<div className="animated fadeIn">
				{this.state.hasError && (<Row><Col md="12"><AlertNotification isVisible={this.state.hasError} mainText={this.state.errorMessage} color="danger" handleClosed={this.handleAlertNotificationClosed} /></Col></Row>)}
				<Row>
					<Col lg="12">
						<Card>
							<CardHeader>
								<i className="fa fa-align-justify"></i>
								Availble Endpoints
							</CardHeader>
							<CardBlock>
								<EndpointTable
									headerColumns={['Name', 'Path']}
									onClickEdit={this.handleEditEndpoint}
									onClickDelete={this.handleDeleteEndpoint}
									rows={this.state.endpoints}/>
								<Row>
									<Col
										md="12"
										style={{
										textAlign: 'center'
									}}>
										<Button type="button" onClick={this.handleCreateNewEndpoint} color="primary">
											<i className="fa fa-star"></i>&nbsp; {!this.state.showCreateEndpoint
												? 'Create a new endpoint'
												: 'Cancel the creation of a new endpoint'}</Button>
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
						handleSubmit={this.handleCreateEndpointSubmit}
						handleReset={this.handleCreateNewEndpoint}/>}
			</div>
		)
	}
}

export default Endpoints;
