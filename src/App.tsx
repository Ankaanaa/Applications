import { useState } from 'react'
import './App.scss'
import Form from './components/form/form'
import Header from './components/header/header'
import { initialApp } from './store/app-store'
import type { IApplications } from './types/applications'
function App() {
  const [role, setRole] = useState<'user' | 'manager'>('user')
  const [applications, setApplications] = useState<IApplications>(initialApp)
  return (
    <>
      <Header role={role} setRole={setRole} />
      <main>
        <Form applications={applications} setApplications={setApplications} />
      </main>
    </>
  )
}

export default App
