import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddContact from './AddContact'
import ChartsMap from './ChartsMap'
import Contact from './Contact'
import EditContact from './EditContact'


export default function NavRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Contact />} />
                <Route path="/addContact" element={<AddContact />} />
                <Route path='/chartsMaps' element={<ChartsMap />} />
                <Route path='/edit/:id' element={<EditContact />} />
            </Routes>
        </>
    )
}
