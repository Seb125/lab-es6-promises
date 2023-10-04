// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  let nextStep = 1;

  getInstruction('mashedPotatoes', nextStep, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    
    nextStep = 2;

    getInstruction('mashedPotatoes', nextStep, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      nextStep = 3;

      getInstruction('mashedPotatoes', nextStep, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        nextStep = 4;

        getInstruction('mashedPotatoes', nextStep, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          let mashedImg = document.querySelector("#mashedPotatoesImg");
          mashedImg.removeAttribute("hidden");
        })

      })


  }) 
})

});

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    
    return obtainInstruction('steak', 6)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    
    return obtainInstruction('steak', 7)
  })
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
    
    
    
  })
  .catch ((error) => {
    console.error(error);
  })
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
    let steakImg = document.querySelector("#steakImg");
    steakImg.removeAttribute("hidden");
  })


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

    step = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

    step = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

    step = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

    step = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

    step = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

    step = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    
    
  } catch (err) {
    console.log("Something went wrong!", err);
  } finally {
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    let broccImg = document.querySelector("#broccoliImg");
    broccImg.removeAttribute("hidden");
  }

}
makeBroccoli();
// Bonus 2 - Promise all

async function makeSprouts() {
  
    try {
      let step0 = await obtainInstruction('brusselsSprouts', 0);
  
      let step1 = await obtainInstruction('brusselsSprouts', 1);
  
      let step2 = await obtainInstruction('brusselsSprouts', 2);
  
      let step3 = await obtainInstruction('brusselsSprouts', 3);
  
      let step4 = await obtainInstruction('brusselsSprouts', 4);
  
      let step5 = await obtainInstruction('brusselsSprouts', 5);
  
      let step6 = await obtainInstruction('brusselsSprouts', 6);

      let step7 = await obtainInstruction('brusselsSprouts', 7);

      Promise.all( [step0, step1, step2, step3, step4, step5, step6, step7])
      .then ((values) => {
        values.forEach(element => {
          document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`;
          
        });
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
        let brusselImg = document.querySelector("#brusselsSproutsImg");
        brusselImg.removeAttribute("hidden");
      })

      
      
    } catch (err) {
      console.log("Something went wrong!", err);
    }

    
  
  }

  makeSprouts();