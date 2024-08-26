
// const blogTitles=document.getElementsByTagName("h3");
// for(const title of blogTitles){
//     // console.log(title.innerText);

//     title.style.background="green"
    
// }

// const blogDetails=document.getElementsByTagName("p");
// console.log(blogDetails);
// for (const blog of blogDetails){

//    blog.style.backgroundColor="purple"
// }


//  const thirdTitle=document.getElementById("third-title")
//  thirdTitle.style.border="3px solid black"
//  thirdTitle.style.padding="20px"




// create blog
const article =document.createElement("article");
article.classList.add("blog-main")
const h3=document.createElement("h3")
h3.innerText="My awesome blog created by students";

const p=document.createElement("p");
p.innerText="$$$ Dicta vero sequi corporis quas quasi alias, consequatur dolorum eius maxime quos nesciunt atque. Nulla est corrupti repellendus, a cum recusandae provident obcaecati. Sit dolore optio ad voluptatem, sapiente vitae?  $$$ "

article.appendChild(h3)
article.appendChild(p)

document.body.appendChild(article)

const blogs=document.getElementsByClassName("blog-main");
for (const blog of blogs){
    blog.style.border="3px solid green"
    blog.style.margin="15px"
    blog.style.padding="15px"
}
    


    
    






 


 


