import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$whiteColor'
  },
  titleText: {
    fontFamily: 'sansBold',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    color: Colors.whiteColor
  },
  topContainer: {
    flex: 0.2,
    maxHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$platinumColor'
  },
  bottomContainer: {
    flex: 0.8,
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '$alabasterColor'
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  customFont: {
    fontFamily: 'sansBold'
  },
  separator: {
    height: 1,
    backgroundColor: '$blackColor',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    opacity: 0.1
  },
  titleSep: {
    height: 1,
    backgroundColor: '$platinumColor',
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    opacity: 0.1
  },
  titleContainer: {
    flex: 0.2,
    alignItems: 'center'
  },
  stocksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default styles;
