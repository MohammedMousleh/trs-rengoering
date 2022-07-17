import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function CheckMarkColumn({ text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', columnGap: '5px' }}>
            <IoCheckmarkCircle style={{ fontSize: '20px', color: '#138472', width: 'max-content', height: 'max-content' }} />
            <p style={{ fontWeight: '600', color: '#555555', margin: 0, flex: 1, }}>{text}</p>
        </div>
    )
}
