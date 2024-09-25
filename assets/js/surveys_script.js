const animalForm = document.getElementById('animalForm');
const icecreamForm = document.getElementById('icecreamForm');

const animalFormAnswer = document.getElementById('animalFormAnswer');
const icecreamFormAnswer = document.getElementById('icecreamFormAnswer');

animalForm.addEventListener('submit', (e) => // when form is submitted
{
    e.preventDefault();
    
    const formData = new FormData(animalForm); // [0]name[1]item
    
    for(item of formData)
    {
        if(item[1]=='dogs')
        {
            animalFormAnswer.textContent = 'ALERT!! YOU ANSWERED DOGS!!!';
        }
        else if(item[1]=='cats')
        {
            animalFormAnswer.textContent = 'ALERT!! YOU ANSWERED CATS!!!';
        }
        else if(item[1]=='other')
        {
            animalFormAnswer.textContent = 'ALERT!! YOU ANSWERED OTHER!!!';
        }
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