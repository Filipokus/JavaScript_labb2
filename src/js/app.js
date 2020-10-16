const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

document.querySelector('#ex01').textContent = 'DONE!'
document.querySelector('.ex02').className = 'red'
document.querySelector('blockquote').textContent = "You don't know what it's like, you don't have a clue - if you did you'd find yourself DOING THE SAME THING TOO!"
addItemToList('shopping-list', 'Milk')
getNews(news.length)

function addItemToList(listName, newItem) {
    const ul = document.getElementById(listName)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem))
    ul.appendChild(li)
}

function getNews(numberOfArticles){
    for(let i = 0; i < numberOfArticles; i++){
        getArticle(i)
    }
}

function getArticle(articleNumber) {
    let newArticle = document.createElement('div')
    newArticle.className = 'article'
    newArticle.appendChild(getArticleHeadline(articleNumber))
    newArticle.appendChild(getArticleAuthor(articleNumber))
    newArticle.appendChild(getArticleSummary(articleNumber))
    const link = news[articleNumber].href

    let clickableLink = document.createElement('a')
    clickableLink.setAttribute('href', link)
    let buttonReadMore = document.createElement('button')
    buttonReadMore.className = 'newsButton'
    buttonReadMore.textContent = 'Click to read full article'
    clickableLink.appendChild(buttonReadMore)
    newArticle.appendChild(clickableLink)

    document.getElementById('news').appendChild(newArticle)
}

function getArticleHeadline(articleNumber){
    const newHeadline = document.createElement('h2')
    const headline = document.createTextNode(news[articleNumber].headline)
    newHeadline.appendChild(headline)

    return newHeadline
}

function getArticleAuthor(articleNumber){
    const newAuthor = document.createElement('p')
    let author = ''

    if(news[articleNumber].author.length > 0){
        author = document.createTextNode('Written by: ' + news[articleNumber].author)
    }
    else{
        author = document.createTextNode('Unknown Author')
    }

    newAuthor.appendChild(author)
    return newAuthor
}

function getArticleSummary(articleNumber){
    const newSummary = document.createElement('p')
    const summary = document.createTextNode(news[articleNumber].summary)
    newSummary.appendChild(summary)
    return newSummary
}

let numberOfClicks = 0;
document.querySelector('main').addEventListener("click", displayClicks)

function displayClicks() {
    numberOfClicks++
    document.getElementById('click-counter').innerHTML = numberOfClicks
}

 document.querySelector('button:not(.newsButton)').addEventListener("click", disableButton)
 function disableButton() {
     document.querySelector('button:not(.newsButton)').disabled = true
 }

 document.getElementById("link-to-svt").addEventListener("click", function(event){
    event.preventDefault()
  })

  document.querySelector('img').setAttribute('src', 'https://images.unsplash.com/photo-1573224903788-6e0ece7bb24b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=745&q=80')
