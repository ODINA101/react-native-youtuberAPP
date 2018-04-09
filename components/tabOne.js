 import React, {Component } from 'react';
 import {Text,View,StyleSheet,ScrollView,Image} from 'react-native';
import axios from "axios"
import { Spinner } from "native-base"  
import Ripple from "react-native-material-ripple"
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class Tab1 extends Component {
constructor(props) {
  super(props);
this.state = {
subs:"",
items:[],
next:"",
loader:false
}

axios.get("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCtz3sMM1qPIm1WrbhaJexaA&key=AIzaSyC4SmRsNPyo1k0tJx6pkWvflEBusgWRFV4")
.then(response => {
  this.setState({subs:response.data.items[0].statistics.subscriberCount})
})




}


componentDidMount() {
  axios.get("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&type=videos&channelId=UCtz3sMM1qPIm1WrbhaJexaA&maxResults=5&key=AIzaSyDyIXJHb0clHIW60pG8OR_G8XRuaUtVqHk")
  .then(response => {
    this.setState({items:response.data.items,next:response.data.nextPageToken})
  })


}


render() {

return (

    <View style={{flex:1,flexDirection:"column"}}>
  <ScrollView style={{flex:1,flexDirection:"column",}} onScroll={({nativeEvent}) => {

      if (isCloseToBottom(nativeEvent)) {
    if(!this.state.loader){
 this.setState({loader:true});

setTimeout(()=>{
  console.warn("works")

        axios.get("https://www.googleapis.com/youtube/v3/search?order=date&pageToken="+ this.state.next +"&part=snippet&type=videos&channelId=UCtz3sMM1qPIm1WrbhaJexaA&maxResults=10&key=AIzaSyDyIXJHb0clHIW60pG8OR_G8XRuaUtVqHk")
  .then(response => {


 var changed = this.state.items;
 response.data.items.forEach((data1) => {
    changed.push(data1);
  })


this.setState({items:changed,next:response.data.nextPageToken,loader:false})
 
  })
  
},1000)


      }

    }
    }} >

   <View style={{height:230,backgroundColor:"#EBEBEB",flex:1,flexDirection:"column"}}>
<View style={{flex:1}}>
<Image style={{flex:1}} source={{uri:'https://yt3.ggpht.com/hTMC7Pd_OvEXFSYLzDvTjAZxgNTtlHCwjih_mVQjDKwzV2I9CZzt8xfmQNU9cF-p_33N0Ubr8dI=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no'}}/>
</View>   
   <View style={{flex:1}}>
   <Image style={{width:70,height:70,borderRadius:60,marginTop:-40,marginLeft:20}} source={{uri:"https://yt3.ggpht.com/-KRAnLW8xURw/AAAAAAAAAAI/AAAAAAAAAAA/QVa8u9SnwaQ/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg"}} />
   <View style={{flexDirection:"row"}}>
   <Text style={{fontSize:20,color:"#000",marginLeft:20,marginTop:20,flex:1}}>Nika_Kabula</Text>
   <View style={{flex:1,justifyContent:"center",flexDirection:"row",alignSelf:"center",alignItems:"center"}}>
   <Text style={{marginTop:20}} >{this.state.subs} subscribers</Text>
  </View>
</View> 
</View>
   </View>  
  <View style={{padding:10}}> 
   {
  this.state.items?  this.state.items.map(data => {
    return(
     <Ripple style={{marginTop:30}}>
      <View style={{height:80,flexDirection:"row",}}>
     <Image style={{flex:1}} source={{uri:data.snippet.thumbnails.medium.url}} />
      <View style={{flex:1.5,justifyContent:"center",flexDirection:"column",alignSelf:"center"
      ,alignItems:"center"}}>
      <Text style={{width:160}}>{data.snippet.title}</Text>
      </View>
      </View>
      </Ripple>
    )
  }) : (<Spinner  color="green" />) 

   }  

</View>
<Spinner  color="green" />
  </ScrollView>
     </View>   
)

}


}