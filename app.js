const btns = document.querySelectorAll(".btn");
const returnBtn = document.querySelector(".return-btn");
const submit = document.querySelector(".btn-submit");
const rates = document.querySelector(".rates")

const container = document.querySelector(".container")
const thanksContainer = document.querySelector(".thanks-container")



btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const clicked = (e.currentTarget);
    
    console.log(btn.innerHTML)

    if(clicked.innerHTML){
      e.currentTarget.classList.toggle("add")
      console.log(clicked)
    }

    rates.innerHTML = clicked.innerHTML;
  
  })
});

submit.addEventListener("click", function(e){
  
  if(e.currentTarget){
    thanksContainer.style.display = "block"
    container.style.display = "none"
  }
})

returnBtn.addEventListener("click", function(){

  thanksContainer.style.display = "none"
  container.style.display = "block";
  
})