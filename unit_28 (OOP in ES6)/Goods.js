class Goods {
    constructor(name, price, image, count) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.count = count;
    }
    draw() {
        const div = document.createElement('div');
        div.classList.add('goods');
        div.innerHTML = `<h1>${this.name}</h1>
        <p class="price">${this.price}</p>
        <img src="${this.image}" alt="${this.name}">`
        return div
    }
}