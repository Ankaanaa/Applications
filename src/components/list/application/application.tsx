import type { IApplications } from '../../../types/applications'
import './application.scss'
interface IProps {
  title: string
  descriptions: string
  id: number
  progress: 'new' | 'in progress' | 'done'
  setApplications: React.Dispatch<React.SetStateAction<IApplications>>
  keyArr: keyof IApplications
}
const Application = (props: IProps) => {
  const DeleteNewApplication = () => {
    if (props.progress === 'new') {
      props.setApplications((prev) => ({
        ...prev,
        [props.keyArr]: prev[props.keyArr].filter((el) => el.id !== props.id),
      }))
    }
  }
  return (
    <div className='application'>
      <div className='application__container'>
        <div>Application#{props.id}</div>
        <div className='application__block'>
          <h2 className='application__title'>{props.title}</h2>
          {props.progress === 'new' && (
            <div
              onClick={() => DeleteNewApplication()}
              className='application__delete'
            >
              ×
            </div>
          )}
        </div>
        <p>Description:</p>
        <h4 className='application__desc'>{props.descriptions}</h4>
        <div className='application__status'>Status: {props.progress}</div>
      </div>
    </div>
  )
}

export default Application
