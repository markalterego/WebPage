const animalForm = document.getElementById('animalForm');
const icecreamForm = document.getElementById('icecreamForm');
const templateForm = document.getElementById('templateForm');

const animalFormAnswer = document.getElementById('animalFormAnswer');
const icecreamFormAnswer = document.getElementById('icecreamFormAnswer');

const answeredTable = document.getElementById('answered'); 

let answered = // holds the count of all survey answers
[
    { answer: 'dogs', count: 0 },
    { answer: 'cats', count: 0 },
    { answer: 'other', count: 0 },
    { answer: 'vanilla', count: 0 },
    { answer: 'chocolate', count: 0 },
    { answer: 'strawberry', count: 0 },
    { answer: 'other2', count: 0 },
    { answer: '???', count: 0 }
]; 

document.addEventListener('DOMContentLoaded', () => 
{
    if(localStorage.getItem('answered') !== null) // getting stored answered array
    {
        answered = JSON.parse(localStorage.getItem('answered')); // getting the saved answer counts
        updateTable();
    }
});

animalForm.addEventListener('submit', (e) => // when form is submitted
{
    e.preventDefault();
    
    const formData = new FormData(animalForm); 

    let item = formData.get('animalQuestion'); // finding value for key input

    if(item==='dogs')
    {
        animalFormAnswer.textContent = 'You answered: Dogs! Woof!';
    }
    else if(item==='cats')
    {
        animalFormAnswer.textContent = 'You answered: Cats! Meow!';
    }
    else if(item==='other')
    {
        animalFormAnswer.textContent = 'You answered: Other! * makes unknown sound *';
    }
    else
    {
        animalFormAnswer.textContent = 'You answered: Nothing! Not a fan of animals?';
    }

    for(let i = 0; i < answered.length; i++)
    {
        if(item === answered[i].answer)
        {
            answered[i].count++; // updating the count of the given answer
            break;
        }
    }

    console.log(answered);
    localStorage.setItem('answered', JSON.stringify(answered)); // saving answered to localstorage as JSON string
    updateTable();
});

icecreamForm.addEventListener('submit', (e) => 
{
    e.preventDefault();

    const formData = new FormData(icecreamForm); 
    const p = document.createElement('p');

    let ans = 'You answered: ';
    let item = '';
    let items = [];

    for(item of formData)
    {   
        if(item[1]==='vanilla')
        {
            ans += 'Vanilla, '; 
        }
        else if(item[1]==='chocolate')
        {
            ans += 'Chocolate, ';
        }
        else if(item[1]==='strawberry')
        {
            ans += 'Strawberry, ';
        }
        else if(item[1]==='other2')
        {
            ans += 'Other, ';
        }

        items.push(item[1]);
    }

    if(ans === 'You answered: ')
    {
        ans += 'Nothing! I need to update my list of options...';
    }
    else if(ans === 'You answered: Other, ')
    {
        ans = ans.slice(0, -2); // get rid of space after last item
        ans += '! Wonder what flavor that would be...';
    }
    else
    {
        ans = ans.slice(0, -2); // get rid of space after last item
        ans += '! That sounds yummy!';
    }

    icecreamFormAnswer.textContent = ans;

    let i = 0;
    let ii = 0;

    while(i < items.length) // iterating survey answers
    {
        while(ii < answered.length) // iterating possible answers
        {
            if(items[i] === answered[ii].answer)
            {
                answered[ii].count++; // updating the count of the given answer
            }
            ii++;
        }
        ii=0, i++;
    }

    console.log(answered);
    localStorage.setItem('answered', JSON.stringify(answered)); // saving answered to localstorage as JSON string
    updateTable();
});

templateForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    
    let lastindex = answered.pop();
    lastindex.count++;
    answered.push(lastindex);

    console.log(answered);
    localStorage.setItem('answered', JSON.stringify(answered)); // saving answered to localstorage as JSON string
    updateTable();

    alert('\nALERT!!\n\n' +
          '1. This button is under maintenance\n' +
          '2. Please refrain from touching\n' +
          '3. Thank you for understanding');
});

function updateTable()
{
    for(let i = 0; i < answered.length; i++)
    {   
        let s = 'cell_' + answered[i].answer;
        
        if(document.getElementById(s) !== null) // searching for a table cell
        {
            document.getElementById(s).textContent = answered[i].count;
        }
    }
}