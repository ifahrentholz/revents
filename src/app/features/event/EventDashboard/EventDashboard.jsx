import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = {
  deleteEvent
};

class EventDashboard extends Component {
  /**
   * @param {String} eventId
   * @returns {Function}
   */
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDashboard);
