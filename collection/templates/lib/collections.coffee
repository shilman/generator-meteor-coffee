class @<%= classyNameSingular %>
  constructor: (doc) ->
    _.extend(this, doc)

@<%= classyName %> = new Mongo.Collection('<%= nameOnly %>',
  transform: (doc) -> new <%= classyNameSingular %>(doc)
)
