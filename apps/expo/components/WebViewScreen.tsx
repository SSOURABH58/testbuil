import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

import { createParam } from 'solito'

const { useParam, useParams } = createParam()

const WebViewScreen = () => {
  const { params, setPrams }: any = useParams()
  const { url } = params

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />
}

export default WebViewScreen
