import http from 'axios';

export async function getPublicTasks() {
    const responce = await http.get('tasks/allowanonymous');
    // const responce = await (await fetch('https://wave-api.azurewebsites.net/api/tasks/allowanonymous')).json();

    console.log(responce);

    return [];
}