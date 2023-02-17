let content = document.querySelector('.content')

function previewFile() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      let periods = reader.result.split('. ')
      let questions = reader.result.split('?')
      let exclamations = reader.result.split('!')
      let count = periods.length + questions.length + exclamations.length
      //count each instance of punctuaction parameters, '. ' avoids triple count on elipses
      console.log(periods[0])
      console.log(questions[0])
      console.log(exclamations[0])
      //console.logs for manual test
      content.innerText = count;
    }, false);
  
    if (file) {
      reader.readAsText(file);
    }
  }


//use one .split(regex) to simplify code?