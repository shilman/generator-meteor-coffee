describe "<%= _.last(name.split('/')) %>", ->
  beforeEach ->
    data = {}
    @view = Blaze.renderWithData(Template.<%= _.last(name.split('/')) %>, data, @$fixture.get(0))
  it "should show", ->
    $view = @$fixture.find(".js-<%= dasherizedName %>")
    expect($view).toBeVisible()
    expect($view).toHaveText("<%= name %>")
