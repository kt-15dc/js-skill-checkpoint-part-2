// เริ่มเขียนโค้ดตรงนี้


const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json());
}

const mapNameAndFilter = (dataList) => {
    let result = dataList
    .map(data => data.name)
    .filter(name => name.length>17);

    return result;
}

getUsers()
    .then(mapNameAndFilter)
    .then((data)=>{console.log(data)});