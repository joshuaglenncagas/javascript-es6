//we can create new variables that use the property of an objects valus.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};  
const {today : highToday, tomorrow : highTomorrow } = HIGH_TEMPERATURES
/* we initialized a variable called 'highToday' and 'highTomorrow'
with values from the key 'today' and 'tomorrow */