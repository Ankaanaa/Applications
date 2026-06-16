export interface Application {
  id: number
  title: string
  description: string
  progress: 'new' | 'in progress' | 'done'
}

export interface IApplications {
  new: Application[]
  inProgress: Application[]
  done: Application[]
}
