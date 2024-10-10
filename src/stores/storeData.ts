import { defineStore } from 'pinia';
import {ref} from "vue";
import axios from 'axios';
export const useStore = defineStore('useStore', ()=>{
    const data = ref('Hi');
    const listHistory = ref();
    async function getHistory(){
        let data = JSON.stringify({
            "ai_type": "vision",
            "page": "1"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://rean.app/users/list-vision-chat-History',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJpYXQiOjE2ODM3NzU5NDZ9.qdR2BXG2a2_3B_yiPRsBxcMpU71wtBXQNtN2tu7nVnA'
            },
            data : data
        };

        await axios.request(config)
            .then((response) => {
                listHistory.value = response.data.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return{
        data,
        getHistory,
        listHistory
    }
});