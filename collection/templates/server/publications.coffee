Meteor.publish('<%= nameOnly %>', ->
  <%= classyName %>.find()
)

Meteor.publish('<%= nameOnlySingular %>ById', (id) ->
  <%= classyName %>.find(id)
)
