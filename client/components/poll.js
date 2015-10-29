/**
 * Created by Micah on 10/28/2015.
 */
Template.poll.events({

    // handle the form submission
    'click .vote': function(event) {

        // stop the form from submitting
        event.preventDefault();

        // get the parent (poll) id
        var pollID = $(event.currentTarget).parent('.poll').data('id');
        var voteID = $(event.currentTarget).data('id');

        Meteor.call("addVote", pollId, voteId);
    }
});