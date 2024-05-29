import { type ComponentType, useMemo } from 'react'
import { type Params, useParams } from 'react-router-dom'

interface WithParams {
  [key: string]: string | undefined
}

const withParams = <P extends object>(
  WrappedComponent: ComponentType<P>,
  paramNames: (keyof P)[]
) => {
  const ComponentWithParams = (props: Omit<P, keyof WithParams>) => {
    const params = useParams<Params>()

    const Params = useMemo(() => {
      const result: WithParams = {}
      for (const paramName of paramNames) {
        result[paramName as string] = params[paramName as string]
      }
      return result
    }, [params, paramNames])

    return <WrappedComponent {...(props as P)} {...(Params as P)} />
  }

  return ComponentWithParams
}

export default withParams
