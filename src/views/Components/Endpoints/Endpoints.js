import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';

class Endpoints extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
		<div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Availble Endpoints
              </div>
              <div className="card-block">
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
						<tr>
						<td>customers</td>
						<td>/customers</td>
						<th><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button></th>
						<th><button type="button" className="btn btn-danger"><i className="fa fa-close"></i></button></th>
						</tr>
						<tr>
						<td>products</td>
						<td>/products</td>
						<th><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button></th>
						<th><button type="button" className="btn btn-danger"><i className="fa fa-close"></i></button></th>
						</tr>
					</tbody>
				</table>
                <div className="row">
					<div className="col-md-12" style={{textAlign: 'center'}}>
						<button type="button" className="btn btn-primary"><i className="fa fa-star"></i>&nbsp; Create a new endpoint</button>
					</div>
				</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
			<div className="col-md-12">
				<div className="card">
					<div className="card-header">
						<strong>Create</strong> an Endpoint
					</div>
					<div className="card-block">
						<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
							<div className="row">
								<div className="col-md-2" />
								<div className="col-md-8">
									<div className="form-group">
										<label className="form-control-label" htmlFor="text-input">Name</label>
										<input type="text" id="text-input" name="text-input" className="form-control" placeholder="Name for the endpoint"/>
										<span className="help-block">Please enter a unique endpoint name</span>
									</div>
								</div>
								<div className="col-md-2" />
							</div>
							<div className="row">
								<div className="col-md-2" />
								<div className="col-md-8">
									<div className="card">
										<div className="card-header">
											<i className="fa fa-align-justify"></i> Properties
										</div>
										<div className="card-block">
											<div className="row">
												<div className="col-md-2" />
												<div className="col-md-8">
													<div className="form-group">
														<label className="form-control-label" htmlFor="prop-name">Property Name</label>
														<input type="text" id="prop-name" name="prop-name" className="form-control" placeholder="Name for the property"/>
														<span className="help-block">Please enter a unique property name</span>
													</div>
												</div>
												<div className="col-md-2" />
											</div>
											<div className="row">
												<div className="col-md-2" />
												<div className="col-md-8">
													<div className="form-group">
														<label className="form-control-label" htmlFor="prop-type">Type</label>
														<select className="form-control" id="prop-type">
															<option>String</option>
															<option>Integer</option>
															<option>Decimal</option>
															<option>Date</option>
														</select>
														<span className="help-block">Please enter a unique endpoint name</span>
													</div>
												</div>
												<div className="col-md-2" />
											</div>
											<div className="row">
												<div className="col-md-12" style={{textAlign: 'center'}}>
													<button type="button" className="btn btn-primary"><i className="fa fa-star"></i>&nbsp; Add</button>
												</div>
											</div>
											<br/>
											<table className="table">
											<thead>
												<tr>
												<th>Name</th>
												<th>Type</th>
												<th style={{width:'5%'}}></th>
												<th style={{width:'5%'}}></th>
												</tr>
											</thead>
											<tbody>
												<tr>
												<td>Name</td>
												<td>String</td>
												<th><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button></th>
												<th><button type="button" className="btn btn-danger"><i className="fa fa-close"></i></button></th>
												</tr>
												<tr>
												<td>Age</td>
												<td>Integer</td>
												<th><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button></th>
												<th><button type="button" className="btn btn-danger"><i className="fa fa-close"></i></button></th>
												</tr>
												<tr>
												<td>Weight</td>
												<td>Decimal</td>
												<th><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button></th>
												<th><button type="button" className="btn btn-danger"><i className="fa fa-close"></i></button></th>
												</tr>
												<tr>
												<td>Birth Date</td>
												<td>date</td>
												<th><button type="button" className="btn btn-primary"><i className="fa fa-edit"></i></button></th>
												<th><button type="button" className="btn btn-danger"><i className="fa fa-close"></i></button></th>
												</tr>
											</tbody>
											</table>
										</div>
										</div>
								</div>
								<div className="col-md-2" />
							</div>
						</Form>
					</div>
					<div className="card-footer">
						<button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
						<button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
					</div>
					</div>
			</div>
		</div>
      </div>
    )
  }
}

export default Endpoints;
