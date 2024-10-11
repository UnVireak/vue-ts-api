// File: storeData.ts or storeData.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useStore = defineStore('useStore', () => {
  const data = ref('Hi');
  const listHistory = ref([]); 


  async function getHistory() {
    const requestData = JSON.stringify({
      ai_type: 'vision',
      page: '1',
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://rean.app/users/list-vision-chat-History',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJpYXQiOjE2ODM3NzU5NDZ9.qdR2BXG2a2_3B_yiPRsBxcMpU71wtBXQNtN2tu7nVnA',
      },
      data: requestData,
    };

    try {
      const response = await axios.request(config);
      listHistory.value = response.data.data;
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  }

  // Delete history method
  async function deleteHistory(userId: number, chatId: string) {
    const config = {
      method: 'post', 
      url: 'https://rean.app/users/delete-chat-history',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJpYXQiOjE2ODM3NzU5NDZ9.qdR2BXG2a2_3B_yiPRsBxcMpU71wtBXQNtN2tu7nVnA',
      },
      data: JSON.stringify({
        user_id: userId, 
        chat_id: chatId, 
      }),
    };

    try {
      const response = await axios.request(config);
      console.log('History deleted successfully:', response.data);
      // Update listHistory by filtering out the deleted item
      listHistory.value = listHistory.value.filter((item: any) => item.id !== chatId);
    } catch (error) {
      console.error('Error deleting history:', error);
    }
  }

  return {
    data,
    getHistory,
    deleteHistory,
    listHistory,
  };
});
