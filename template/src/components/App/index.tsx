import { SafeAreaView, Text } from 'react-native';
import StorybookUI from '../../../storybook';

import styles from './styles';

const App = () => (
  <SafeAreaView style={styles.sectionContainer}>
    <Text>Hello RN</Text>
  </SafeAreaView>
);

// module.exports = __DEV__ ? StorybookUI : App;
export default StorybookUI;
