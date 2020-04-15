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

// timestamps :- '1st January 1970' usually called as "epoch date" is the date when the time started for Unix computers,
//and that timestamp is marked as '0'.
//Any time since that date is calculated based on the number of seconds elapsed.
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
