
const getStoredDetailList = () =>{
    const storedListStr = localStorage.getItem('detail-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }

}
const addToStoredDetailList = (id) =>{
    const storedList = getStoredDetailList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the detail list');
        
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('detail-list', storedListStr);
        toast('Welcome to the Details Section');

        
    }


}
export {getStoredDetailList,addToStoredDetailList}