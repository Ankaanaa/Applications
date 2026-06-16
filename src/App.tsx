import { useEffect, useState } from 'react'
import './App.scss'
import Form from './components/form/form'
import Header from './components/header/header'
import List from './components/list/list'
import ManagerPanel from './components/managerPanel/manager-panel'
import { initialApp } from './store/app-store'
import type { IApplications } from './types/applications'
function App() {
  const [role, setRole] = useState<'user' | 'manager'>('user')
  const [applications, setApplications] = useState<IApplications>(() => {
    if (typeof window === 'undefined') return initialApp

    const savedApplications = localStorage.getItem('application')
    return savedApplications ? JSON.parse(savedApplications) : initialApp
  })

  useEffect(() => {
    localStorage.setItem('application', JSON.stringify(applications))
  }, [applications])

  return (
    <>
      <Header role={role} setRole={setRole} />
      <main>
        {role === 'user' && (
          <>
            <Form setApplications={setApplications} />
            <List
              applications={applications}
              setApplications={setApplications}
              role='user'
            />
          </>
        )}
        {role === 'manager' && (
          <ManagerPanel
            applications={applications}
            setApplications={setApplications}
            role='manager'
          />
        )}
      </main>
    </>
  )
}

export default App
