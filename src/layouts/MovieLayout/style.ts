import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Background = styled.div<{imageUri: string}>`
  background-image: url(${({imageUri}) => imageUri});
  background-size: cover;
  background-position: top;
  filter: blur(5px); 
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export const LayoutWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 5rem;
`
