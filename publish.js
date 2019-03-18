var emails = [
    '3dizhi@gmail.com'
];
var newestUrls = [
    'https://july52.com',
    'https://july90.xyz',
    'https://july98.xyz',
];
var otherUrls = [
    'https://3dizhi.github.io/',
    'https://july50.com',
];
var foreverUrls = [
    'https://julyporn.com',
    'https://www.julyporn.com',
]

function createFieldElem(title, items, plainText) {
    var fieldElem = document.createElement('div');
    fieldElem.setAttribute('class', 'field');

    var titleElem = document.createElement('h4');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }
    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = 'JULY<span>PORN</span>'
    mainElem.appendChild(logoElem);

    // newest urls
    var newestFieldElem = createFieldElem('最新訪問地址', newestUrls);
    mainElem.appendChild(newestFieldElem);

    // other urls
    var otherFieldElem = createFieldElem('其他地址發佈', otherUrls);
    mainElem.appendChild(otherFieldElem);

    // email
    var mailFieldElem = createFieldElem('通過郵件獲取', emails, true);
    mainElem.appendChild(mailFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem('永久訪問地址', foreverUrls);
    mainElem.appendChild(foreverFieldElem);
}
