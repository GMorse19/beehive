'use strict'

const formatDatesForDisplay = (data) => {
  data.date = data.date.split('T')[0]
  return data
}

const formatTimeForMongo = (event) => {
  // this is string interpolation using "template literals"
  // same as event.data + 'T' + event.startTime + ':00'
  if (event.start_time) {
    event.start_time = `${event.date}T${event.start_time}:00`
  }
  if (event.end_time) {
    event.end_time = `${event.date}T${event.end_time}:00`
  }
  return event
}

module.exports = {
  formatDatesForDisplay,
  formatTimeForMongo
  // convertClock,
  // trimDateAndTime
}
