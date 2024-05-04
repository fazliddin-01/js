const box = document.querySelector('.box')
async function bmw(){
    try {
        let res = await fetch('https://dummyjson.com/products')
        let users = await res.json()
        users.products.forEach(user => {
            // console.log(user);
            const card = document.createElement('div')
            // card.classList.add('card')
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let img = document.createElement('img');
            h2.innerHTML = user.brand
            p.innerHTML = user.price
            img.innerHTML = user.images
            img.setAttribute('src', user.images[0])
            // a.setAttribute('href', user.website)
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(img)
            box.appendChild(card)
        });
        
    } catch (error) {
        
    }
    
}
bmw()