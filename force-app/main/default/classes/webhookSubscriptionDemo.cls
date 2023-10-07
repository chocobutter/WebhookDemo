@RestResource(urlMapping='/api/Webooks/pushDetailsdemo/*')
global with sharing class webhookSubscriptionDemo{
    @HttpPost
    global static void handleNotification(){

        try {
            RestRequest request = RestContext.request;
            RestResponse response = RestContext.response;
        } catch (Exception e) {
            System.debug('Exception Happened: ' + e.getMessage());
        }

        //test;
        System.debug('Exception Happened: ');
    }
}