import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
          backgroundColor:'#fb0707',
        },
        headerTintColor:'#f4f2f6',
        headerTitleAlign:'center',
        headerTitleStyle:{fontSize:22}
    }}>
      <Stack.Screen
      name="index"
      options={{
        title:'Homepage',
      }}/>
      <Stack.Screen
      name="quote"
      options={{
        title:'Quotes'
      }}/>
    </Stack>
  );
}
