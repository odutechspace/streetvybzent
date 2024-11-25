export type TimeData = {
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    totalSeconds: number,
}

export const remainingTime = (eventDate: Date) => {
   const difference = eventDate.getTime() - new Date().getTime();
   const timeLeft: TimeData = {days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0, weeks: 0};

   if (difference > 0) {
       timeLeft.weeks =  Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
       timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
       timeLeft.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       timeLeft.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
       timeLeft.seconds = Math.floor((difference % (1000 * 60)) / 1000);
       timeLeft.totalSeconds = Math.floor(difference/ (1000));
   }

    return {...timeLeft};
}


