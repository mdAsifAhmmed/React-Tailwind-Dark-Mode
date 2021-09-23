import React from 'react'
import {Link} from 'react-router-dom'
export default function Blogs() {
    return (
        <div>
            <div>
                <Link to="/" className="p-40 bg-green-400 m-6">Home</Link>
                <Link to="/about" className="p-40 bg-green-400 m-6">about</Link>
            </div>
        </div>
    )
}
