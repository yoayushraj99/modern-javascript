const now = new Date();

console.log(now);
console.log(typeof now);

// years, months, days, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth (0-based):', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay (0-based):', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps :- A timestamp is the current time of an event that is recorded by a computer. 
//Through mechanisms such as the Network Time Protocol ( NTP ),
//a computer maintains accurate current time, calibrated to miliseconds in javascript.
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
