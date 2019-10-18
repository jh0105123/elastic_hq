import React from "react";
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText
} from "@elastic/eui";
import { FormattedMessage } from "@kbn/i18n/react";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get("../api/ElasticHQ/example").then(resp => {
      this.setState({ time: resp.data.time });
    });
  }
  render() {
    return (
      <EuiPage>
        {/* <meta
          http-equiv="refresh"
          content="0;url=http://bluecats.mirero.co.kr:5000/"
        /> */}
        <embed type="text/html" src="//bluecats.mirero.co.kr:5000/" />
        {/* <iframe src="http://bluecats.mirero.co.kr:5000/"></iframe> */}
      </EuiPage>
    );
  }
}
