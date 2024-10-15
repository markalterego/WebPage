const animalForm = document.getElementById('animalForm');
const icecreamForm = document.getElementById('icecreamForm');
const templateForm = document.getElementById('templateForm');

const animalFormAnswer = document.getElementById('animalFormAnswer');
const icecreamFormAnswer = document.getElementById('icecreamFormAnswer');

const answeredTable = document.getElementById('answered'); 

let answered = [];

animalForm.addEventListener('submit', (e) => // when form is submitted
{
    e.preventDefault();
    
    const formData = new FormData(animalForm); // [0]name[1]item
    
    for(item of formData)
    {
        if(item[1]=='dogs')
        {
            animalFormAnswer.textContent = 'You answered: Dogs! Woof!';
        }
        else if(item[1]=='cats')
        {
            animalFormAnswer.textContent = 'You answered: Cats! Meow!';
        }
        else if(item[1]=='other')
        {
            animalFormAnswer.textContent = 'You answered: Other! * makes unknown sound *';
        }

        answered.push(item);
    }

    for(let i = 0; i < answered.length; i++)
    {   
        if(i == 0)
        {
            answeredTable.textContent = '';
        }    
            
        const tr = document.createElement('tr'); // create row
        const td = document.createElement('td'); // create cell

        td.textContent = answered[i][1];

        tr.appendChild(td);
        answeredTable.appendChild(tr);
    }
});

icecreamForm.addEventListener('submit', (e) => 
{
    e.preventDefault();

    const formData = new FormData(icecreamForm); 
    const p = document.createElement('p');

    let ans = 'You answered: ';

    for(item of formData)
    {   
        if(item[1]=='vanilla')
        {
            ans += 'Vanilla, ';
        }
        else if(item[1]=='chocolate')
        {
            ans += 'Chocolate, ';
        }
        else if(item[1]=='strawberry')
        {
            ans += 'Strawberry, ';
        }
        else if(item[1]=='other2')
        {
            ans += 'Other, ';
        }
    }

    if(ans == 'You answered: ')
    {
        ans += 'Nothing! I need to update my list of options...';
    }
    else if(ans == 'You answered: Other, ')
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
});

templateForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    alert('\nALERT!!\n\n' +
          '1. This button is under maintenance\n' +
          '2. Please refrain from touching\n' +
          '3. Thank you for understanding');
});