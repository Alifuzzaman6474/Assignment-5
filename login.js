
// document.getElementById("two").addEventListener("click",function(){
//     console.log("hello2")
//     alert("go inside")
//     const amount = document.getElementById("amount").innerText;
//     const convertedamount =parseFloat(amount);
//     const sum=convertedamount-1;
//     console.log(sum)
//     document.getElementById("amount").innerText=sum;
//     const balance=document.getElementById("balance").innerText;
//     const convertedbalance=parseFloat(balance);
//     const sum2=convertedbalance+1;
//     console.log(sum2)
//     document.getElementById("balance").innerText=sum2;
// })
// document.getElementById("three").addEventListener("click",function(){
//     console.log("hello3")
//     alert("go inside")
//     const amount = document.getElementById("amount").innerText;
//     const convertedamount =parseFloat(amount);
//     const sum=convertedamount-1;
//     console.log(sum)
//     document.getElementById("amount").innerText=sum;
//     const balance=document.getElementById("balance").innerText;
//     const convertedbalance=parseFloat(balance);
//     const sum2=convertedbalance+1;
//     console.log(sum2)
//     document.getElementById("balance").innerText=sum2;
// })
// document.getElementById("four").addEventListener("click",function(){
//     console.log("hello4")
//     alert("go inside")
//     const amount = document.getElementById("amount").innerText;
//     const convertedamount =parseFloat(amount);
//     const sum=convertedamount-1;
//     console.log(sum)
//     document.getElementById("amount").innerText=sum;
//     const balance=document.getElementById("balance").innerText;
//     const convertedbalance=parseFloat(balance);
//     const sum2=convertedbalance+1;
//     console.log(sum2)
//     document.getElementById("balance").innerText=sum2;
// })
// document.getElementById("five").addEventListener("click",function(){
//     console.log("hello5")
//     alert("go inside")
//     const amount = document.getElementById("amount").innerText;
//     const convertedamount =parseFloat(amount);
//     const sum=convertedamount-1;
//     console.log(sum)
//     document.getElementById("amount").innerText=sum;
//     const balance=document.getElementById("balance").innerText;
//     const convertedbalance=parseFloat(balance);
//     const sum2=convertedbalance+1;
//     console.log(sum2)
//     document.getElementById("balance").innerText=sum2;

// })
// document.getElementById("six").addEventListener("click",function(){
//     console.log("hello6")
//     alert("go inside")
//     const amount = document.getElementById("amount").innerText;
//     const convertedamount =parseFloat(amount);
//     const sum=convertedamount-1;
//     console.log(sum)
//     document.getElementById("amount").innerText=sum;
//     const balance=document.getElementById("balance").innerText;
//     const convertedbalance=parseFloat(balance);
//     const sum2=convertedbalance+1;
//     console.log(sum2)
//     document.getElementById("balance").innerText=sum2;
// })
// document.getElementById("seven").addEventListener("click",function(){
//     console.log("hello7")
//     alert("go inside")
//     const amount = document.getElementById("amount").innerText;
//     const convertedamount =parseFloat(amount);
//     const sum=convertedamount-1;
//     console.log(sum)
//     document.getElementById("amount").innerText=sum;
//     const balance=document.getElementById("balance").innerText;
//     const convertedbalance=parseFloat(balance);
//     const sum2=convertedbalance+1;
//     console.log(sum2)
//     document.getElementById("balance").innerText=sum2;
// })
const date=new Date().toDateString()
const datear=date . split(" ")
document.getElementById("date").innerText=` ${datear[0]} ${datear[1]} ${datear[2]}`
document.getElementById("inside-h").addEventListener("click",function(){
    window.location.href="question.html"
})
// document.getElementById("history").addEventListener("click", 
//     function(){
// document.getElementById("his1").style.display="none"
// })
// document.getElementById("history").addEventListener("click", 
//     function(){
// document.getElementById("his2").style.display="none"
// })
// document.getElementById("history").addEventListener("click", 
//     function(){
// document.getElementById("his3").style.display="none"
// })
// document.getElementById("history").addEventListener("click", 
//     function(){
// document.getElementById("his4").style.display="none"
// })
// document.getElementById("history").addEventListener("click", 
//     function(){
// document.getElementById("his5").style.display="none"
// })
// //hjggjgjhgjggjjjh
// document.getElementById("history").addEventListener("click", 
//     function(){
// document.getElementById("his6").style.display="none"
// })
// document.getElementById("two").addEventListener("click", 
//     function(){
// document.getElementById("his1").style.display="block"
// })
// document.getElementById("three").addEventListener("click", 
//     function(){
// document.getElementById("his2").style.display="block"
// })
// document.getElementById("four").addEventListener("click", 
//     function(){
// document.getElementById("his3").style.display="block"
// })
// document.getElementById("five").addEventListener("click", 
//     function(){
// document.getElementById("his4").style.display="block"
// })
// document.getElementById("six").addEventListener("click", 
//     function(){
// document.getElementById("his5").style.display="block"
// })
// document.getElementById("seven").addEventListener("click", 
//     function(){
// document.getElementById("his6").style.display="block"
// })

const btns=document.querySelectorAll(".completebtn")
console.log(btns)
for(const btn of btns){
    btn.addEventListener("click", function(){
        alert("board successful")
        const amount = document.getElementById("amount").innerText;
    const convertedamount =parseFloat(amount);
    const sum=convertedamount-1;
    console.log(sum)
    document.getElementById("amount").innerText=sum;
    if(sum===0){alert("finished")}
    const balance=document.getElementById("balance").innerText;
    const convertedbalance=parseFloat(balance);
    const sum2=convertedbalance+1;
    console.log(sum2)
    document.getElementById("balance").innerText=sum2;
    btn.setAttribute("disabled", "true")
    btn.classList.add("bg-gray-300")
    const t=new Date().toLocaleTimeString()
    console.log(t)
    const historydeep=document.getElementById("his1")
    const p=document.createElement("p")
    const title=btn.parentNode.parentNode.parentNode
    console.log(title.querySelector("b"))
    p.innerText=`You have completed the task ${title.querySelector("b").innerText }at ${t}`
    historydeep.appendChild(p)
    })
}
document.getElementById("history").addEventListener("click", function(){
    document.getElementById("his1").innerHTML=" "
})
document.getElementById("them").addEventListener("click", function(){
const r=Math.floor(Math.random()*256)
const g=Math.floor(Math.random()*256)
const b=Math.floor(Math.random()*256)
const a="0.5"
document.body.style.backgroundColor=`rgba(${r},${g},${b},${a})`
})

