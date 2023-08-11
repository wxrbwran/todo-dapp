// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Task {

  struct TaskItem {
    uint id;
    string name;
    bool isDeleted;
  }

  event AddTask(uint indexed taskId, address indexed user);
  event ChangeTask(uint indexed taskId, bool isDeleted);

  TaskItem[] private tasks;
  mapping(uint256 => address) taskToOwner;

  function addTask(string calldata _name) external  {
    uint id = tasks.length;
    tasks.push(TaskItem(id, _name, false));
    taskToOwner[id] = msg.sender;

    emit AddTask(id, msg.sender);
  }

  function changeTask(uint _taskId, bool _isDeleted) external  {
    address owner = taskToOwner[_taskId];
    require(owner == msg.sender, unicode"你不是任务的创建者");
    TaskItem storage t = tasks[_taskId];
    t.isDeleted = _isDeleted;
    emit ChangeTask(_taskId, _isDeleted);
  }

  function getAllTasks() public view returns(TaskItem[] memory) {
    return tasks;
  }

  function getMyTasks() public view returns(TaskItem[] memory) {
    uint count = tasks.length;
    uint counter = 0;
    TaskItem[] memory myTasksTmp = new TaskItem[](count);
    for(uint i = 0; i < count; i++) {
      TaskItem memory t = tasks[i];
      if (taskToOwner[t.id] == msg.sender) {
        myTasksTmp[counter] = t;
        counter += 1;
      }
    }
    TaskItem[] memory myTasks = new TaskItem[](counter);
    myTasks = myTasksTmp;
    return myTasks;
  }
}
