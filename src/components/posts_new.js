import React, { Component } from 'react';
import { reduxForm} from 'redux-form';
import { createPost } from '../actions/index';

export class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create Form</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter the title'
  }
  if (!values.categories) {
    errors.categories = 'Enter categories'
  }
  if (!values.content) {
    errors.content = 'Enter some content'
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd argument is mapDispatchToProps
// reduxForm: 1st argument is from config, 2nd argument is mapStateToProps, 3rd argument is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
