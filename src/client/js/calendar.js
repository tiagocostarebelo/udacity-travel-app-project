function calendarMinMax() {
    departure.min = new Date().toISOString().split("T")[0];
    const currentDay = new Date();
    currentDay.setDate(currentDay.getDate() + 16); //number  of days to add, in our case 16 days
    departure.max = currentDay.toISOString().substr(0,10);

    arrival.min = departure.min;
    arrival.max = departure.max;
}

calendarMinMax();

export {calendarMinMax};