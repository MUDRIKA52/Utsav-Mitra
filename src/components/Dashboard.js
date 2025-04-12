import React from "react";
import "../styles/Dashboard.css"; // Import CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <h2 className="dashboard-title">Admin Dashboard</h2>

      {/* Top Overview Cards */}
      <div className="dashboard-stats">
        <div className="stat-card bookings">
          <h3>Total Bookings</h3>
          <p>120</p>
        </div>
        <div className="stat-card revenue">
          <h3>Total Revenue</h3>
          <p>$25,000</p>
        </div>
        <div className="stat-card occupancy">
          <h3>Occupancy Rate</h3>
          <p>85%</p>
        </div>
      </div>

      {/* Charts & Upcoming Events */}
      <div className="dashboard-content">
        {/* Customer Ratings Graph (Placeholder) */}
        <div className="chart-card">
          <h3>Customer Ratings Trend</h3>
          <img src="https://via.placeholder.com/300x150" alt="Ratings Chart" />
        </div>

        {/* Upcoming Events */}
        <div className="events-card">
          <h3>Upcoming Events</h3>
          <ul>
            <li>Wedding - March 25, 2025</li>
            <li>Corporate Meeting - April 2, 2025</li>
            <li>Birthday Party - April 10, 2025</li>
          </ul>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="recent-bookings">
        <h3>Recent Bookings</h3>
        <table>
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Room Type</th>
              <th>Check-In</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Deluxe</td>
              <td>March 20</td>
              <td className="confirmed">Confirmed</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Suite</td>
              <td>March 22</td>
              <td className="pending">Pending</td>
            </tr>
            <tr>
              <td>Michael Brown</td>
              <td>Standard</td>
              <td>March 24</td>
              <td className="canceled">Canceled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
