import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';
import Dropzone from 'react-dropzone';

class FileDrop extends Component {

  render() {
    return (
      <Col md={12}>
        <Dropzone
          className="filedrop"
          onDrop={this.props.handleFileUpload}
          style={{
            width: '95%',
            height: '400px',
            borderWidth: '2px',
            borderColor: '#999',
            borderStyle: 'dashed',
            borderRadius: '7px',
            padding: '10px',
            color: '#707070',
            cursor: 'pointer',
            fontSize: '50px'
          }}
        >
          <div>
            Drop a PDF here, or click to select one, to begin daltonization.
          </div>
        </Dropzone>
      </Col>
    );
  }

}

export default FileDrop;