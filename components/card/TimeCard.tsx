'use client'

import {useEffect, useState} from "react";

const TimeCard = ({ variable = "week", value = 129 }: { variable?: string; value?: number }) => {
    const [clientValue, setClientValue] = useState<number | null>(null);

    useEffect(() => {
        setClientValue(value);
    }, [value]);

    return (
        <div className="flex justify-center items-center p-4 bg-black/65 w-full sm:w-fit text-black/85 rounded-md">
            <div className="flex items-center flex-col gap-0.5">
                <h2 className="text-4xl 2xl:text-5xl font-title font-semibold text-white/85">
                    {clientValue !== null ? clientValue : "..."}
                </h2>
                <p className="text-white/85">{variable}</p>
            </div>
        </div>
    );
};

export default TimeCard;