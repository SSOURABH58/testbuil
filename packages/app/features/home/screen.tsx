import { Text, useSx, View, H1, P, Row, A, TextInput } from 'dripsy'
import React from 'react'

export function HomeScreen() {
  const sx = useSx()

  return (
    <View
      sx={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        p: 16,
        bg: '#FFF6F4',
      }}
    >
      <H1
        sx={{
          mb: 2,
          color: '#525FE1',
          fontWeight: 'bold',
        }}
      >
        CRM.
      </H1>
      {/* 40 words about crm */}
      <P sx={{ mb: 10 }}>
        CRM stands for Customer Relationship Management. It is a company-wide
        business strategy designed to improve revenues and profitability, reduce
        costs and increase customer loyalty
      </P>
    </View>
  )
}
