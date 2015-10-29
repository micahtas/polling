/**
 * Created by Micah on 10/28/2015.
 */

Polls = new Mongo.Collection('polls');

if(Meteor.isServer)
{
    Meteor.publish("polls", function(){
        return Polls.find();
    });
}

if(Meteor.isClient)
{
    Meteor.subscribe("polls");
}