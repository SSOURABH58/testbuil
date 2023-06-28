import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'next/router'
import { createParam } from 'solito'

const { useParam, useParams } = createParam()

const WebRedirect = () => {
  const { params, setPrams }: any = useParams()
  const { url } = params
  const router = useRouter()
  router.replace(url)
}

export default WebRedirect
