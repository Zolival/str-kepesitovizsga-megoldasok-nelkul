function changeOuterLinks() {
    // debugger
    document.querySelectorAll('nav#link-list a')
    .forEach((item, index) => {
        if((item.innerHTML.includes('outer-link'))) {
            item.target = '_blank';
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
            console.log(index, item )
        }
    })

    const element = document.querySelector('#link-list')
    console.log(element)
    element.style.width = '30%'
    element.style.display = "flex";
    element.style.flexDirection = 'column';
    element.style.border = "1px solid blue";
    element.style.padding = '16px';
    element.style.margin = '0px auto';
}

changeOuterLinks()

export { changeOuterLinks };