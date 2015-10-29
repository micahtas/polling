/**
 * Created by Micah on 10/28/2015.
 */

Meteor.methods(
    {
        addVote: function(pollId, voteId){
            // create the incrementing object so we can add to the corresponding vote
            var voteString = 'choices.' + voteID + '.votes';
            var action = {};
            action[voteString] = 1;

            // increment the number of votes for this choice
            Polls.update(
                { _id: pollID },
                { $inc: action }
            );
        },

        addPoll: function(newPoll){
            Polls.insert(newPoll);
        }
    }
)