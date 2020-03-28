import React from 'react'
import Themed from './themed'
import Banner from './banner'
import Footer from './footer'
import Main from './main'

const Layout = ({ children }) => (
  <Themed>
    <Banner />
    <Main>{children}</Main>
    <Footer />
  </Themed>
)

export default Layout
