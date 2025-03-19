export type TimeData = {
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    totalSeconds: number,
}

export const monthIndexToNameMapper = (month: number): string => {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: throw new Error('Invalid month index. Must be between 0 and 11.');
    }
};


export const remainingTime = (eventDate: Date) => {
   const difference = eventDate.getTime() - new Date().getTime();
   const timeLeft: TimeData = {days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0, weeks: 0};

   if (difference > 0) {
       timeLeft.weeks =  Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
       timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
       if (timeLeft.days >= 7) {
           timeLeft.days = timeLeft.days - (timeLeft.weeks * 7);
       }
       timeLeft.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       timeLeft.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       timeLeft.seconds = Math.floor((difference % (1000 * 60)) / 1000);
       timeLeft.totalSeconds = Math.floor(difference/ (1000));
   }

    return {...timeLeft};
}


