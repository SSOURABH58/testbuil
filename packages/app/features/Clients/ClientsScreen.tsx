import { Text, useSx, View, H1, P, Row, A, TextInput } from 'dripsy'
import React from 'react'
import { Link } from 'solito/link'

const ClientsScreen = () => {
  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>ClientsScreen</Text>
      <Link
        viewProps={{
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#7149C6',
            borderRadius: 10,
            padding: 10,
          },
        }}
        href={{
          pathname: '/webview',
          query: { url: 'https://www.leaguex.com/' },
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Open WebView</Text>
      </Link>
    </View>
  )
}

export default ClientsScreen
