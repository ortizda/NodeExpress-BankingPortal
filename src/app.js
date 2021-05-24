const fs = require('fs');
const path = require('path');
const express = require('express')

const accountData,
      accounts,
      userData,
      users
      

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

fs.readFileSync(('src/json/accounts.json'), () =>
    accountData,    
    accounts = JSON.parse(accountData)
);

fs.readFileSync(('src/json/users.json'), () =>
    userData,    
    userss = JSON.parse(userData)
);

app.get('/savings',(req,res) =>
    res.render('account',
        {accounts: accounts.savings}
    )
);

app.get('/checking',(req,res) =>
    res.render('account',
        {accounts: accounts.checking}
    )
);

app.get('/credit',(req,res) =>
    res.render('account',
        {accounts: accounts.credit}
    )
);

app.get('/profile', (req, res) =>
    res.render('account',
        {user: users[0]}

    )
);

app.get('/',(req,res) => 
    res.render('Account Summary', 
        { accounts: accounts }
    )
);

app.listen(3000, () =>
    console.log('PS Project Running on port 3000!')
);