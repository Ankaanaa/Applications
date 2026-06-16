export interface IApplication {
  id: number
  title: string
  description: string
  progress: 'new' | 'in progress' | 'done'
}

export interface IApplications {
  new: IApplication[]
  inProgress: IApplication[]
  done: IApplication[]
}
