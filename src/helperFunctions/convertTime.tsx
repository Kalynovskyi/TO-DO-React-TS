const convertTime = (hour: string, minute: string) => {
    let newHour = hour.length > 1 ? hour : 0 + hour;
    let newMinute = minute.length > 1 ? minute : 0 + minute;
    
    return newHour + ":" + newMinute;
}

export default convertTime;