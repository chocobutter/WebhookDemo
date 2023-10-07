public with sharing class GetAllOpps {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAllOpps() {
        return [select Name, StageName, CloseDate from Opportunity LIMIT 50];
    }
}