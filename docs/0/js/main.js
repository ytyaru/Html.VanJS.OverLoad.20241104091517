window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.OverLoad.20241104091517/`}, 'OverLoad')),
        p('JSでオーバーロードする。'),
//        p('Overload with JS.'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

