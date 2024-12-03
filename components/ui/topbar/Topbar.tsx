import React from 'react'

const Topbar = () => {
    return (
        <div className='bg-base-300 px-6 py-4 rounded-xl min-w-[800px]'>
            <div className='flex justify-between items-center'>
                <span className='font-pacifico font-semibold text-2xl tracking-widest'>pomobit</span>

                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
