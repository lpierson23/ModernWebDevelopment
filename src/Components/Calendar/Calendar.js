/*import React from "react";*/
// import CalendarList from "./CalendarList.js";

const Calendar = () => {
    return (
      <div>
        <h1>Meal Calendar</h1>
        {/* <!-- TODO: replace hard-coded values with data from json -->
      <!-- would like to make this table span the whole month eventually--> */}
        <table class="center">
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td>Lasagna</td>
            <td>Tomato Soup</td>
            <td>Tacos</td>
            <td>Barbeque Chicken</td>
            <td>Meatloaf</td>
            <td>Pizza</td>
            <td>Chinese</td>
          </tr>
        </table>
      </div>
    );
  };
  
  export default Calendar;
  
  