import HomeButton from '@/components/HomeButton';
import {useLocalSearchParams} from 'expo-router'
import {Text, View, Image, StyleSheet} from 'react-native'

export default function Page(){
    const {id} = useLocalSearchParams<{id: string}>();
    const n = parseInt(id);
    const time = new Date(data.articles[n].publishedAt)

    return (
        <View>
        <Image source={data.articles[n].urlToImage} style={styles.image} />
        <Text style={{fontSize:22}}>
          {data.articles[n].content}
        </Text>
        <Text style={{textAlign:'left',opacity:0.4}}>
          {data.articles[n].author}
        </Text>
        <Text style={{textAlign:'right',opacity:0.4}}>
          {time.toDateString()}
        </Text>
        <HomeButton/>
        </View>

    )
}

const data = {
  "status": "ok",
  "totalResults": 2,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "CounterPunch"
      },
      "author": "Jeffrey St. Clair",
      "title": "Hell and High Water: the Year in Climate Chaos",
      "description": "2024 will be the warmest year on record...",
      "url": "https://www.counterpunch.org/2024/12/20/hell-and-high-water-the-year-in-climate-chaos/",
      "urlToImage": "https://www.counterpunch.org/wp-content/uploads/2024/12/flaglongview-scaled.jpeg",
      "publishedAt": "2024-12-20T06:59:11Z",
      "content": "Industrial plants, Port of Longview..."
    },
    {
"source": {
"id": null,
"name": "Neuwritesd.org"
},
"author": "Vani Taluja",
"title": "A 3D Camera for the Brain: The Simplified Science of MRI",
"description": "Have you ever dreamed of having Superman’s power of “X-Ray Vision,” or the ability to see through solid objects? While it is uncertain if this superpower was their motivation, medical researchers and physical scientists in the 1970s were able to turn this dre…",
"url": "https://neuwritesd.org/2024/12/19/a-3d-camera-for-the-brain-the-simplified-science-of-mri/",
"urlToImage": "https://neuwritesd.org/wp-content/uploads/2024/12/mris.jpeg?w=1200",
"publishedAt": "2024-12-20T04:52:29Z",
"content": "Posted by Vani Taluja on December 19, 2024 in NeuWrite, Physics and Neuroscience | Leave a comment\r\nHave you ever dreamed of having Supermans power of X-Ray Vision, or the ability to see through soli… [+10475 chars]"
}
  ],
  
}
const styles = {
image: {
    width: '100%',
    height: 400,
  },
}