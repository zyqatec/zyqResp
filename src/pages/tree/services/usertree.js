import request from '../../../utils/request'

export function showInTree(){
    const data=request(`/api/comments`);
    //console.log(data);
    
    return data;
}