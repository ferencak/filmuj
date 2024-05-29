import { type FC, useRef } from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackImage?: string
}

const Image: FC<Props> = ({ ...props }): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <img
      {...props}
      ref={imageRef}
      onError={
        () => {
          if (!imageRef.current) return
          imageRef.current.src = props.fallbackImage || "/images/poster_placeholder_large.png"
        }
      }
      alt={props.alt}
    />
  )
}

export default Image