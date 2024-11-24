import { Link } from 'react-router-dom';
function UserAccount() {
      return (
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
                  <div className="row card-container rounded-5">
                        <div className="col-md-6 ">
                              <img src="image.png" alt="Earth from space" className="full-width-image rounded-start-5" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
                              <div className="login-card p-4">
                                    <h2 className="text-primary">Create New User Account</h2>
                                    <form>
                                          <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Email</label>
                                                <input type="text" id="name" className="form-control rounded-pill input" />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" id="email" className="form-control rounded-pill input" />
                                          </div>
                                          <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" id="password" className="form-control rounded-pill input " />
                                          </div>
                                          <button type="submit" className="btn btn-primary w-100 rounded-pill mt-4">Login</button>
                                    </form>
                                    <p className="text-center mt-3">
                                          Do you have an account? <Link to="/user-login" className="text-primary">Login</Link>
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default UserAccount;