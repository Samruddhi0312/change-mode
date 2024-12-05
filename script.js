const button = document.querySelector("#btn");
        const body = document.body;
        const modeicon = document.querySelector("#mode-icon")


        button.addEventListener("click", () =>{
            body.classList.toggle("mode");
            if (body.classList.contains("mode")) {
                modeicon.classList.replace("bi-brightness-high","bi-moon");
               

                
            } else {
                modeicon.classList.replace("bi-moon","bi-brightness-high");

                
            }
        })