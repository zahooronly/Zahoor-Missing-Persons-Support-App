import React from 'react';
import { View, Button, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../../constants/Constants';

type ButtonProps = {
  onPressLearnMore: () => void;
  titleText: string;
  accessibilityLabelText?: string;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  onPressLearnMore,
  titleText,
  accessibilityLabelText,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={onPressLearnMore}
        title={titleText}
        color={Colors.PRIMARY_COLOR}
        accessibilityLabel={accessibilityLabelText}
      />
    </View>
  );
};

type Styles = {
  buttonContainer: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    width: 308,
    height: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
});

export default ButtonComponent;
