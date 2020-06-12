import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class TwitterContainer extends Component {



  constructor(props) {
    super(props);
    console.log('prp', this.props);
  }

  componentDidUpdate(prevProps) {
    if (!(this.props.source === prevProps.source)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      console.log('diff')
      this.render()
    }
  }
  render() {



    return (
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={this.props.source}
          options={{ height: '1000vh' }}
        />
      </div>
    );
  }
}

export default TwitterContainer;




