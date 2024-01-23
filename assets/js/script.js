const btn = document.querySelector(".btn");
const dialog = document.querySelector(".dialog");


function bindChange(){
    btn.addEventListener("click", e => {
        dialog.showModal();
        dialog.innerHTML = `Aylık: <input type="checkbox" id="checkBox">
                            <button class="exitBtn">Exit</button>`;
        bindExitBtn();
        
    })
}

function bindExitBtn(){
    const exitBtn = document.querySelector(".exitBtn");
    exitBtn.addEventListener("click", e => {
        dialog.close();
    })
}

bindChange();