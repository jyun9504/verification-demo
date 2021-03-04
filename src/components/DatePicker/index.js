import React, { useState } from 'react'
import DayPicker from 'react-day-picker'
import moment from 'moment'
import './style.css'

function getWeekDays(weekStart) {
  const days = [weekStart]
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    )
  }
  return days
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  }
}

function DatePicker(props) {
  const { handleSelectedDays, selectedDays } = props
  const [ hoverRange, setHoverRange ] = useState(undefined)

  const handleDayChange = date => {
    date > new Date().setHours(new Date().getHours() + 1) ||
    handleSelectedDays(getWeekDays(getWeekRange(date).from))
  }

  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date))
  }

  const handleDayLeave = () => {
    setHoverRange(getWeekRange(undefined))
  }

  const daysAreSelected = selectedDays.length > 0

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  }

  return (
    <div className="datePicker">
      <DayPicker
        selectedDays={selectedDays}
        showOutsideDays
        modifiers={modifiers}
        onDayClick={handleDayChange}
        onDayMouseEnter={handleDayEnter}
        onDayMouseLeave={handleDayLeave}
        disabledDays={[
          {
            after: new Date(),
          },
        ]}
      />
    </div>
  )
}

export default DatePicker
