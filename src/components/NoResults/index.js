import { Image } from 'react-native'
import { ContainerNoResults, SubTextSorry, TextSorry } from './styles'

const NoResults = (props) => {
  return (
    <ContainerNoResults>
      <Image style={{ marginBottom: 30 }} source={props.img}/>
      <TextSorry>{props.title}</TextSorry>
      <SubTextSorry>{props.description}</SubTextSorry>
    </ContainerNoResults>
  )
}

export default NoResults;