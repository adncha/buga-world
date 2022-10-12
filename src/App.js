import React from 'react'
import './App.css'
import {UnityCanva} from './Components/UnityCanva/UnityCanva'
import styled from '@emotion/styled'
import {Navbar} from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Content>
          <UnityCanva />
        </Content>
      </Layout>
    </div>
  )
}

const Layout = styled.div`
  &&& {
    display: grid;
    height: 100vh;
    max-height: 100vh;
    grid-template: 100px calc(100vh - 100px - 4rem) / auto;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
  }
`

const Content = styled.div`
  position: relative;
  border-radius: 5px;
  border: solid 2px rgba(0, 0, 0, 0.1);
  height: 100%;
  overflow: hidden;
`
export default App
