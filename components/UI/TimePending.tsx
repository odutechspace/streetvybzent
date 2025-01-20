'use client'

import {useEffect, useRef, useState} from "react";

import TimeCard from "@/components/card/TimeCard";
import {remainingTime} from "@/_helpers/TimeUtil";


const TimePending = (
    {year=0, month=0, day=0, hour=0, minute=0, second=0}:
        { year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number }
) => {
    const eventDate: Date = new Date(year, month, day, hour, minute, second);

    const [timeData, updateTimeData] = useState<any>(remainingTime(eventDate));
    const countdownTimer = useRef<any>();

    useEffect(() => {
        if (countdownTimer.current) {
            clearInterval(countdownTimer.current);
        }

        countdownTimer.current = setInterval(() => {
            updateTimeData(() => {
                const updatedTime = remainingTime(eventDate);

                if (updatedTime.totalSeconds <= 0) {
                    clearInterval(countdownTimer.current!);

                    return {days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0, weeks: 0};
                }

                return updatedTime;
            });
        }, 1000);

        return () => {
            if (countdownTimer.current) {
                clearInterval(countdownTimer.current);
            }
        };
    }, [eventDate]);

  return (
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 w-fit">
          <TimeCard variable={"weeks"} value={timeData.weeks}/>
          <TimeCard variable={"days"} value={timeData.days}/>
          <TimeCard variable={"hours"} value={timeData.hours}/>
          <TimeCard variable={"minutes"} value={timeData.minutes}/>
          <TimeCard variable={"seconds"} value={timeData.seconds}/>
      </div>
  );
}

export default TimePending;