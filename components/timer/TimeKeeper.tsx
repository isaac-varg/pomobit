"use client"


import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Display from './Display';

dayjs.extend(duration);

interface TimerProps {
}

const TimeKeeper = ({ }: TimerProps) => {

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
            
            <Display timeLeft={timeLeft} />
        </div>

    )
}

export default TimeKeeper
