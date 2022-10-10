// Reset function to reset the page
 let reset = () => {
   document.querySelector('input').value = '';
   document.querySelector('#b1').disabled = true;
   document.querySelector('#b2').style.display = "none";
   document.querySelector('.result').className = "result";
 };
// reset function ends here

// search and display result
let search = () => {
  let i = document.querySelector('input');

  let found = false;

  for (let n = 0; n < movies.length; n++) {
    if (i.value === movies[n]) {
      found = true;
      break;
    }
  }
  // search function ends here

  // result display function starts here
  let r = document.querySelector('.result');

  if (found) {
    r.textContent = "Movie is available here😎😍🖤🤩";
    r.classList.add('true');
  } else {
    r.textContent = "sorry ,not found😥😫😭";
    r.classList.add('false');
  }
  document.querySelector('#b2').style.display = "inline-block";
};

// capturing buttons from HTML Document
let btn1 = document.getElementById('b1');
let btn2 = document.getElementById('b2');

// adding click event listener
btn1.addEventListener('click', search);
btn2.addEventListener('click', reset);

btn1.disabled = true;

// adding input event listener to input box
document.querySelector('input').addEventListener('input', (e) => {
  if (e.target.value.length > 2) {
    btn1.disabled = false;
  } else {
    btn1.disabled = true;
  };
})


