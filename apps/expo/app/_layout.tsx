import { Provider } from 'app/provider'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="notifications" />
        <Stack.Screen name="webview" />
      </Stack>
    </Provider>
  )
}
