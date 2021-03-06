
import { Platform, StyleSheet, Dimensions } from 'react-native';
// Screen Styles
import { Fonts, Metrics, Colors } from '../../Themes';


const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
    backgroundColor: Colors.LightMoca,
	},
	header: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
				marginTop: Fonts.moderateScale(25)
			}
    }),
		elevation: 0
	},
	bottom_Spacer: {
		paddingBottom: 10
	  },
	images: {
		marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.1,
		// width: 330,
		width: 430,
        height: 120,
        borderRadius: 15


	},
	left: {
    flex: 0.5,
		 backgroundColor: 'transparent',
  },
	backArrow: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 30
	},
	textRight :{ 
	justifyContent: 'center',
	alignItems: 'center',
	width: 90
},
  body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent'
  },
	textTitle: {
    color: '#dadada',
    fontSize: Fonts.moderateScale(20),
	alignSelf: 'center',
	marginBottom: 450,
    fontFamily: Fonts.type.sfuiDisplayBold,
  },
  right: {
    flex: 0.5
	},
	
	inputFieldStyles:{
		height: (Metrics.HEIGHT * 0.45),
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	
	containEmail:{
		backgroundColor: '#fff',
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.92),
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		elevation: 3,
	},
	inputEmail:{
		height: (Metrics.HEIGHT * 0.08),
    width: (Metrics.WIDTH * 0.84),
		color: "#000",
		paddingLeft: Fonts.moderateScale(10),
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},
	containPassword:{
		backgroundColor: '#fff',
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.92),
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		elevation: 3,
	},
	divider: {
    width: (Metrics.WIDTH * 0.92),
		height: 0.6,
		backgroundColor: 'rgba(0,0,0,0.1)',
		left:15,
		right:15,
	},
	signbtnSec:{
		marginTop: Fonts.moderateScale(15),
		height: (Metrics.HEIGHT * 0.12),
	},
	signInGoogle : {
		alignItems:'center'
	},
	signInBtn:{
		backgroundColor: '#906c48',
		height: Metrics.HEIGHT * 0.08,
		width: Metrics.WIDTH * 0.92,
		borderRadius: 15,
		alignSelf: "center",
		elevation: 3,
		shadowColor: "#000",
		alignItems: "center",
		justifyContent: "center"
	},
	signInBtnText:{
		color: Colors.white,
		fontSize: Fonts.moderateScale(17),
		width: (Metrics.WIDTH * 0.92),
		textAlign: 'center',
		fontFamily: Fonts.type.sfuiDisplaySemibold,
	},
	forgotPassword: {
        color: '#906c48',
        fontSize: Fonts.moderateScale(16),
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH,
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: Colors.transparent,
        fontFamily: Fonts.type.proximaNovaBoldWeb
    },
	socialSec:{
		paddingTop: Fonts.moderateScale(30),
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: Fonts.moderateScale(5)
	},
	fbButton: {
		backgroundColor: "#3b5998",
		height: (Metrics.HEIGHT * 0.08),
		width: (Metrics.WIDTH * 0.92),
		borderRadius: 5,
		justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3,
	},
	fbButtonText:{
		color: '#906c48',
		paddingLeft: Fonts.moderateScale(5),
		fontSize: Fonts.moderateScale(17),
		fontFamily: Fonts.type.sfuiDisplayRegular,
	},
	eye :{
		position: 'absolute',
		right : 10,
		top : 9,
	},
	images_waskita: {
		width: 680,
		height: 870,
		marginBottom: -100,
		resizeMode: 'stretch'
	  },
});
export default styles;
