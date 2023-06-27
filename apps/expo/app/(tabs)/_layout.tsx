import { Tabs } from 'expo-router'

export default function Root() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="clients" />
      <Tabs.Screen name="more" />
    </Tabs>
  )
}
