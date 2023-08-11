import { time, loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';
import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Task', function () {
  let Contract: any;
  let contract: any;
  let owner: any;
  const NUM_TOTAL_TASK = 5;
  let totalTask;

  beforeEach(async () => {
    Contract = await ethers.getContractFactory('Task');
    [owner] = await ethers.getSigners();
    contract = await Contract.deploy();
    totalTask = [];
    for (let i = 0; i < NUM_TOTAL_TASK; i++) {
      const name = `Task ${i}`;
      let task = { id: i, name };
      await contract.addTask(name);
      totalTask.push(task);
    }
  });

  after(() => {});

  describe('Add Task', () => {
    it('should emit AddTask event', async () => {
      let task = { name: 'new task' };
      await expect(await contract.addTask(task.name))
        .to.emit(contract, 'AddTask')
        .withArgs(NUM_TOTAL_TASK, owner.address);
    });
  });

  describe('Get My Tasks', () => {
    it('should return the correct number of total tasks', async () => {
      const myTasks = await contract.getMyTasks();
      expect(myTasks.length).to.equal(NUM_TOTAL_TASK);
    });
  });

  describe('Change Task', () => {
    it('should emit ChangeTask event', async () => {
      const taskId = 0;
      const isDeleted = true;
      await expect(await contract.changeTask(taskId, isDeleted))
        .to.emit(contract, 'ChangeTask')
        .withArgs(taskId, isDeleted);
    });
  });
});
