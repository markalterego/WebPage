const buttonClearStorage = document.getElementById('btnClear');
const buttonDisplayStorage = document.getElementById('btnDisplay');
const p = document.getElementById('lsparagraph');

buttonClearStorage.addEventListener('click', () => // clears all local storage
{
    localStorage.clear();
});

buttonDisplayStorage.addEventListener('click', () => // displays saved local storage
{
    let s = localStorage.getItem('answered');

    if(p.textContent === '')
    {
        if(s===null)
        {
            p.textContent = 'empty';
        }
        else 
        {
            p.textContent = s;
        }
    }
    else 
    {
        p.textContent = '';
    }
});