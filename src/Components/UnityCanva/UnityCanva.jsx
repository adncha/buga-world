import React from 'react'
import {Unity, useUnityContext} from 'react-unity-webgl'
import styled from '@emotion/styled'
export const UnityCanva = () => {
  const {unityProvider, isLoaded, loadingProgression} = useUnityContext({
    loaderUrl: 'unity-build/app.loader.js',
    dataUrl: 'unity-build/app.data',
    frameworkUrl: 'unity-build/app.framework.js',
    codeUrl: 'unity-build/app.wasm'
  })

  const loadingPercentage = Math.round(loadingProgression * 100)
  return (
    <>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <StyledUnity className="unity" unityProvider={unityProvider} />
    </>
  )
}

const StyledUnity = styled(Unity)`
  &&& {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }
`
export default UnityCanva
