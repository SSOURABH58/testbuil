import React from 'react'
import { Text, useSx, View, H1, P, Row, A, TextInput } from 'dripsy'
import { useRouter } from 'next/router'
import routes from 'app/Routes/routes'

//a left draw style hover to expand nav menu for web
export default function Header() {
  const router = useRouter()
  const routeName = router.pathname.split('/')[1]

  const label = routes.find((r) => r.path === `/${routeName}`)?.label

  return (
    <View
      sx={{
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Row
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          px: 20,
        }}
      >
        <H1 sx={{ color: 'black', fontWeight: 'bold' }}>{label}</H1>
        <Row sx={{ alignItems: 'center' }}>
          {routes.map((route) => (
            <A
              sx={{
                color: route.path === `/${routeName}` ? 'primary' : '#00000099',
                fontWeight: 'bold',
                fontSize: 16,
                ml: 20,
              }}
              // this is the link to the route
              href={route.path}
            >
              {route.label}
            </A>
          ))}
        </Row>
      </Row>
    </View>
  )
}
