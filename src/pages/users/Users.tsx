import React from 'react'
import * as SimpleWebAuthnBrowser from '@simplewebauthn/browser';

const Users: React.FC = () => {
    const {startRegistration}=SimpleWebAuthnBrowser
    async function startRegisterPasskey(){
        const auth=await startRegistration({username:"shubham"});

    }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">User Management</h1>
            <button onClick={startRegisterPasskey}>Create a Passkey`</button>
            {/* Add user management content */}
        </div>
    )
}

export default Users
