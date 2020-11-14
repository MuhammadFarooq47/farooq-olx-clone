import React from 'react'
import Topmenu from './Topmenu'
import FooterPage from './Footer'
import Service from './Services'
import Loadmore from './Loadmore'

function Home() {
    return (
        <div>
            <Topmenu />
            <Service />
            <Loadmore />
            <FooterPage />
        </div>
    )
}

export default Home
