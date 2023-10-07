public with sharing class RecentRecordCtrl {
    @AuraEnabled
    public static List<Sobject> getRecentRecords(String objectName, Integer numRecords){
        try {
            String queryString = 'SELECT Id, Name, LastViewedDate FROM '+objectName+' WHERE LastViewedDate != null ORDER BY LastViewedDate desc LIMIT '+numRecords+'';
            return Database.query(queryString);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}