const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')
let n = 1
    //去掉x样式
const fn = (e) => { //e在点击之后消失
        const t = e.currentTarget //t把当时的e记下来
        setTimeout(() => { t.classList.remove('x') }, n * 1000)
        n += 1
    }
    //加上x样式
const fm = (e) => { //e在点击之后消失
    const t = e.currentTarget //t把当时的e记下来
    setTimeout(() => { t.classList.add('x') }, n * 1000)
    n += 1
}
level1.addEventListener('click', fn, true) // 换入true,由外向内
level1.addEventListener('click', fm) //不传值，由内向外
level2.addEventListener('click', fn, true)
level2.addEventListener('click', fm)
level3.addEventListener('click', fn, true)
level3.addEventListener('click', fm)
level4.addEventListener('click', fn, true)
level4.addEventListener('click', fm)
level5.addEventListener('click', fn, true)
level5.addEventListener('click', fm)
level6.addEventListener('click', fn, true)
level6.addEventListener('click', fm)
level7.addEventListener('click', fn, true)
level7.addEventListener('click', fm)