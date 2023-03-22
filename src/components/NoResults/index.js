import { Image } from 'react-native'
import { ContainerNoResults, SubTextSorry, TextSorry } from './styles'

const NoResults = () => {
  return (
    <ContainerNoResults>
      <Image style={{ marginBottom: 30 }} source={require('./../../assets/no-results1.png')}/>
      <TextSorry>We are sorry, we can not find the movie :(</TextSorry>
      <SubTextSorry>Find your movie by Type title, categories, years, etc.</SubTextSorry>
    </ContainerNoResults>
  )
}

export default NoResults;