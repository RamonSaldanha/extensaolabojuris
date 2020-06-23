window.onload = function(){
  var button = document.querySelector('#app-root > div > div.WithMetricsDispatcher > div > div > div > div > div:nth-child(1) > div > div.DocumentPage-tools > div > div > div > div.ToolBarBase-leftActions > button');

  button.addEventListener("click", copyEmenta);

  function copyEmenta(){

    // document.querySelector('.modal-header')
    setTimeout(function(){
      var modal = document.querySelector('.modal-title');
      modal.innerHTML += `
        <div class="FactsForReferenceModal-Copy">
          <button class="btn btn--sm btn--green" style="margin-bottom:15px;" id="copyButton">
            <span class="icon icon-content-copy"></span>
            COPIAR DE GRAÇA (DADOS PÚBLICOS)
          </button>
        </div>
      `;
      var copyButton = document.getElementById('copyButton');
      copyButton.addEventListener("click", copyToClipboard)
      function copyToClipboard () {
        var ementa = document.querySelector('.FactsForReferenceModal-body');
        copyStringToClipboard(ementa.innerText);
        copyButton.innerText = `Copiado com sucesso! `
      }


    }, 500)
  }

  function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }
}
// button.addEventListener("click", function(){
//   console.log('oi')
// });

// var ementa = document.querySelector('.FactsForReferenceModal-body')

// function stripHtml(html)
// {
//    var tmp = document.createElement("DIV");
//    tmp.innerHTML = html;
//    return tmp.textContent || tmp.innerText || "";
// }

// console.log(stripHtml(ementa))

// console.log('dasdas')

