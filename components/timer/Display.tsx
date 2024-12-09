import React from 'react'
import Card from '../card'
import Editor from './Editor'

interface TimerDisplayProps {
    timeLeft: any
}

const classes = {
    font: {
        default: 'font-semibold text-5xl',
    }
}

const Display = ({ timeLeft }: TimerDisplayProps) => {
    return (
        <Card.Root>
            <Editor />
            <div className='flex items-center justify-center'>
                <span className={`${classes.font.default}`}>
                    {`${timeLeft.minutes()}:${timeLeft.seconds().toString().padStart(2, '0')}`}
                </span>
            </div>
        </Card.Root>
    )
}

export default Display
