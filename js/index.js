$(document).ready(function() {
    console.log("document is ready");
});

const network = {
    blockchain:'eos',
    host:'api.pennstation.eosnewyork.io',
    port:7001,
    protocol:'http',
    chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
};

var _identity = null;

document.addEventListener('scatterLoaded', scatterExtension => {
    const scatter = window.scatter;
    window.scatter = null;
    scatter.requireVersion(3.0);

    console.log('About to get identity');

    //personal:['firstname', 'lastname'],
    //location:['country'],
    
    scatter.getIdentity({
        accounts:[network]
    }).then(identity => {

        const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
        console.log(account);
        
        // You can pass in any additional options you want into the eosjs reference.
        const eosOptions = { expireInSeconds:60 };
        console.log('xxxx');
        // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
        const eos = scatter.eos(network, Eos, eosOptions);
        console.log(eos);
        _identity = identity;

    }).catch(error => {
        console.log('error');
    });

})


var txn = function() {
    console.log('txn test');
    console.log(eos);

}
