//https://api.covid19api.com/summary
 const api_url = "https://jsonplaceholder.typicode.com/users";
function getApidata(URL)
{
    setTimeout(() => {
        //     fetch(URL).then((res)=>console.log(res))
    fetch(URL)
        .then((res)=>{return res//then we use because we handle the condition of promisse..
        .json()}).then((data)=>{console.log(data);DisplayData(data)})
        .catch((error)=>console
        .log(error.message));
    
    }, 3000);

}
function DisplayData(APIDATA)
{
    
    console.log(APIDATA);
    for(let i of APIDATA)//simple loop hai ye like python not simple loop becuase we find lenght fist
    {
        let tr=document.createElement('tr');//create a table row in this 
        let td1=document.createElement('td');// we crreate four columns
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');
        td1.innerText=`${i.id}`;//enter the data inside the column and row.
        td2.innerText=`${i.name}` ;
        td3.innerText=`${i.email}`;
        td4.innerText=`${i.phone}`;
        td5.innerText=`${i.address.city}`;  
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        document.getElementById("mytable").appendChild(tr);
    }
}
getApidata(api_url);