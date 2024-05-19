import { Stack } from 'expo-router'

const StackLayout = () => {
    return <Stack>
        <Stack.Screen
            name="index"
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="join"
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="continue"
            options={{
                headerShown: false
            }}
        />
    </Stack>
}

export default StackLayout