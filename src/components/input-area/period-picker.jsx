import React from "react";
import dayjs from "dayjs";

export default function PeriodPicker(props) {
  return (
    <div className="period-picker">
      <div className="date-picker">
        <div className="input-text-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" />
        </div>
      </div>
      <div className="date-picker">
        <div className="input-text-group">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            onChange={(e) =>
              console.log(dayjs(e.target.value).format("MMM YYYY"))
            }
          />
        </div>
      </div>
    </div>
  );

  console.log(dayjs().format("MMM YYYY"));
}
