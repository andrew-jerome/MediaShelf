import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false}}>
            <Tabs.Screen name='index' options={{ title: 'Add Media'}} />
            <Tabs.Screen name='community' options={{ title: 'Community'}} />
            <Tabs.Screen name='lists' options={{ title: 'Lists'}} />
            <Tabs.Screen name='shelf' options={{ title: 'My Shelf'}} />
        </Tabs>
    )
}