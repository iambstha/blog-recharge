'use client'
import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownRenderer extends React.Component {
  render() {
    const { markdownContent } = this.props;

    return (
      <div>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    );
  }
}

export default MarkdownRenderer;
