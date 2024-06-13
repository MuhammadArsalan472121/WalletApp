import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Splash from '../screens/splashScreen';
import Login from '../screens/loginScreen';
import Register from '../screens/registerScreen';
import NationalIDCard from '../screens/nationalIDCard';
import ForgotPin from '../screens/forgotPinScreen';
import Verify from '../screens/verifyScreen';
import ResetPin from '../screens/restPinScreen';
import AccountCreated from '../screens/accountCreatedScreen';
import Welcome from '../screens/welcomeScreen';
import ManageFunds from '../screens/manageFunds';
import ManageCustomers from '../screens/manageCustomerScreen';
import Subscription from '../screens/subscriptionScreen';
import SubscriptionDetail from '../screens/subscriptionDetailScreen';
import ActionSuccessful from '../screens/actionSuccessful';
import CloseSubscription from '../screens/closeSubscriptionScreen';
import DepositByCollector from '../screens/depositbyCollectorScreen';
import Successful from '../screens/successfulScreen';
import DepositByCustomer from '../screens/depositbyCustomerScreen';
import Profile from '../screens/profileScreen';
import Report from '../screens/reportScreen';
import Collection from '../screens/collectionScreens';
import ImagePicker from '../components/imagePicker';
import AS from '../awesomAlertFiles/asyncStorageFile';

const screens = {
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
      // headerStyle: {backgroundColor: '#0090FF'}, this will over ride the property passed through defaultNavigation
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  NationalIDCard: {
    screen: NationalIDCard,
    navigationOptions: {
      headerShown: false,
    },
  },

  ForgotPin: {
    screen: ForgotPin,
    navigationOptions: {
      headerShown: true,
      title: false,
    },
  },
  Verify: {
    screen: Verify,
  },
  ResetPin: {
    screen: ResetPin,
  },
  AccountCreated: {
    screen: AccountCreated,
  },
  Welcome: {
    screen: Welcome,
  },
  ManageFunds: {
    screen: ManageFunds,
  },
  ManageCustomers: {
    screen: ManageCustomers,
  },
  Subscription: {
    screen: Subscription,
  },
  SubscriptionDetail: {
    screen: SubscriptionDetail,
  },
  CloseSubscription: {
    screen: CloseSubscription,
  },
  ActionSuccessful: {
    screen: ActionSuccessful,
  },
  DepositByCollector: {
    screen: DepositByCollector,
  },
  Successful: {
    screen: Successful,
  },
  DepositByCustomer: {
    screen: DepositByCustomer,
  },
  Profile: {
    screen: Profile,
  },
  Report: {
    screen: Report,
  },
  Collection: {
    screen: Collection,
  },
  ImagePicker: {
    screen: ImagePicker,
  },
  AS: {
    screen: AS,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#111',
    headerShown: false,
    headerStyle: {backgroundColor: '#FFF'},
  },
});

export default createAppContainer(HomeStack);
