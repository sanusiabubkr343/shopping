window.addEventListener('load', () => {
  const shop_list_el = document.querySelector('.shop-list-home');
  const register_el = document.querySelector('.register-nav');
  const login_el = document.querySelector('.login-nav');
  const addButton = document.querySelector('.add-btn');
  const modal_el = document.querySelector('.modal')
  const modal_content_el = document.querySelector('.modal-content')
  const items_el = document.querySelector('.items')




  const shoplistHTML = `
  
   <div class="card">
      <input class="text-input" type="text" readonly >
      <div class="options">
        <img src="./thumbnails/icons8-edit-32.png"  class='edit-btn' alt="">
        <img src="./thumbnails/icons8-delete-30.png" class='delete-btn'  alt="">
      </div>
    
    </div>
   

`


  const registerHTML = `
  <div class="container">
        <div class="content">
         
           <img src="./thumbnails/icons8-cancel-30.png" alt=""  class="cancel-img" >
      
        
          <div>
            <h1>Register</h1>
          </div>
        
          <div class="login-title">
            <h2>Ccomplete the form to set up your account</h2>
          </div>
          <div class="Full-name placeholder  ">
            <p>Full Name</p>
            <input class="box full-name-box" type="text">
          </div>
          <div class="username placeholder  ">
            <p>Username</p>
            <input class="box username-box" type="text">
          </div>
          <div class="username placeholder  ">
            <p>Email</p>
            <input class="box email-box" type="text" placeholder="jeanette.kelly@msn.com">
          </div>
          <div class="password placeholder ">
            <p>password</p>
            <input class="box password-flex" type="password">
            <img class="hidden-image" src="../thumbnails//password-eye.svg" alt="">
          </div>
        
          <div>
            <a href="#"><button class="reg-button">Register</button></a>
          </div>
        
        </div>

    </div>
  
`

  const loginHTML = `
      <div class="container">
          <div class="content">
          <img src="./thumbnails/icons8-cancel-30.png" alt=""  class="cancel-img" >
          
            <div>
              <h1>Login</h1>
            </div>
          
            <div class="login-title">
              <h2>Enter your login details</h2>
            </div>
            <div class="username placeholder  ">
              <p>Username</p>
              <input class="box username-box " type="text" placeholder="jeanette.kelly@msn.com">
            </div>
            <div class="password placeholder ">
              <p>password</p>
              <input class="box password-flex" type="password">
              <img class="hidden-image" src="../thumbnails//password-eye.svg" alt="">
            </div>
          
            <div>
              <a href="#"><button class="login-button">LOGIN</button></a>
            </div>
          
          </div>
    </div>

  
`
  const display_when_not_login_HTML = `
  <p>
  <h1> Please Login to Add and Manage your items</h1>
</p>    

`

  // setting on click listeners

  shop_list_el.addEventListener('click', (e) => {
    // check if login  display add item and list of items
    //display display_when_not_login_HTML




  })





  register_el.addEventListener('click', (e) => {

    dipslay_modal(registerHTML);
    const cancel_el = document.querySelector('.modal .modal-content .cancel-img');
    const reg_btn = document.querySelector('.modal .modal-content .reg-button')
    const password_el = document.querySelector('.modal .modal-content .password-flex')
    const fullname_el = document.querySelector('.modal .modal-content .full-name-box')
    const username_el = document.querySelector('.modal .modal-content .username-box')
    const email_el = document.querySelector('.modal .modal-content .email-box')


    reg_btn.addEventListener('click', () => {
      let fullname = fullname_el.value;
      let username = username_el.value;
      let email = email_el.value;
      let password = password_el.value;

      if (!fullname || !username || !email || !password) {
        alert('please fill in all fields')
      } else {
        console.log("Registering")
        modal_el.style.display = 'none';
      }

    })

    listen_to_cancel_modal();
    cancel_el.addEventListener('click', (e) => {
      modal_el.style.display = 'none';
    })


  })








  login_el.addEventListener('click', (e) => {


    dipslay_modal(loginHTML);
    const cancel_el = document.querySelector('.modal .modal-content .cancel-img');
    const login_btn = document.querySelector('.modal .modal-content .login-button')
    const password_el = document.querySelector('.modal .modal-content .password-flex')
    const username_el = document.querySelector('.modal .modal-content .username-box')



    login_btn.addEventListener('click', () => {
      let username = username_el.value;
      let password = password_el.value;
      if (!username || !password) {
        alert('please fill in all fields')
      } else {

        console.log("Logging in")
        modal_el.style.display = 'none';
        // set the display of login as LOGOUT

        register_el.innerHTML = 'Welcome' + " " + username + "  !";
        login_el.innerHTML = 'LOGOUT';
        document.getElementById('.register-nav').disabled = true;

        register_el.disabled = true;
      }

    })

    listen_to_cancel_modal();
    cancel_el.addEventListener('click', (e) => {
      modal_el.style.display = 'none';
    })




  });









  addButton.addEventListener('click', (e) => {
    const input_text_el = document.querySelector(' .btn-wrapper text-input');
    items_el.innerHTML += shoplistHTML;
    let data = input_text_el.value;
    let text_input = document.querySelector('.card .item-input');
    edit_btn = document.querySelector('.edit-btn');
    delete_btn = document.querySelector('.delete-btn');
    text_input.value = data;
    console.log(data);

    edit_btn.addEventListener('click', (e) => {         // edit button
      document.getElementById('item-input').removeAttribute('readonly');

      console.log("edit button clicked")
    })

    delete_btn.addEventListener('click', (e) => {         // delete  

      console.log("delete button clicked")
    })

  })











  // display modal
  dipslay_modal = (content) => {

    modal_el.style.display = 'block';
    modal_content_el.innerHTML = content;
  }





  listen_to_cancel_modal = () => {
    // When the user clicks on <span> (x), close the modal  or
    // When the user clicks anywhere outside of the modal, close it

    window.onclick = function (event) {
      if (event.target == modal_el) {
        modal_el.style.display = "none";
      }

    }

  }

})









