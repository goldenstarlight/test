import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const invoices = [
  {
    id: 1,
    date: '2/12/2022',
    charge: '$19.99'
  },
  {
    id: 2,
    date: '3/12/2022',
    charge: '$19.99'
  },
  {
    id: 3,
    date: '4/12/2022',
    charge: '$19.99'
  },
  {
    id: 4,
    date: '5/12/2022',
    charge: '$19.99'
  },
  {
    id: 5,
    date: '6/12/2022',
    charge: '$19.99'
  }
]
class Membership extends React.Component {
  render() {
    return (
      <div className='membership-area'>
        <h1>Membership</h1>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Personal Info">
            <div className='personal-info'>
              <div>
                <h3>Full Name</h3>
                <p>Calt Semon</p>
                <h3>Email</h3>
                <p>caltsemon@gamil.com</p>
                <h3>Phone</h3>
                <p>612-840-8432</p>
                <h3>Shipping Address</h3>
                <p>Los Angeles, USA</p>
              </div>
              <div>
                <button className='btn edit-btn'>Edit Profile</button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="billing" title="Membership & Billing">
            <div className='billing-area'>
              <div className='view-card-area'>
                <div>
                  <h3>Member</h3>
                  <p>Colt Semon</p>
                  <h3>Membership Number</h3>
                  <p>#000000001</p>
                  <a>EDIT MEMBERS</a>
                  <h3>Auto Renew</h3>
                  <p>October 12, 2022</p>
                  <h3>Credit Card Billed for Membership</h3>
                  <p>American Express editing 1004</p>
                  <a>UPDATE CARD</a>
                </div>
                <div>
                  <div>
                    <button className='btn btn-default card-btn'>View Card</button>
                  </div>
                  <div className='member-btn-area'>
                    <button className='btn member-btn'>Add a Member</button>
                    <p>For an extra $4.99/Mo</p>
                  </div>
                </div>
              </div>
              <hr className='billing-hr'/>
              <div>
                <h3>Membership Documents</h3>
                <p>Fairline MEMBERSHIP AGREEMENT AND SELF-DEFENSE LIABILITY POLICY</p>
                <Link to=''>VIEW DOCUMENTS</Link>
              </div>
              <hr className='billing-hr'/>
              <div>
                <h3>Cancelation</h3>
                <p>Your Active Membership Monthly (Yearly)</p>
                <p>You current subscription term ends on <b>10/12/2022</b>. If you proceed with cancelation it will be effective immediately, and not other <b>10/12/2022</b>. Please call 877-766-1919 to review your account options with one of our Customer Engagement Advisors.</p>
                <p>Reason You Are Canceling*</p>
                <textarea rows="3" style={{width: '60%'}}></textarea>
                <p>By canceling your memebership, your benefits and lifesaving training will no longer be available. If you wish to discuss other options, please call XXX-XXX-XXXX or email<b>SUPPORT@Fairline.com to discuss your account options.</b></p>
                <p>If you wish to processd with canceling your account please check the box below stairing you wish to cancel your account.</p>
                <div 
                  style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'start', 
                    flexDirection: 'row'
                    }}>
                  <p>I wish to cancel my Fairline Defence Ccount now*</p>
                  <input 
                    type="checkbox"
                    style={{
                      marginLeft: '10px',
                      marginTop: '-3px'
                    }}/>
                </div>
                <p>
                  Type First and Last Name Here to Confirm * 
                </p>
                <textarea rows="3" style={{width: '60%'}}></textarea>
                <div
                  style={{
                  marginTop: '25px'
                  }}
                >
                  <Link to=''>SUBMIT</Link>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="invoice" title="Invoices">
            <div className='invoice-area'>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Invoice Date</th>
                    <th>Charge</th>
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(invoice => (
                    <tr key={invoice.id}>
                      <td>{invoice.date}</td>
                      <td>{invoice.charge}</td>
                      <td><a>VIEW PDF</a></td>
                    </tr>
                  )) }
                </tbody>
              </table>
              <div>
                <h4>Past Years</h4>
                <div>
                  <Link to=''>2021</Link>
                </div>
                <div>
                  <Link to=''>2020</Link>
                </div>
                <div>
                  <Link to=''>2019</Link>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="email" title="Email Preferences">
            <div className='email-preference'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>First Name</p>
                      <input type="text" className="form-control" placeholder="Ausl"/>
                    </div>
                    <div className='col-md-6'>
                      <p>Last Name</p>
                      <input type="text" className="form-control" placeholder="Semon"/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>Email</p>
                      <input type="email" className="form-control" placeholder="ausl@businessmail.com"/>
                    </div>
                    <div className='col-md-6'>
                      <p>Phone</p>
                      <input type="text" className="form-control" placeholder="612-840-123"/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>Street Address</p>
                      <input type="text" className="form-control" placeholder="724N Texas"/>
                    </div>
                    <div className='col-md-6'>
                      <p>City, Zip Code</p>
                      <input type="text" className="form-control" placeholder="Lose Angeles 90046"/>
                    </div>
                  </div> 
                  <div className='row'>
                    <div className='col-md-6'>
                      <p>New Password</p>
                      <input type="password" className="form-control" placeholder="*********"/>
                      <FontAwesomeIcon icon={faEye} className='password-eye'/>
                    </div>
                    <div className='col-md-6'>
                      <p>Renew Password</p>
                      <input type="password" className="form-control" placeholder="********"/>
                    </div>
                  </div>
                  <div className='btn-area'>
                    <button className='btn btn-default cancel-btn'>Cancel</button>
                    <button className='btn btn-info save-edit-btn'>Save Edits</button>
                  </div>   
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Membership;