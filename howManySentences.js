let content = document.querySelector('.content')

function previewFile() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('input[type=file]').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // this will then display a text file
      let text = reader.result.split('.').length
      content.innerText = text;
    }, false);
  
    if (file) {
      reader.readAsText(file);
    }
  }