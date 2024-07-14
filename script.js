const signUpButton =  document.getElementById("signUp");
const signInButton =  document.getElementById("signIn");
const container =  document.getElementById("container");
const signUpText = document.getElementById("signUp-text");
const signInText = document.getElementById("signIn-text");
const loader =  document.getElementById("loader");
const loaderTwo =  document.getElementById("loaderTwo");


// signUpButton.addEventListener("click", () => {container.classList.add("right-panel-active");})
// signInButton.addEventListener("click", () => {container.classList.remove("right-panel-active");})

signUpButton.addEventListener("click", () =>{
    setTimeout(
        () => {
            signUpText.classList.add("hide");
            loader.classList.add("active");
            setTimeout (
                () => {
                    container.classList.add("right-panel-active");
                    loader.classList.remove("active");
                    setTimeout(() => {
                        signUpText.classList.remove("hide")

                    },
                500)
                }, 2000
            )

        }, 500)
})

signInButton.addEventListener("click", () => {
    setTimeout(
        () => {
            signInText.classList.add("hide");
            loaderTwo.classList.add("active");
            setTimeout(
                () =>{
                    container.classList.remove("right-panel-active");
                    loaderTwo.classList.remove("active");
                    setTimeout(() => {
                        signInText.classList.remove("hide")

                    },
                500)
                }, 2000
            )

        }, 500
    )


})
