const shareButtonsTile = document.querySelectorAll('.tile-share-button')
console.log(shareButtonsTile)

const shareButtonPage = document.querySelectorAll('.share-button')
console.log(shareButtonPage)


async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtonsTile.forEach(shareButtonTile =>
    shareButtonTile.addEventListener('click', copyText))

shareButtonPage.forEach(shareButtonPage =>
    shareButtonPage.addEventListener('click', copyText))
