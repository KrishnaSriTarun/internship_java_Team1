import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ToggleOnSharpIcon from '@mui/icons-material/ToggleOnSharp';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Import Close Icon
import './AdminDashBoard.css';

function AdminDashBoard() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);

      const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
      };

      return (
            <>
                  <div className="container-fluid dash">
                        <div className="row">
                              <div className={`col-md-2 sidebar ${isSidebarOpen ? 'open' : ''}`}>
                                    {/* Close button for mobile view */}
                                    {isSidebarOpen && (
                                          <CloseIcon
                                                className="close-icon"
                                                sx={{ fontSize: '30px', cursor: 'pointer' }}
                                                onClick={toggleSidebar}
                                          />
                                    )}
                                    <div>
                                          <div className="logo">
                                                <h2 className="logo"><b>Logo</b></h2>
                                          </div>
                                          <div className="menu-item text-primary fs-5">
                                                <HomeIcon sx={{ fontSize: '40px' }} />
                                                <span>User Dashboard</span>
                                          </div>
                                          <div className="menu-item fs-5">
                                                <ToggleOnSharpIcon sx={{ fontSize: '40px' }} />
                                                <span>Activations</span>
                                          </div>
                                          <div className="menu-item fs-5">
                                                <EditNoteSharpIcon sx={{ fontSize: '40px' }} />
                                                <Link className='request' to="/paypage">
                                                      <span>Request</span>
                                                </Link>
                                          </div>
                                          <div className="menu-item fs-5">
                                                <CurrencyRupeeIcon sx={{ fontSize: '30px' }} />
                                                <Link className='request' to="/report">
                                                      <span>Amount</span>
                                                </Link>
                                          </div>
                                          <div className="menu-item fs-5">
                                                <HelpOutlineOutlinedIcon sx={{ fontSize: '30px' }} />
                                                <Link className='request' to="/help">
                                                      <span>Help</span>
                                                </Link>
                                          </div>
                                    </div>
                                    <div>
                                          <div className="menu-item fs-5">
                                                <LogoutIcon sx={{ fontSize: '30px' }} />
                                                <span>Logout</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="col-md-10">
                                    <div className=" dash-nav">
                                          <MenuIcon
                                                className="menu-icon"
                                                sx={{ fontSize: '40px', cursor: 'pointer' }}
                                                onClick={toggleSidebar}
                                          />
                                          <h4 className="text-secondary"><b>CABLE NETWORK</b></h4>
                                          <PersonIcon sx={{ fontSize: '40px' }} />
                                    </div>
                                    <h1 className="area-heading">Areas</h1>
                                    <div className="areas">
                                          <div className="area">
                                                <div className='fs-2'>Area 1</div>
                                          </div>
                                          <div className="area">
                                                <div className='fs-2'>Area 2</div>
                                          </div>
                                          <div className="area">
                                                <div className='fs-2'>Area 3</div>
                                          </div>
                                          <div className="area">
                                                <div className='fs-2'>Area 4</div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default AdminDashBoard;
