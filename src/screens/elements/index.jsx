import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';
import { AddItem, CustomModal, TaskList } from '../../components';
import { colors } from '../../constants/theme/colors';

const Elements = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    const found = tasks?.find(storedTask => storedTask.value === task);
    if(found){
      console.warn(`The task ${task} it's already on the list`);
    } else {
      setTasks([
        ...tasks,
        {
          id: Math.random().toString(),
          value: task,
          qty: 0
        }
      ]);
      setTask('');
    }
    
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  // TODO update quantity
  const onHandleUpdate = (id, newQty) => {
    /*
    tasks.map( storedTask => { 
      if(storedTask.id === id){
        storedTask.qty = newQty;
      }
    });
    */
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);

  }

  return (
    <View style={styles.container}>
      <AddItem 
        buttonColor={colors.primary}
        buttonText='Add'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='add a new task'
        task={task}
      />
      <TaskList 
        tasks={tasks}
        onHandlerModal={onHandlerModal}
      />
     <CustomModal 
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        onHandleUpdate={onHandleUpdate}
        selectedTask={selectedTask}
     />
    </View>
  );
}


export default Elements;