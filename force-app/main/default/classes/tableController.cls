public with sharing class tableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, AnnualRevenue, Industry, Phone FROM Account LIMIT 25];
    }
} 