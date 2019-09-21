var data;
var app = new Vue({
    el: '#app',
    data: {
        event: {},
        direction: {},
        city: {},
        day: {},
        hour: {},
        events: []
    },

});

fetch('https://api.myjson.com/bins/aqy9j', {
    method: 'GET'
}).then(function(response) {
    if (response.ok) {
        //app.events = response.events;
        return response.json();
    }

    throw new Error(response.statusText);
}).then(function(json) {


    //do something with json data

    data = json;
    app.events = data.events;
    eventsArr = data.events;

}).catch(function(error) {
    //called when an error occurs anywhere in the chain
    console.log("Request failed: ", +error.message);
})