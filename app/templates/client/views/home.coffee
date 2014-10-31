Template.home.helpers(
    myAppVariable: -> Session.get('myAppVariable')
)

Template.home.events(
    'click button': (event, template) ->
        Session.set('myAppVariable', Math.floor(Math.random() * 11))
)
