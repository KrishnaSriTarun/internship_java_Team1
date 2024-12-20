// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

function UserDashBoard() {
      const [dropdownVisible, setDropdownVisible] = useState(false);

      const toggleDropdown = () => {
            setDropdownVisible(!dropdownVisible);
      };

      return (
            <>
                  <div className="container-fluid dash">
                        <div className="row">
                              <div className="col-md-2 sidebar">
                                    <div className="logo">
                                          <h2><b>Logo</b></h2>
                                          <span className="text-primary fs-5">
                                                <HomeIcon sx={{ fontSize: '30px' }} />
                                                UserDashBoard
                                          </span>
                                    </div>
                              </div>
                              <div className="col-md-10">
                                    <div className="col-md-2 dash-nav">
                                          <h4 className="text-secondary"><b>CABLE NETWORK</b></h4>
                                          <div className="position-relative">
                                                <PersonIcon
                                                      sx={{ fontSize: '40px', cursor: 'pointer' }}
                                                      onClick={toggleDropdown}
                                                />
                                                {dropdownVisible && (
                                                      <div
                                                            style={{
                                                                  position: 'absolute',
                                                                  top: '50px',
                                                                  right: '10px',
                                                                  width: '150px',
                                                                  padding: '10px',
                                                                  zIndex: 1000,
                                                            }}
                                                      > 
                                                            <ul>
                                                                  <li>Profile</li>
                                                                  <li><Link to="/new-form" className="text-primary text-decoration-none">New Form</Link></li>
                                                                  <li><Link to="/update-form" className="text-primary text-decoration-none">Update Form</Link></li>
                                                                  <li>Logout</li>
                                                            </ul>
                                                      </div>
                                                )}
                                          </div>
                                    </div>
                                    <div className="col-md-10 main-user-dash">
                                          <div className="cust-detail">
                                                <h3 className="fs-4"><b>Customer Details</b></h3>
                                                <table className="user-box">
                                                      <thead>
                                                            <tr>
                                                                  <th></th>
                                                                  <th>Box ID</th>
                                                                  <th>Name</th>
                                                                  <th>Area</th>
                                                                  <th>Phone Number</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr>
                                                                  <td>
                                                                        <PersonOutlineOutlinedIcon
                                                                              className="per-icon"
                                                                              sx={{ fontSize: '35px' }}
                                                                        />
                                                                  </td>
                                                                  <td>12457896</td>
                                                                  <td>Krishna</td>
                                                                  <td>Kakinada</td>
                                                                  <td>6281688434</td>
                                                            </tr>
                                                      </tbody>
                                                </table>
                                          </div>
                                          <div className='cust-detail'>
                                                <h3 className='fs-4'><b>Previous Transactions</b></h3>
                                                <table className='user-box'>
                                                      <tr>
                                                            <th>SL.No</th>
                                                            <th>Package</th>
                                                            <th>Month</th>
                                                            <th>Date</th>
                                                            <th>Amount</th>
                                                            <th>Due</th>
                                                            <th>Transition</th>
                                                      </tr>
                                                      <tr>
                                                            <td>1</td>
                                                            <td>All Telugu</td>
                                                            <td>October</td>
                                                            <td>2023-10-08</td>
                                                            <td>330</td>
                                                            <td>0</td>
                                                            <td><button className='btn'>Done</button></td>
                                                      </tr>
                                                      <tr>
                                                            <td>2</td>
                                                            <td>All Telugu</td>
                                                            <td>November</td>
                                                            <td>2023-11-05</td>
                                                            <td>330</td>
                                                            <td>0</td>
                                                            <td><button className='btn'>Done</button></td>
                                                      </tr>
                                                      <tr>
                                                            <td>3</td>
                                                            <td>All Telugu</td>
                                                            <td>December</td>
                                                            <td>2023-12-04</td>
                                                            <td>330</td>
                                                            <td>0</td>
                                                            <td><button className='btn'>Done</button></td>
                                                      </tr>
                                                      <tr>
                                                            <td>4</td>
                                                            <td>All Telugu</td>
                                                            <td>January</td>
                                                            <td>2024-01-03</td>
                                                            <td>330</td>
                                                            <td>0</td>
                                                            <td><button className='btn'>Done</button></td>
                                                      </tr>
                                                      <tr>
                                                            <td>5</td>
                                                            <td>All Telugu</td>
                                                            <td>February</td>
                                                            <td>2024-02-0</td>
                                                            <td>330</td>
                                                            <td>0</td>
                                                            <td><button className='btn'>Done</button></td>
                                                      </tr>
                                                </table>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default UserDashBoard;
