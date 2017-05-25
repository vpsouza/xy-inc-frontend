import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Card, CardBlock, CardHeader, CardFooter } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';

const EndpointTable = ({headerColumns, onClickEdit, onClickDelete, rows}) => (
	<table className="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Path</th>
				<th style={{width:'5%'}}></th>
				<th style={{width:'5%'}}></th>
			</tr>
		</thead>
		<tbody>
			{rows.map((row,idx) => (
				<tr key={idx}>
					{row.colums.map((column,idx) => (<td>column.value</td>))}
					<td><button type="button" className="btn btn-primary" onClick={onClickEdit.bind(null, row._id)}><i className="fa fa-edit"></i></button></td>
					<td><button type="button" className="btn btn-danger" onClick={onClickDelete.bind(null, row._id)}><i className="fa fa-close"></i></button></td>
				</tr>
			))}
		</tbody>
	</table>
);

class CreateEndpoint extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
	  return (
		  <Row>
			<Col md="12">
				<Card>
					<CardHeader>
						<strong>Create</strong> an Endpoint
					</CardHeader>
					<CardBlock>
						<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
							<Row>
								<Col md="1" />
								<Col md="10">
									<FormGroup>
										<label className="form-control-label" htmlFor="text-input">Name</label>
										<input type="text" id="text-input" name="text-input" className="form-control" placeholder="Name for the endpoint"/>
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
											<EndpointTable />
										</CardBlock>
									</Card>
								</Col>
								<Col md="1" />
							</Row>
						</Form>
					</CardBlock>
					<CardFooter>
						<button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
						<button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
					</CardFooter>
				</Card>
			</Col>
		</Row>
	  );
  }
}

class Endpoints extends Component {
  constructor(props) {
    super(props);

    this.state = {
		showCreateEndpoint: false
	};
	this.handleCreateNewEndpoint = this.handleCreateNewEndpoint.bind(this);
  }

  handleCreateNewEndpoint(event) {
	  this.setState((prevState) => ({
		  showCreateEndpoint: !prevState.showCreateEndpoint
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
                <EndpointTable />
                <Row>
					<Col md="12" style={{textAlign: 'center'}}>
						<Button type="button" onClick={this.handleCreateNewEndpoint} color="primary"><i className="fa fa-star"></i>&nbsp; {!this.state.showCreateEndpoint ? 'Create a new endpoint' : 'Cancel the creation of a new endpoint'}</Button>
					</Col>
				</Row>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        {this.state.showCreateEndpoint && <CreateEndpoint />}
      </div>
    )
  }
}

export default Endpoints;
