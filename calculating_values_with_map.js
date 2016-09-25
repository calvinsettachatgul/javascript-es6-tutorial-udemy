/*
create new array contains distance/time value for each trip
*/

var trips = [
	{distance: 34, time: 10},
	{distance: 90, time: 50},
	{distance: 59, time: 25},
]

var speeds;

speeds = trips.map( trip => trip.distance/trip.time );

console.log(speeds);
