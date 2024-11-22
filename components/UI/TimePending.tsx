'use client'

import TimeCard from "@/components/card/TimeCard";

const TimePending = () => {
  return (
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 w-fit">
          <TimeCard variable={"weeks"} value={"129"}/>
          <TimeCard variable={"days"} value={"00"}/>
          <TimeCard variable={"hours"} value={"06"}/>
          <TimeCard variable={"minutes"} value={"43"}/>
          <TimeCard variable={"seconds"} value={"47"}/>
      </div>
  );
}

export default TimePending;