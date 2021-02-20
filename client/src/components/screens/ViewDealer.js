import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const ViewDealer=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">			        	<div className="hh">
				          <a href="addDealer" style={{passing:"5px"}}>Add Dealer</a>
				          <a href="viewDealer" className="btn1" style={{passing:"5px"}}>View Dealer</a>
				        </div>
			    </div>
		    </div>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text res">
			          <div class="card-title">Dealer Details</div>
			            <table className="table">
			            	<thead>
			            		<tr>
			            			<th>Dealer ID</th>
			            			<th>Dealer Name</th>
			            			<th>Address</th>
			            			<th>Phone Number</th>
			            			<th>Email</th>
			            		</tr>
			            	</thead>
					        <tbody>
					        	<tr>
			            			<td>1</td>
			            			<td>Mohit Raj</td>
			            			<td>Mumbai</td>
			            			<td>9867541287</td>
			            			<td>mohit123@gmail.com</td>
			            		</tr>
					        </tbody>
				        </table>
				        <p style={{textAlign:"center",paddingTop:"20px",color:"gray"}}>Click on a Dealer ID to Update or Delete the record</p>
			        </div>
			      </div>
			    </div>
		    </div>
		</div>
	);
}

export default ViewDealer; 