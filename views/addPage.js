const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Author</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control">
      </div>
    </div>

    <div class="form-group">
      <label for="author-email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="author-email" name="author-email" type="text" class="form-control">
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
    <label for="page-content" class="col-sm-2 control-label">Page Content</label>
    <div class="col-sm-10">
      <textarea id="page-content" rows="5" name="page-content" type="textarea" class="form-control"></textarea>
    </div>
  </div>

    <div>PLACEHOLDER FOR PAGE STATUS INPUT FIELD</div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
