import './Help.css';

function Help() {
      return (
            <div className="help-container">
                  <div className="report">
                        <img className="icon-report" src="Screenshot 2025-01-25 141117.png" alt="profile" />
                        <div className="report-background">
                              <h2>Mani Cable Network</h2>
                              <button className='help-button'>Request for Help</button>
                              <div className="details-section">
                                    <table>
                                          <thead>
                                                <tr>
                                                      <th>Box Id</th>
                                                      <th>Name</th>
                                                      <th>Area</th>
                                                      <th>Phone</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td>2145766627</td>
                                                      <td>Mani</td>
                                                      <td>Kendriya</td>
                                                      <td>8575748758</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <table>
                                          <thead>
                                                <tr>
                                                      <th>S.No</th>
                                                      <th>Package</th>
                                                      <th>Month</th>
                                                      <th>Date</th>
                                                      <th>Amount</th>
                                                      <th>Due</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td>2</td>
                                                      <td>Kids Pack Special</td>
                                                      <td>March</td>
                                                      <td>2024-11-14</td>
                                                      <td>100</td>
                                                      <td>0</td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <button className="done-button">Done</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Help;