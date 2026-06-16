import { useState } from 'react'
import type { IApplications } from '../../types/applications'

interface IProps {
  setApplications: React.Dispatch<React.SetStateAction<IApplications>>
  applications: IApplications
}

const Form = ({ applications, setApplications }: IProps) => {
  const [isEnoughLetters, setIsEnoughLetters] = useState({
    title: false,
    descriptions: false,
  })

  const checkFormBeforeCreateApp = () => {}
  const errNotEnoughLetters = () => {}
  const createApplication = () => {}
  return (
    <div>
      <form>
        <label htmlFor='inp1'>Title</label>
        <input
          className={`form__inp ${
            isEnoughLetters.title === true ? 'form__err' : ''
          }`}
          type='text'
        />
        {isEnoughLetters.title === true && (
          <label>Must be at least 7 letters</label>
        )}
        <div>
          <label htmlFor='inp2'>Description</label>
          <input
            className={`form__inp ${
              isEnoughLetters.descriptions === true ? 'form__err' : ''
            }`}
            type='text'
          />
          {isEnoughLetters.descriptions === true && (
            <label>Must be at least 15 letters</label>
          )}
        </div>
      </form>
    </div>
  )
}
