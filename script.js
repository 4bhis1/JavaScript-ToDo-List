let list = [
    
]

let k=list.length;

let displayItem = () => {
    
    let lists = document.getElementById("lists")

    while(lists.firstChild)
        lists.removeChild(lists.firstChild)

    for(let i of list){

        let list_item = document.createElement("div")
        list_item.classList.add("list_item")
        list_item.id=i.sr_no
        
        // let sr = document.createElement("div")
        // sr.classList.add("sr")
        // sr.appendChild(document.createTextNode(i.sr_no))

        let heading = document.createElement("div")
        heading.classList.add("heading")

        if(i.heading.length>18){
            heading.appendChild(document.createTextNode(i.heading.slice(0,16)+"..."))
            console.log("length situated")
        }
        else{
            heading.appendChild(document.createTextNode(i.heading))
            console.log("length -> ",i.heading.length)
        }
        

        let delete_this = document.createElement("div")
        delete_this.classList.add("delete-this")

        delete_this.addEventListener("click", () => {
            i.delete=true
            displayItem()
        })
        delete_this.appendChild(document.createTextNode("Delete"))

        

        let complete = document.createElement("div")
        complete.classList.add("complete")

        complete.addEventListener("click", () => {
            i.check=true
            displayItem()
        })
        complete.appendChild(document.createTextNode("Completed?"))

        if(i.check){
            complete.style.display="none"
        }


        let content = document.createElement("div")
        content.classList.add("content")
        content.appendChild(document.createTextNode(i.content))


        let bottom_division=document.createElement("div")
        bottom_division.classList.add("div-bottom")

        bottom_division.appendChild(delete_this)
        bottom_division.appendChild(complete)
        
        list_item.appendChild(heading)
        list_item.appendChild(content)
        list_item.appendChild(bottom_division)

        if(i.check){
            list_item.style.backgroundColor="tomato"
        }
        if(!i.delete)
            lists.appendChild(list_item)

        console.log(i.sr_no,i.heading,i.check,i.content)
    }

}

displayItem()

let show = () => {
    document.getElementById("inputData").style.display="block";
    document.getElementById("main").style.display="none";
}

let hide = () => {
    document.getElementById("inputData").style.display="none";
    document.getElementById("main").style.display="block";
}

// let dropFromList = (num) => {
    
// }

let addItem = () => {
    let inputHeading = document.getElementById("inputHeading").value
    let inputContent = document.getElementById("inputContent").value

    if( inputContent && inputHeading){

        // let k=list.length
        

        let obj = {
            sr_no:k,
            heading:inputHeading,
            check:false,
            content:inputContent
        }

        list.unshift(obj)
        console.log(inputHeading,inputContent)
        displayItem()
        document.getElementById("inputHeading").value = ""
        document.getElementById("inputContent").value = ""

        hide()
        k++;    

    }
    else{

        alert("Write something s !!!")

    }
}

let value

let addButton = document.getElementById("add").addEventListener("mouseover", () =>{
    
    // value = document.getElementById("add").innerHTML
    document.getElementById("add").innerHTML = "Add Event +"
    // console.log(value)
    
})

let removeButton = document.getElementById("add").addEventListener("mouseleave", () =>{
    
    // let value = document.getElementById("add").innerHTML
    document.getElementById("add").innerHTML = "+"
    // console.log(value)
    
})
