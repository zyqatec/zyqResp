import request from '../../../utils/request';

export function showInTable(){
     const data=request(`/api/photos`);
     return data;
}