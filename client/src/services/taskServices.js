import axios from 'axios';
const apiURL = "http://localhost:8080/api/tasks";

export function getTasks(){
    return axios.get(apiURL);
}

export function addTask(task){
    return axios.post(apiURL, task);
}

export function updateTask(id, task){
    return axios.put(apiURL + '/' + id , task);
}

export function deleteTask(id){
    return axios.delete(apiURL + '/' + id);
}