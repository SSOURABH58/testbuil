import { Tabs } from 'expo-router'
import NotificationBtn from '../../components/NotificationBtn'

export default function Root() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <NotificationBtn />,
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="clients" />
      <Tabs.Screen name="more" />
    </Tabs>
  )
}
