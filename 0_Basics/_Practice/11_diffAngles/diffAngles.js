const diff = (angle1, angle2) => {
    let diff = Math.abs(angle1 - angle2);

    if (diff >= 180) {
        return 360-diff; 
    } else {
        return diff;
    }

};

console.log(diff(120,280));