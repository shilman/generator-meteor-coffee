stubHelper = (what) ->
  spyOn(Blaze._globalHelpers, what).and.returnValue(null)

beforeEach ->
  $('body').append('<div id="fixture"/>')
  @$fixture = $("#fixture")
  stubHelper('yield')
  stubHelper('contentFor')

afterEach ->
  @$fixture.remove()
