import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../eventActions';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

const mapDispatchToProps = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  /**
   * @param {Event} evt
   */
  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      };
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };

  /**
   * @param {Event} evt
   */
  onInputChange = evt => {
    const newEvent = this.state.event;

    newEvent[evt.target.name] = evt.target.value;

    this.setState({
      event: newEvent
    });
  };

  render() {
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Field name="title" type="text" component="input" placeholder="Event Title" />
          <Form.Field>
            <label>Event Date</label>
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={this.onInputChange}
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              value={event.city}
              name="city"
              onChange={this.onInputChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              value={event.venue}
              name="venue"
              onChange={this.onInputChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={event.hostedBy}
              onChange={this.onInputChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'eventForm' })(EventForm));
