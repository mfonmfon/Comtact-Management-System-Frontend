

    const SIGN_UP = "http://localhost:8070/user/sign-up";
    // const  LOGIN = "http://localhost:8070/user/login";
    // const LOGOUT = "http://localhost:8070/user/logout";


    const form = document.getElementById("form")
    // const url = SIGN_UP;
    // console.log(form)

    form.addEventListener('submit',async (event) => {
        event.preventDefault()

        const firstName = document.getElementById("firstName").value
        const lastName = document.getElementById("lastName").value
        const phoneNumber = document.getElementById("phoneNumber").value
        const  email = document.getElementById("email").value

        console.log(firstName)

        const data = await fetch(SIGN_UP, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({firstName:firstName, lastName:lastName, phoneNumber: phoneNumber, email: email})
        })

        if (data.ok) {
            alert("Signup Successfully")
            window.location.href='"http://localhost:8070/user/sign-up"'
        }else{
           alert("Did not signup")
        }
    })





