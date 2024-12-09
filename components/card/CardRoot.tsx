import React from 'react'

interface CardRootProps {
    children: React.ReactNode;
}

const CardRoot = ({ children }: CardRootProps) => {
    return (
        <div className="relative card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default CardRoot
