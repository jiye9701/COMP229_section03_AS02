// IIFE --Immediately Invoked Function Expression
//Created by: Jiye Yu - Student Nr.:301116244 Created on Oct 08, 2020
//COMP229_section03_assignment1_301116244 Jiye Yu


(function(){

    function Start()
    {
        console.log("App Started...");

        if(document.title == "Contact")
        {
            let sendButton = document.getElementById("sendButton");
            let cancelButton = document.getElementById("cancelButton");
            let form = document.forms[0];


            sendButton.addEventListener("click", (event) => {
                event.preventDefault();

                let fullName = document.getElementById("fullName").value;
                let contactNumber = document.getElementById("contactNumber").value;
                let emailAddress = document.getElementById("emailAddress").value;
                let message = document.getElementById("message").value;


                console.info(`Full Name: ${fullName}
                Contact Number: ${contactNumber}
                Email Address :${emailAddress}
                Message       :${message}`);

                
                form.reset();
            });

            cancelButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(confirm("Are you Sure?"))
                {
                    location.href = "/home";
                }
            });
        }
    

        let dangerButtons = document.getElementsByClassName("btn-danger");

        for (const button of dangerButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    location.href = '/component-list';
                }
            });
        }
    }

    window.addEventListener('load', Start);
})();