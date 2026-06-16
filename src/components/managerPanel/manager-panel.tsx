import type { IApplications } from '../../types/applications'
import List from '../list/list'
interface IProps {
  applications: IApplications
  setApplications: React.Dispatch<React.SetStateAction<IApplications>>
  role: 'manager'
}
const ManagerPanel = ({ applications, setApplications }: IProps) => {
  return (
    <div>
      <div>
        <List
          applications={applications}
          setApplications={setApplications}
          role='manager'
        />
      </div>
    </div>
  )
}

export default ManagerPanel
