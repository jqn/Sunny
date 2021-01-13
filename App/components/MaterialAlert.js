import React from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    padding: 16,
    alignContent: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
  buttonTitle: {
    color: '#000000',
  },
  container: {
    backgroundColor: 'rgba(35,35,35,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  landscape: {alignSelf: 'center', width: '50%'},
  message: {
    fontFamily: 'System',
    fontSize: 17,
    lineHeight: 22,
  },
  portrait: {alignSelf: 'center'},
  title: {
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  titleContainer: {
    paddingBottom: 16,
  },
});

const MaterialAlert = ({
  visible,
  title,
  message,
  onCancelPress,
  onConfirmPress,
  confirmTitle,
  cancelTitle,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      supportedOrientations={['portrait', 'landscape']}>
      <View style={styles.container}>
        <View style={[styles.alertContainer]}>
          {!!title && (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
          <Text style={styles.message}>{message}</Text>
          <View style={styles.group}>
            <Button
              title={cancelTitle}
              type="clear"
              titleStyle={styles.buttonTitle}
              containerStyle={styles.button}
              onPress={onCancelPress}
            />
            <Button
              title={confirmTitle}
              type="clear"
              titleStyle={styles.buttonTitle}
              onPress={onConfirmPress}
              containerStyle={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

MaterialAlert.defaultProps = {
  visible: false,
  onCancelPress: () => {},
  onConfirmPress: () => {},
  title: '',
  message: '',
  cancelTitle: 'Cancel',
  confirmTitle: 'Ok',
};

MaterialAlert.propTypes = {
  visible: PropTypes.bool,
  onCancelPress: PropTypes.func,
  onConfirmPress: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default MaterialAlert;
