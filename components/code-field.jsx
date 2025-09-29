
import { Text, StyleSheet, Platform } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS } from '../theme/theme';

const autoComplete = Platform.select({
  android: 'sms-otp',
  default: 'one-time-code',
});

const CodeInputField = ({ 
  value, 
  onChangeText, 
  cellCount = 4,
  cellWidth = 48,
  cellHeight = 48,
  fontSize = 24,
  keyboardType = "number-pad",
  testID = "code-input",
  cellStyle,
  focusCellStyle,
  rootStyle
}) => {
  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={onChangeText}
      cellCount={cellCount}
      rootStyle={[styles.codeFieldRoot, rootStyle]}
      keyboardType={keyboardType}
      textContentType="oneTimeCode"
      autoComplete={autoComplete}
      testID={testID}
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[
            styles.cell,
            { width: cellWidth, height: cellHeight, fontSize, lineHeight: cellHeight - 6 },
            cellStyle,
            isFocused && styles.focusCell,
            isFocused && focusCellStyle,
          ]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused && <Cursor />)}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 20,
    alignSelf: 'flex-start',
    gap: 20,
  },
  cell: {
    borderWidth: 1,
    borderColor: COLORS.border,
    textAlign: 'center',
    color: '#000',
    borderRadius: 8,
    fontFamily: 'regular',
  },
  focusCell: {
    borderColor: COLORS.primary,
  },
});

export default CodeInputField;