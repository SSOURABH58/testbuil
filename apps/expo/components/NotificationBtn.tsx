import React from 'react'
import { Text, View, A, H1 } from 'dripsy'
import { Link } from 'solito/link'
import { Ionicons } from '@expo/vector-icons'

const NotificationBtn = () => {
  return (
    <View
      sx={{
        backgroundColor: 'primary',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
      }}
    >
      <Link
        viewProps={{
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
        href="/notifications"
      >
        <Ionicons name="notifications" size={24} color="black" />
      </Link>
    </View>
  )
}

export default NotificationBtn
