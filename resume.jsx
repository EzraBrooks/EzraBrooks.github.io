var xhr = new XMLHttpRequest();
xhr.open('GET', '/resume.md');
xhr.addEventListener('load', function (data) {
    ReactDOM.render(
        <div dangerouslySetInnerHTML={{ __html: marked(data.target.response) }}></div>,
        document.getElementById('resume')
    );
});
xhr.send();

