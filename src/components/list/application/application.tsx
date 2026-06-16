import type { IApplications } from '../../../types/applications'
import './application.scss'
interface IProps {
  title: string
  descriptions: string
  id: number
  progress: 'new' | 'in progress' | 'done'
  setApplications: React.Dispatch<React.SetStateAction<IApplications>>
  keyArr: keyof IApplications
  role: 'manager' | 'user'
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

  const ChangeStatus = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    action: 'in progress' | 'done',
    key: keyof IApplications,
    keyProgress: keyof IApplications
  ) => {
    e.preventDefault()
    props.setApplications((prev) => ({
      ...prev,
      [key]: prev[key].filter((el) => el.id !== id),
      [keyProgress]: [
        ...prev[keyProgress],
        {
          title: props.title,
          description: props.descriptions,
          progress: action,
          id: props.id,
        },
      ],
    }))
  }
  return (
    <div className='application'>
      <div className='application__container'>
        <div>Application#{props.id}</div>
        <div className='application__block'>
          <h2 className='application__title'>{props.title}</h2>
          {props.role === 'user' && props.progress === 'new' && (
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
        {props.role === 'manager' && (
          <>
            {props.progress === 'new' && (
              <button
                onClick={(e) =>
                  ChangeStatus(e, props.id, 'in progress', 'new', 'inProgress')
                }
                className='application__btn'
              >
                Start work
              </button>
            )}
            {props.progress === 'in progress' && (
              <button
                onClick={(e) =>
                  ChangeStatus(e, props.id, 'done', 'inProgress', 'done')
                }
                className='application__btn'
              >
                Done
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Application
