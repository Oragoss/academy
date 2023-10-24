'use client';

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const { status, data: session } = useSession();

  return (
    <div className="navbar bg-slate-200">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link href="/users" className="btn btn-ghost normal-case">Users</Link>
            <Link href="/upload" className="btn btn-ghost normal-case">Upload Files</Link>
        </div>
        <div className="flex-none space-x-3">
            <ul className="menu menu-horizontal px-1">
            { status === 'loading' && <></> }
            { status === 'authenticated' && <li><Link href="/api/auth/signout">{session.user?.name}</Link></li> }
            { status === 'unauthenticated' && <li><Link href="/api/auth/signin">Sign In</Link></li> }
            <li>
                <details>
                <summary>
                    Options
                </summary>
                <ul className="p-2 bg-base-100">
                    <li><Link href="/api/auth/signout">Sign Out</Link></li>
                    <li><Link href="/users">Users</Link></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar