'use client'

import {useEffect, useRef, useState} from "react";

import TimeCard from "@/components/card/TimeCard";
import {remainingTime} from "@/_helpers/TimeLeft";

const TimePending = () => {
    const eventDateSample: Date = new Date("Nov 25, 2024 23:00:00");

    eventDateSample.setHours(0, 0, 0, 0);
    const [timeData, updateTimeData] = useState<any>(remainingTime(eventDateSample));
    const countdownTimer = useRef<any>();

    useEffect(() => {
        // Clear interval if it exists
        if (countdownTimer.current) {
            clearInterval(countdownTimer.current);
        }

        // Start interval
        countdownTimer.current = setInterval(() => {
            updateTimeData(() => {
                const updatedTime = remainingTime(eventDateSample);

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
    }, [eventDateSample]);

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