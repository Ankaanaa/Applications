import { useState } from 'react'
import type { IApplications } from '../../types/applications'
import Application from './application/application'
import './list.scss'
interface IProps {
  applications: IApplications
  setApplications: React.Dispatch<React.SetStateAction<IApplications>>
}
const List = ({ applications, setApplications }: IProps) => {
  const [progress, setProgress] = useState<keyof IApplications>()
  const [showAllApp, setShowAllApp] = useState<boolean>(true)
  const SelectShowApp = (key: keyof IApplications) => {
    setShowAllApp(false)
    setProgress(key)
  }
  const SelectAllShowApp = () => {
    setProgress(null)
    setShowAllApp(true)
  }
  return (
    <div className='list'>
      <h1 className='list__text'>List Applications</h1>
      <div>
        <div className='list__progress'>
          <h4
            onClick={() => SelectShowApp('new')}
            className={`list__sort ${
              progress === 'new' ? 'list__sort__active' : ''
            }`}
          >
            New
          </h4>
          <h4
            onClick={() => SelectShowApp('inProgress')}
            className={`list__sort ${
              progress === 'inProgress' ? 'list__sort__active' : ''
            }`}
          >
            In Progress
          </h4>
          <h4
            onClick={() => SelectShowApp('done')}
            className={`list__sort ${
              progress === 'done' ? 'list__sort__active' : ''
            }`}
          >
            Done
          </h4>
          <h4
            onClick={() => SelectAllShowApp()}
            className={`list__sort ${
              showAllApp === true ? 'list__sort__active' : ''
            }`}
          >
            All
          </h4>
        </div>
        {showAllApp &&
          applications.new.map((el) => {
            return (
              <Application
                title={el.title}
                descriptions={el.description}
                id={el.id}
                progress={el.progress}
                setApplications={setApplications}
                keyArr='new'
              />
            )
          })}
        {progress === 'new' &&
          applications.new.map((el) => {
            return (
              <Application
                title={el.title}
                descriptions={el.description}
                id={el.id}
                progress={el.progress}
                setApplications={setApplications}
                keyArr='new'
              />
            )
          })}
        {progress === 'inProgress' &&
          applications.inProgress.map((el) => {
            return (
              <Application
                title={el.title}
                descriptions={el.description}
                id={el.id}
                progress={el.progress}
                setApplications={setApplications}
                keyArr='inProgress'
              />
            )
          })}
        {progress === 'done' &&
          applications.inProgress.map((el) => {
            return (
              <Application
                title={el.title}
                descriptions={el.description}
                id={el.id}
                progress={el.progress}
                setApplications={setApplications}
                keyArr='done'
              />
            )
          })}
      </div>
    </div>
  )
}

export default List
