const selectBtn = document.querySelector('.select-btn');
        items = document.querySelectorAll(".item");
        console.log(selectBtn, items)
    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    })

    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");

            let checked = document.querySelectorAll(".checked");
                btnText = document.querySelector(".select-btn");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerHTML = "Select ONE!";
            }
        });
    });

$(function(){

    $('.multi-select').selectpicker();

})