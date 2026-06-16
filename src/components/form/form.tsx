import { useState } from 'react'
import type { IApplications } from '../../types/applications'
import './form.scss'
interface IProps {
  setApplications: React.Dispatch<React.SetStateAction<IApplications>>
  applications: IApplications
}
interface IEnoughLetters {
  title: boolean
  descriptions: boolean
}
const Form = ({ applications, setApplications }: IProps) => {
  const [isEnoughLetters, setIsEnoughLetters] = useState<IEnoughLetters>({
    title: false,
    descriptions: false,
  })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const createApplication = (
    title: string,
    description: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    if (checkFormBeforeCreateApp())
      setApplications((prev) => ({
        ...prev,
        new: [
          ...prev.new,
          {
            title: title,
            description: description,
            id: Math.random(),
            progress: 'new',
          },
        ],
      }))
    setTitle('')
    setDescription('')
  }
  const checkFormBeforeCreateApp = () => {
    if (title.length < 7 && description.length < 15) {
      errNotEnoughLetters('title', true)
      return false
    } else if (description.length < 10) {
      errNotEnoughLetters('descriptions')
      return false
    } else if (title.length < 7) {
      errNotEnoughLetters('title')
      return false
    }
    return true
  }
  const errNotEnoughLetters = (
    key: keyof IEnoughLetters,
    isNotEnoughTitleAndDesc?: true
  ) => {
    if (isNotEnoughTitleAndDesc) {
      setIsEnoughLetters(() => ({
        title: true,
        descriptions: true,
      }))

      setTimeout(() => {
        setIsEnoughLetters(() => ({
          title: false,
          descriptions: false,
        }))
      }, 4000)
      return true
    }

    setIsEnoughLetters((prev) => ({
      ...prev,
      [key]: true,
    }))

    setTimeout(() => {
      setIsEnoughLetters((prev) => ({
        ...prev,
        [key]: false,
      }))
    }, 4000)
  }

  return (
    <div className='form'>
      <form className='form__container'>
        <label htmlFor='inp1'>Title</label>
        <input
          className={`form__inp ${
            isEnoughLetters.title === true ? 'form__err' : ''
          }`}
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {isEnoughLetters.title === true && (
          <label className='form__text__err'>Must be at least 7 letters</label>
        )}

        <label htmlFor='inp2'>Description</label>
        <input
          className={`form__inp ${
            isEnoughLetters.descriptions === true ? 'form__err' : ''
          }`}
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {isEnoughLetters.descriptions === true && (
          <label className='form__text__err'>Must be at least 15 letters</label>
        )}

        <button onClick={(e) => createApplication(title, description, e)}>
          Create
        </button>
      </form>
    </div>
  )
}
export default Form
