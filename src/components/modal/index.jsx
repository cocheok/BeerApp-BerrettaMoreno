import React, { useState } from "react";
import { Modal, View, Text, Button, TextInput } from 'react-native'
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete}) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.selectedTask}>Name: {selectedTask?.value}</Text>
            <Text style={styles.selectedTask}>Quantity: {selectedTask?.qty}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
              title='Cancel'
              color='#626893'
              onPress={onHandleCancel}
            />
            <Button
              title='Delete'
              color='red'
              onPress={onHandleDelete}
            />
          </View>
        </View>
      </Modal>
    )
}

export default CustomModal;