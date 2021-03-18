import http from 'axios';

export async function getPublicTasks({ page, pageSize, containsTitle }) {
    const responce = await http.get('tasks', {
        params: {page, perPage: pageSize, containsTitle }
    });

    if(responce.status == 200) return responce.data;

    throw responce;
}