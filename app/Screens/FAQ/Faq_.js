import React from "react";
import { 
  SearchBar
} from 'react-native-elements';
//import react in project
import {
    PermissionsAndroid,
    Text,
    View,
    Image,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from "react-native";
import {
    Container,
    Button,
    Icon,
    Header,
    Content,
    List,
    ListItem,
    Right,
    Card
} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
//import all the required component
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";
import { Style, Colors, Metrics, Fonts } from "../../Themes";
import { Actions } from "react-native-router-flux";
import { _storeData, _getData } from "@Component/StoreAsync";
import DeviceInfo from "react-native-device-info";
import { urlApi } from "@Config/services";
import IntlPhoneInput from '@Component/CountryCode';
import { color } from "react-native-reanimated";

class FaqPages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: true,
            search: '',

            //array
            generals: []
        };

        console.log("props", props);
    }

    async componentDidMount(){
      isMount = true
      const data = {
        hd : new Headers({
          'Token' : await _getData('@Token')
        }),
        user : await _getData('@User'),
        name : await _getData('@UserId'),
        project : await _getData('@UserProject'),
        names: await _getData('@Name')
      }

      this.setState(data,()=>{
        this.getGeneralFaq()
        // this.getDebtors()
        // this.getPayProgress()
      })
    }

    updateSearch = (search) => {
      this.setState({ search });
    };

    goToFaqDetail(tez){
      Actions.FaqDetailPage({FaqData: tez});
    }

    getGeneralFaq = () => {
      {
          isMount
              ? fetch(
                    urlApi +
                        "c_faq/getFaqGeneral/",
                    {
                        method: "GET",
                    }
                )
                    .then(response => response.json())
                    .then(res => {
                        if (!res.Error) {
                            const resData = res.Data;
                            this.setState({ generals: resData });
                          //   _storeData("@getprice",resData);
                          // this.getDebtors(res);
                        }
                        console.log("getGeneral", res);
                    })
                    .catch(error => {
                        console.log(error);
                    })
              : null;
      }
  };

    render() {
      const { search } = this.state;
        return (
            <Container style={styles.bgMain}>
            <Header style={styles.navigation}>
               <StatusBar
                 backgroundColor={Colors.brownTuansing}
                 animated
                 barStyle="light-content"
               />
     
               <View style={styles.actionBarLeft}>
                 <Button
                   transparent
                   style={styles.actionBarBtn}
                   onPress={Actions.pop}
                 >
                   <Icon
                     active
                     name="arrow-left"
                     style={styles.textWhite}
                     type="MaterialCommunityIcons"
                   />
                 </Button>
               </View>
               <View style={styles.actionBarMiddle}>
                 <Text style={styles.actionBarText}>
                   {"Help center".toUpperCase()}
                 </Text>
               </View>
               <View style={styles.actionBarRight}></View>
               </Header>

               <Content
               style={styles.layoutInner}
               contentContainerStyle={styles.layoutContent}
             >
                <View>
                    <ScrollView>
                      <SearchBar
                          round
                          lightTheme
                          placeholder="Type Here..."
                          onChangeText={this.updateSearch}
                          value={search}
                          searchIcon={{ size: 24 }}
                          containerStyle={{ height: 70 }}
                          inputStyle={{ color: 'black'}}
                      />
                        <View>
                               <View style={{
                                  marginTop: 15,  
                                  marginBottom: 5,  
                                  backgroundColor: 'white',
                                  width: '100%',
                                  height: 40
                                }}>
                                    <Text style={[styles.textBlack,styles.textMedium, styles.textAlign]}>FAQ</Text>
                                </View>
                                <View
                                  style={{
                                      justifyContent: "flex-end",
                                      flexDirection: "row",
                                      flex: 1,
                                      paddingRight: 16,
                                      marginTop: -40
                                  }}
                                >
                                  <Button
                                      small
                                      rounded
                                      style={styles.sBtnHead}
                                      // onPress={() => Actions.ListingProjectPage()}
                                  >
                                      <Text style={styles.sLinkHead}>See all</Text>
                                  </Button>
                              </View>

                                <View style={{marginTop: 14}}>
                                  {
                                    this.state.generals.length > 0 ?
                                    this.state.generals.map((data,key)=>
                                    <Card style={styles.cardBox} key={key}>
                                    <TouchableOpacity onPress={()=>this.goToFaqDetail(data)}>
                                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                                            <Text style={{
                                                fontSize: 14,
                                                textAlign: 'left',
                                                color: '#333',
                                                fontWeight : "bold",
                                                fontFamily: "Montserrat-Regular",
                                                flex: 1, 
                                                flexWrap: 'wrap'
                                            }}>
                                                {data.subject}
                                            </Text>
                                            <View>
                                              <Right style={{position:"relative", right: 5}}>
                                                <Icon name="chevron-right" style={{fontSize: 30}} type="MaterialCommunityIcons" />
                                              </Right>
                                            </View>
                                      </View>
                                      </TouchableOpacity>
                                    </Card>
                                    )
                                    :
                                    null
                                  }
                                  
                                </View>

                                <View style={{ 
                                  marginTop: 15,  
                                  marginBottom: 5,  
                                  backgroundColor: 'white',
                                  width: '100%',
                                  height: 40
                                 }}>
                                    <Text style={[styles.textBlack,styles.textMedium, styles.textAlign]}>CATEGORY</Text>
                                </View>
                                <View style={{
                                  marginTop: 15,  
                                  marginBottom: 5,  
                                  backgroundColor: 'white',
                                  // width: '100%',
                                  // height: 40
                                }}>
                                  <View style={styles.viewButton}>
                                      <TouchableOpacity
                                          onPress={()=>this.goToFaqDetail("Z")}
                                          style={styles.buttonStyle}>
                                          <Image style={styles.imgButton} source={require('@Asset/images/support.png')} />
                                          <Text style={styles.buttonTitle}>AGENT</Text>
                                      </TouchableOpacity>
                                    
                                    <TouchableOpacity
                                        // onPress={()=>this.goToDash("nup")}
                                        style={styles.buttonStyle}>
                                        <Image style={styles.imgButton} source={require('@Asset/images/group.png')} />
                                        <Text style={styles.buttonTitle}>INHOUSE</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        // onPress={()=>this.goToDash("nup")}
                                        style={styles.buttonStyle}>
                                        <Image style={styles.imgButton} source={require('@Asset/images/curriculum.png')} />
                                        <Text style={styles.buttonTitle}>GUEST</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        // onPress={()=>this.goToDash("nup")}
                                        style={styles.buttonStyle}>
                                        <Image style={styles.imgButton} source={require('@Asset/images/laptop.png')} />
                                        <Text style={styles.buttonTitle}>DEBTOR</Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ 
                                    marginTop: 15,  
                                    marginBottom: 5,  
                                    backgroundColor: 'white',
                                    width: '100%',
                                    height: 40
                                  }}>
                                    <Text style={[styles.textBlack,styles.textMedium, styles.textAlign]}>CONTACT US</Text>
                                </View>
                                <View style={{marginTop: 14}}>
                                  <View style={{
                                    backgroundColor: 'white',
                                    width: '100%',
                                    height: 210
                                  }}>
                                    <List style={{paddingVertical: 3}}>
                                      <ListItem
                                      noBorder
                                        style={{alignItems: "flex-start",
                                        paddingVertical: 10}}
                                      >
                                        <Image
                                          source={require("@Asset/icon/mail.png")}
                                          style={{
                                            marginRight: 10,
                                            // marginTop: 10,
                                            width: 30,
                                            height: 30
                                          }}
                                        />
                                        <View style={{ alignSelf: "center" }}>
                                          <Text style={{
                                               fontFamily: "Montserrat-Regular",
                                               color: "#333",
                                               marginBottom: 5,
                                               fontSize: 15
                                          }}>
                                            {"Email".toUpperCase()}
                                          </Text>
                                          <Text style={styles.infoDesc}>
                                            {"cs.ifca@ifca.co.id"}
                                          </Text>
                                        </View>
                                      </ListItem>
                                        <ListItem
                                        noBorder
                                          style={{alignItems: "flex-start",
                                          paddingVertical: 10}}
                                        >
                                          <Image
                                            source={require("@Asset/icon/phone.png")}
                                            style={{
                                              marginRight: 10,
                                              // marginTop: 10,
                                              width: 30,
                                              height: 30
                                            }}
                                          />
                                          <View style={{ alignSelf: "center" }}>
                                            <Text style={{
                                                fontFamily: "Montserrat-Regular",
                                                color: "#333",
                                                marginBottom: 5,
                                                fontSize: 15
                                            }}>
                                              {"Telephone".toUpperCase()}
                                            </Text>
                                            <Text style={styles.infoDesc}>
                                              {"(+62) 21-09099988"}
                                            </Text>
                                          </View>
                                      </ListItem>
                                    </List>

                                    <View style={{
                                      borderStyle: "solid",
                                      borderWidth: 1,
                                      borderRadius: 1,
                                      borderColor: '#f2f2f2'
                                    }}
                                    />
                                    <View style={{ 
                                    // marginTop: 15,  
                                    // marginBottom: 5,  
                                    // backgroundColor: 'white',
                                    // width: '100%',
                                    // height: 40
                                  }}>
                                    <Text style={{
                                      fontSize: 12,
                                      fontFamily: "Montserrat-Regular",
                                      textAlign: "center",
                                      padding: 15
                                    }}>Layanan Pelanggan 24 jam, Senin s/d Minggu termasuk Hari Libur Nasional			
			                              </Text>
                                </View>
                                  
                                  </View>
                                </View>
                        </View>
                  
                    </ScrollView>
                </View>
                </Content>
               </Container>
        );
    }
}
export default FaqPages;
