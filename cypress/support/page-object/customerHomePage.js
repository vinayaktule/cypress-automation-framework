import customerHomePageOR from '../object-repo/customerHomePage.json';

class CustomerHomePage{

    verifyCustomerHomePageContent(){
        cy.get(customerHomePageOR.bankLabels).should('be.visible')
            .and('contain.text', 'Account Number :')
            .and('contain.text', 'Balance :')
            .and('contain.text', 'Currency :');
    }

    clickOnTransactions(){
        cy.get(customerHomePageOR.bankOperations).contains('Transactions').click();
    }

    clickOnDeposit(){
        cy.get(customerHomePageOR.bankOperations).contains('Deposit').click();
    }

    clickOnWithdrawl(){
        cy.get(customerHomePageOR.bankOperations).contains('Withdrawl').click();
    }
}

export default new CustomerHomePage();