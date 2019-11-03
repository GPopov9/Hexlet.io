
const formattedTime = (min) => {
    let hours = 0;
    let minutes = 0;

    hours = Math.floor(min / 60);
    minutes = min % 60;

    if (hours < 10) {
        hours = "0" + hours; 
    }

    if (minutes < 10) {
        minutes = "0" + minutes; 
    }


    console.log(`${hours}:${minutes}`);
};

formattedTime(5);