/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { useSelector } from 'react-redux'
import StartPage from './StartPage'
import LabyrinthPart from './LabyrinthPart'
import { Innerwrapper, Outerwrapper } from './GlobalStyles'
import Loading from './Loading'

const ContentContainer = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const loadingState = useSelector((store) => store.loading.load)
  console.log(coordinates, loadingState)
  const coordinatesWithoutCommas = coordinates.replace(',', '')
  console.log(coordinatesWithoutCommas)

  if (loadingState) {
    return (
      <Loading />
    )
  }
  return (
    <Outerwrapper coordinates={coordinatesWithoutCommas}>
      <Innerwrapper>
        {coordinates === '' && <StartPage />}
        {coordinates !== '' && <LabyrinthPart />}
      </Innerwrapper>
    </Outerwrapper>
  )
}
export default ContentContainer