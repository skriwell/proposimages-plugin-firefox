// Initialisation
chrome.runtime.onMessage.addListener(showForm)

function showForm(urlImage) {
    $image = document.getElementById('image')
    $image.setAttribute('src', urlImage)
}

// Check the form
const minTitle = 2
const maxTitle = 50
let $title = document.getElementById('title')
let $description = document.getElementById('description')
let $submit = document.getElementById('form')

//$title.addEventListener('blur', checkTitle)
//$description.addEventListener('blur', checkDescription)
$submit.addEventListener('submit', (e) => {checkForm(e)})

function checkTitle() {
    if($title.value.length < minTitle || $title.value.length > maxTitle) {
        displayError($title, true);
        return false;
    }
    else {
        displayError($title, false);
        return true;
    }
}

function checkDescription() {
    if ($description.value === '') {
        displayError($description, true);
        return false;
    }
    else {
        displayError($description, false);
        return true;
    }
}

function checkForm(e) {
    let title = checkTitle()
    let description = checkDescription()

    e.preventDefault()

    if (title && description) {
        console.log('send')
    }
}

function displayError(field, value) {
    if (value) field.classList.add('field-error')
    else field.classList.remove('field-error')
}
