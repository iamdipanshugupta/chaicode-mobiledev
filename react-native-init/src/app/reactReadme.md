// import { useState } from "react";
// import { View , Text ,Image ,TextInput ,Pressable} from "react-native";

// export default function HomeScreen(){

//   const [name , setName] = useState("")
//   return (
//     <View>
//       <Text numberOfLines={8}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis perferendis, iure et quibusdam doloremque fugiat qui officia sit cum molestias voluptatem commodi nam tenetur sunt facere quaerat repudiandae asperiores id?
//         Qui corrupti voluptates minima maxime quod veritatis aut alias unde est officia harum odio facere consequatur, dolore quae quia perspiciatis accusamus id quis voluptatem quos illum omnis ipsum ex! Blanditiis!
//         Ducimus suscipit praesentium, repudiandae soluta officia hic maxime voluptas repellat fuga placeat necessitatibus temporibus eius nostrum, reiciendis numquam voluptate corrupti! Natus ipsa dolore quaerat suscipit voluptatum perferendis accusantium rem assumenda!
//         Voluptatum consectetur quasi magnam quibusdam officia cupiditate qui illum modi! Iure itaque ex voluptatum nobis explicabo quae veniam soluta ad natus eveniet praesentium nostrum, expedita ullam incidunt reprehenderit quas sunt?
//         Animi sit optio, dolores ipsum id in excepturi? In modi fugiat rem cum distinctio, delectus magnam nobis blanditiis, architecto sunt accusantium eaque quam numquam. Dolore ea eos voluptate illo nesciunt!
//         Expedita unde dolorum aliquam voluptatibus dolore sit minus eum placeat minima perspiciatis totam, at quo suscipit natus quidem exercitationem delectus beatae doloribus neque quisquam cum. Eum atque esse inventore dolorum.
//         Doloremque dolorem laboriosam temporibus quis quas eaque laborum alias optio voluptatibus, repellat veritatis tempora consequatur! Labore, ratione quidem. Corrupti ex ratione quidem repudiandae minus, officiis ad magnam sed dolorum hic?
//         Doloribus saepe ipsam quod sed ipsa autem cupiditate quas. Hic repellendus est commodi corrupti incidunt reiciendis veniam recusandae ea fugiat, quam dolore, nemo tenetur, quod odit error vel id dolorem.
//         Consectetur beatae deserunt dolore mollitia eius sunt distinctio exercitationem facere et provident aliquam nihil tempora laudantium, autem, pariatur tempore rem eos eum accusantium dolorum iure perspiciatis. Cupiditate provident culpa eius?
//         Minus voluptates quae quos, tempora nostrum temporibus possimus mollitia non corporis quod nulla in enim aut voluptatibus recusandae natus suscipit optio eos rerum dignissimos nihil aspernatur libero veritatis! Eius, est?
//         Quidem perspiciatis porro nostrum debitis architecto. Eveniet, rerum soluta mollitia ex architecto fugit sint? Fugiat soluta, blanditiis eum at, ipsa porro saepe aliquam qui dignissimos sequi itaque, error deleniti recusandae.
//         Doloribus modi, quod, similique, sed accusamus consectetur ex nobis enim ea perspiciatis accusantium voluptatum laudantium aperiam! Expedita asperiores voluptatem itaque libero ut maiores dignissimos. Asperiores nemo tenetur voluptatibus earum consequuntur.
//         Odit voluptas rerum eos, quisquam mollitia eaque obcaecati natus dignissimos maxime tempore quam itaque dolorem sit ratione at, eveniet aspernatur asperiores excepturi delectus quaerat nemo, harum numquam. Ipsa, dolore fugiat?
//         Libero commodi dolor rerum eum? Harum corporis, labore similique accusantium voluptate ducimus dolore. Ducimus, aliquam harum! Iusto ab doloremque deserunt quo vel inventore? Consequuntur vel harum voluptatem cum corrupti velit!
//         Quidem doloribus quaerat ea unde laborum sequi magnam, consequatur consequuntur voluptate facilis. Veritatis eos hic modi, labore pariatur ipsam. Explicabo perferendis perspiciatis enim eaque dignissimos fugit dolorem provident nulla quam!
//       </Text>

//       {/* Remote image from internet */}
//       <Image
//       source={{uri:"https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg"}}
//       width={200}
//       height={200}
//       />
//       {/* Local Image */}
//       <Image 
//       source={require("@/assets/images/icon.png")}
//       style={{
//         height:100,
//         width:100
//       }}
//       blurRadius={30}
//       />

//       <TextInput
//        placeholder="Enter your name" 
//        value={name}
//        onChangeText={setName}
//        placeholderTextColor={"red"}
//        style={{
//         borderWidth: 1,
//         borderColor:"#ddd",
//         margin:10,
//         fontSize:24    
//        }}
//       >
//       </TextInput>

//       <Pressable onPress={() => alert("Button Pressed")}
//         style={
//           ({pressed}) =>({
//             backgroundColor:pressed ? "#4a42d4" : "#6C63FF",
//           })}
//           hitSlop={{
//             top:10,
//             bottom:20,
//             left:20,
//             right:20
//           }}
//         >
//         {({pressed}) =>
//         pressed ? <Text>Presseing...</Text> : <Text>Press Me</Text>
//         }
//       </Pressable>
//     </View>
//   )
// }

// import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { Button } from '@react-navigation/elements'

// const HomeScreen = () => {

//   const [isDarkMode , setIsDarkMode] = useState(false)

//   const items = Array.from({ length: 20 }, (_, i) => {
//     `Item ${i + 1}`
//   })
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "red" }}
//       contentContainerStyle={{
//         padding:16,
//         alignItems:'center'
//       }}
//     >
//       {
//         items.map((item) => (
//           <View
//             key={item}
//             style={{
//               backgroundColor: 'white',
//               padding: 16,
//               borderRadius: 10,
//               marginBottom: 10,
//               shadowColor: '#000',
//               shadowOpacity: 0.05,
//               shadowRadius: 4,
//               elevation: 2,
//             }}
//           >
//             <Text style={{ fontSize: 16 }}>{item}</Text>
//           </View>
//         ))
//       }
//       <Button title="Hello i am button" 
//       color='{"green}'
//       onPrss={() =>alert("Hello World")}
//       />
//       <Switch value={isDarkMode} onValueChange={setIsDarkMode} 
      
//       />
//     </ScrollView>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({})





import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  const USERS = [
  { id: '1', name: 'Alice Johnson', role: 'Designer' },
  { id: '2', name: 'Bob Smith', role: 'Developer' },
  { id: '3', name: 'Carol White', role: 'Manager' },
  { id: '4', name: 'David Brown', role: 'Developer' },
  { id: '5', name: 'Eve Davis', role: 'Designer' },
];

  return (
    <FlatList 
    style={{
      backgroundColor:'red'
    }}
    data = {USERS}
    horizontal
    keyExtractor={(item) => item.id}
    contentContainerStyle={{
      padding:25,
      margin:15,
      backgroundColor:"green"
    }}
    renderItem={({item}) => 
      <Text>{item.name}</Text>
    }
    ItemSeparatorComponent={()=>{
      <View  style={{height:1,backgroundColor:"black"}}/>
    }}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})