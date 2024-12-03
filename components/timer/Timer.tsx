"use client"


import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState(dayjs.duration({ minutes: 5 }));



    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = prevTime.subtract(1, 'second');
                if (newTime.asSeconds() <= 0) {
                    clearInterval(interval);
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {`${timeLeft.minutes()}:${timeLeft.seconds().toString().padStart(2, '0')}`}
        </div>

    )
}

export default Timer
