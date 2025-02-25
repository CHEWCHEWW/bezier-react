/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface HeaderAreaProps extends UIComponentProps {
  hasHeader: boolean
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent: React.ComponentType
}
